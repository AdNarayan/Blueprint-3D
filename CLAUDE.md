# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Blueprint3D is a 3D interior design application built on Three.js that allows users to create floor plans and design interior spaces. This is a modernized fork of the 9-year-old furnishup/blueprint3d project, with significant upgrades including Three.js r181, TypeScript, and modern build tools.

## Development Commands

### Vite Demo (Original)
```bash
pnpm install          # Install dependencies
pnpm dev              # Start Vite dev server at localhost:5173
pnpm build:modern     # Build for production
pnpm preview          # Preview production build
```

### Next.js Demo (Modern)
```bash
pnpm dev:nextjs       # Start Next.js dev server at localhost:3000
pnpm build:nextjs     # Build Next.js for production
pnpm start:nextjs     # Start production server
```

### Legacy
```bash
pnpm build:old        # Build using old Grunt system
```

## Architecture

### Core Architecture Pattern

Blueprint3D follows a Model-View-Controller pattern with three main systems:

1. **Model Layer** (`src/model/`)
   - `Model`: Central hub connecting Floorplan and Scene
   - `Floorplan`: Manages Walls, Corners, and Rooms using a half-edge data structure
   - `Scene`: Manages 3D Items and links to Three.js scene
   - Data flows: Model ↔ Floorplan ↔ Rooms/Walls/Corners and Model ↔ Scene ↔ Items

2. **3D Rendering Layer** (`src/three/`)
   - `Main`: Entry point for 3D visualization, manages renderer, camera, and scene
   - `Controller`: Handles user interactions with 3D objects (selection, movement, rotation)
   - `Controls`: OrbitControls-style camera controls
   - `FloorplanThree`: Renders the floorplan geometry in 3D (walls, floors)
   - `HUD`: Displays dimensional overlays

3. **2D Editor Layer** (`src/floorplanner/`)
   - `Floorplanner`: Interactive 2D floor plan editor with three modes:
     - `MOVE`: Move corners and walls
     - `DRAW`: Create new walls
     - `DELETE`: Remove walls and corners
   - `FloorplannerView`: Canvas-based rendering of the 2D floorplan

4. **Items System** (`src/items/`)
   - Abstract `Item` class extends THREE.Mesh for all placeable objects
   - Specialized item types:
     - `FloorItem`: Sits on floor (furniture)
     - `WallItem`: Attached to walls (pictures, shelves)
     - `InWallItem`: Embedded in walls (windows, doors)
     - `OnFloorItem`: Standard floor placement
     - `WallFloorItem`: Items at wall-floor junction
   - `Factory`: Creates items from type and URL

### Half-Edge Data Structure

The floorplan uses a half-edge mesh representation:
- `HalfEdge`: Directed edge that references next/previous edges and walls
- `Corner`: Vertex connecting half-edges
- `Wall`: Contains front and back half-edges
- `Room`: Defined by a cycle of half-edges

This structure enables efficient traversal and topological queries for room calculation and wall connectivity.

### Serialization Format

Projects serialize to JSON with two main sections:
```json
{
  "floorplan": {
    "corners": { "uuid": { "x": number, "y": number } },
    "walls": [{ "corner1": "uuid", "corner2": "uuid", "frontTexture": {...}, "backTexture": {...} }],
    "floorTextures": { "roomUuid": { "url": string, "scale": number } }
  },
  "items": [{ "item_type": number, "model_url": string, "xpos": number, "ypos": number, ... }]
}
```

### Event System

The codebase uses a custom EventEmitter pattern (`src/core/events.ts`) for decoupling:
- Model events: `roomLoadingCallbacks`, `roomLoadedCallbacks`
- Scene events: `itemLoadingCallbacks`, `itemLoadedCallbacks`, `itemRemovedCallbacks`
- Floorplan events: `new_wall_callbacks`, `new_corner_callbacks`, `redraw_callbacks`, `updated_rooms`
- Three.js events: `itemSelectedCallbacks`, `wallClicked`, `floorClicked`

### Configuration System

Global configuration in `src/core/configuration.ts`:
- `configDimUnit`: Dimension unit (inch/m/cm/mm)
- `configSystemUI`: System UI settings
- Uses string keys with get/set/listener pattern

## Code Style

Follow Google JavaScript Style Guide with these specifics:
- Use 2 spaces for indentation (no tabs)
- TypeScript files use lowercase with underscores: `HalfEdge` → `half_edge.ts`
- Import order: (1) External references, (2) Internal from other directories (alphabetical), (3) Internal from current directory (alphabetical)
- Add empty line after imports

## Two Demo Applications

### Vite Demo (`example/`)
- Vanilla JavaScript/TypeScript
- Entry: `example/index.html`
- Assets in `example/models/`, `example/textures/`
- Configuration in `example/constants/default.json`, `example/constants/example.json`

### Next.js Demo (`app/`)
- Next.js 16 with App Router, React 19, Tailwind CSS 4
- Main component: `app/components/Blueprint3DApp.tsx` (client component)
- UI components: Sidebar, MainControls, FloorplannerControls, CameraControls, ItemsList, TextureSelector, ContextMenu
- Assets in `app/public/models/`, `app/public/rooms/`
- Configuration in `app/public/constants/`

## Key Technical Details

### Three.js Version
Upgraded from r69 to r181. Legacy models use custom `JSONLoader` (`src/loaders/JSONLoader.ts`) to support old JSON format.

### Coordinate Systems
- Floorplan uses 2D coordinates in centimeters
- Three.js uses 3D coordinates with Y-up
- Dimensioning utilities in `src/core/dimensioning.ts` handle unit conversions

### Textures
- Wall textures: per-wall front/back with URL, stretch, and scale
- Floor textures: per-room with URL and scale
- Texture directory specified in Model constructor

### Item Placement
Items have placement constraints based on type:
- Floor items check for collisions with other items and room boundaries
- Wall items snap to walls and check valid positioning
- In-wall items (doors, windows) validate wall dimensions
