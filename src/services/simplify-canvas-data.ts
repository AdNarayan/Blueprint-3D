// Canvas Data Simplification for LLM-friendly format
// This utility transforms verbose canvas data into a compact, token-efficient format

import type { SavedFloorplan } from '../model/floorplan'
import type { SerializedItem } from '../model/model'

// Input types (from existing model)
interface CanvasData {
  floorplan: SavedFloorplan
  items: SerializedItem[]
}

// Output types (simplified)
interface SimplifiedMaterial {
  id: number
  type: 'texture'
  url: string
  stretch?: boolean
  scale?: number
}

interface SimplifiedArea {
  name: string
  boundary: number[] // Corner indices in order
  floorMaterialId?: number
}

interface SimplifiedWall {
  corners: [number, number] // [start corner index, end corner index]
  materials: [number | null, number | null] // [front material id, back material id]
}

interface SimplifiedItem {
  name: string
  pos: [number, number, number] // [x, y, z]
  rot: number
  scale: [number, number, number] // [x, y, z]
  fixed?: boolean
  resizable?: boolean
}

export interface SimplifiedCanvasData {
  materials: SimplifiedMaterial[]
  corners: [number, number][] // [x, y] coordinates
  layout: {
    walls: SimplifiedWall[]
    areas: SimplifiedArea[]
  }
  items: SimplifiedItem[]
}

/**
 * Simplifies canvas data for LLM consumption
 * - Replaces UUID with indices
 * - Deduplicates textures into material library
 * - Uses arrays instead of objects for coordinates
 * - Extracts room/area information from floor textures
 */
export function simplifyCanvasData(data: CanvasData): SimplifiedCanvasData {
  const { floorplan, items } = data

  // Step 1: Build material library and deduplicate textures
  const materialMap = new Map<string, number>()
  const materials: SimplifiedMaterial[] = []

  function getMaterialId(texture: { url: string; stretch?: boolean; scale?: number | null } | undefined): number | null {
    if (!texture || !texture.url) return null

    // Create a unique key for this texture
    const key = `${texture.url}|${texture.stretch ?? false}|${texture.scale ?? 0}`

    if (materialMap.has(key)) {
      return materialMap.get(key)!
    }

    const id = materials.length
    const material: SimplifiedMaterial = {
      id,
      type: 'texture',
      url: texture.url,
    }

    if (texture.stretch !== undefined) {
      material.stretch = texture.stretch
    }
    if (texture.scale !== undefined && texture.scale !== null) {
      material.scale = texture.scale
    }

    materials.push(material)
    materialMap.set(key, id)
    return id
  }

  // Step 2: Build corner mapping (UUID -> index) and simplified corners array
  const cornerIds = Object.keys(floorplan.corners)
  const cornerIndexMap = new Map<string, number>()
  const corners: [number, number][] = []

  cornerIds.forEach((cornerId, index) => {
    cornerIndexMap.set(cornerId, index)
    const corner = floorplan.corners[cornerId]
    // Round to 2 decimal places to reduce token usage
    corners.push([
      Math.round(corner.x * 100) / 100,
      Math.round(corner.y * 100) / 100
    ])
  })

  // Step 3: Simplify walls
  const walls: SimplifiedWall[] = []

  floorplan.walls.forEach((wall) => {
    const corner1Index = cornerIndexMap.get(wall.corner1)
    const corner2Index = cornerIndexMap.get(wall.corner2)

    if (corner1Index === undefined || corner2Index === undefined) {
      console.warn('Wall references unknown corner:', wall)
      return
    }

    const frontMaterialId = getMaterialId(wall.frontTexture)
    const backMaterialId = getMaterialId(wall.backTexture)

    walls.push({
      corners: [corner1Index, corner2Index],
      materials: [frontMaterialId, backMaterialId]
    })
  })

  // Step 4: Extract areas/rooms from floor textures
  const areas: SimplifiedArea[] = []

  // Parse newFloorTextures keys (format: "uuid1,uuid2,uuid3,...")
  const newFloorTextures = floorplan.newFloorTextures || {}
  Object.entries(newFloorTextures).forEach(([cornerUuidsStr, texture], index) => {
    const cornerUuids = cornerUuidsStr.split(',')
    const boundary: number[] = []

    cornerUuids.forEach((uuid) => {
      const cornerIndex = cornerIndexMap.get(uuid)
      if (cornerIndex !== undefined) {
        boundary.push(cornerIndex)
      }
    })

    if (boundary.length >= 3) {
      const floorMaterialId = getMaterialId({ url: texture.url, scale: texture.scale })

      areas.push({
        name: `area_${index}`,
        boundary,
        floorMaterialId: floorMaterialId ?? undefined
      })
    }
  })

  // Also handle legacy floorTextures if present
  const legacyFloorTextures = floorplan.floorTextures || {}
  Object.entries(legacyFloorTextures).forEach(([_roomId, texture], index) => {
    // For legacy format, we might not have explicit boundary info
    // We can still add the material reference
    const floorMaterialId = getMaterialId({ url: texture.url, scale: texture.scale })

    // Skip if we already have this area from newFloorTextures
    if (areas.length === 0) {
      areas.push({
        name: `legacy_area_${index}`,
        boundary: [], // Will be empty for legacy format
        floorMaterialId: floorMaterialId ?? undefined
      })
    }
  })

  // Step 5: Simplify items (remove type and url to reduce tokens)
  const simplifiedItems: SimplifiedItem[] = items.map((item) => {
    const simplified: SimplifiedItem = {
      name: item.item_name,
      pos: [
        Math.round(item.xpos * 100) / 100,
        Math.round(item.ypos * 100) / 100,
        Math.round(item.zpos * 100) / 100
      ],
      rot: Math.round(item.rotation * 100) / 100,
      scale: [
        Math.round(item.scale_x * 100) / 100,
        Math.round(item.scale_y * 100) / 100,
        Math.round(item.scale_z * 100) / 100
      ]
    }

    // Only include optional properties if they differ from defaults
    if (item.fixed) {
      simplified.fixed = true
    }
    if (item.resizable !== undefined && item.resizable !== true) {
      simplified.resizable = item.resizable
    }

    return simplified
  })

  return {
    materials,
    corners,
    layout: {
      walls,
      areas
    },
    items: simplifiedItems
  }
}

/**
 * Convert simplified canvas data to minified JSON string (no whitespace)
 * This is the format that should be sent to LLM for maximum token efficiency
 */
export function toMinifiedJSON(data: SimplifiedCanvasData): string {
  return JSON.stringify(data)
}

/**
 * Convert simplified canvas data to formatted JSON string (for debugging)
 */
export function toFormattedJSON(data: SimplifiedCanvasData): string {
  return JSON.stringify(data, null, 2)
}

/**
 * Calculate token savings estimate
 */
export function estimateTokenSavings(original: CanvasData, simplified: SimplifiedCanvasData): {
  originalSize: number
  simplifiedSize: number
  minifiedSize: number
  savings: number
  savingsPercent: number
  minifiedSavings: number
  minifiedSavingsPercent: number
} {
  const originalSize = JSON.stringify(original).length
  const simplifiedSize = JSON.stringify(simplified, null, 2).length
  const minifiedSize = JSON.stringify(simplified).length
  const savings = originalSize - simplifiedSize
  const savingsPercent = Math.round((savings / originalSize) * 100)
  const minifiedSavings = originalSize - minifiedSize
  const minifiedSavingsPercent = Math.round((minifiedSavings / originalSize) * 100)

  return {
    originalSize,
    simplifiedSize,
    minifiedSize,
    savings,
    savingsPercent,
    minifiedSavings,
    minifiedSavingsPercent
  }
}
