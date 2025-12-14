# Blueprint3D Next.js Application Feature Summary

## Project Overview

Blueprint3D is a 3D interior design application built on Three.js that allows users to create floor plans and design interior spaces. This document summarizes the existing features of the Next.js version (in the `app/` directory).

## Technology Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Language**: TypeScript 5.9
- **3D Engine**: Three.js r181
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI + shadcn/ui
- **Internationalization**: next-intl
- **Build Tool**: Turbopack

## Core Feature Modules

### 1. 2D Floor Plan Editor

**Location**: `app/components/Blueprint3DApp.tsx` + `src/floorplanner/`

**Features**:
- Three editing modes:
  - **Move Mode**: Move corners and walls
  - **Draw Mode**: Create new walls
  - **Delete Mode**: Remove walls and corners
- Real-time 2D floor plan rendering
- Half-edge data structure for wall connectivity management
- Automatic room area calculation

**Control Component**: `FloorplannerControls.tsx`

### 2. 3D Real-Time Visualization

**Location**: `src/three/main.ts`

**Features**:
- Three.js scene rendering
- Real-time 3D preview
- Lighting and shadow system
- Camera controls (OrbitControls)
- Item interaction (selection, movement, rotation)

**Control Component**: `CameraControls.tsx`

### 3. Item Management System

**Location**: `app/components/ItemsList.tsx`

**Features**:
- 30+ furniture item library
- Item categories:
  - Floor items (tables, chairs, sofas, etc.)
  - Wall items (pictures, shelves, etc.)
  - In-wall items (doors, windows, etc.)
- Drag-and-drop item placement
- Delete selected items
- Item property editing

**Item Types**:
```
- Open/Closed Doors
- Windows
- Tables (Square, Round)
- Chairs
- Sofas
- Bookcases
- Beds
- Rugs
- And more...
```

### 4. Texture System

**Location**: `app/components/TextureSelector.tsx`

**Features**:
- Wall texture selection
- Floor texture selection
- Texture preview
- Texture scale control
- Built-in texture library

**Texture Types**:
- Wall textures (brick, wood panels, etc.)
- Floor textures (hardwood, tiles, carpet, etc.)

### 5. Project Management

**Location**: `app/components/MainControls.tsx`

**Features**:
- Create new project
- Save project (local + cloud storage)
- Load project (from cloud storage)
- Delete project
- Export design as image

**Storage Format**: JSON (contains floorplan and items data)

### 6. Internationalization Support

**Location**: `app/[locale]/` + `messages/`

**Supported Languages**:
- English (en)
- Simplified Chinese (zh-CN)
- Traditional Chinese (zh-TW)

**Translation Files**:
- `messages/en.json`
- `messages/zh-CN.json`
- `messages/zh-TW.json`

**Switching Method**: Language selector in settings panel

### 7. User Interface

**Main Components**:

#### Sidebar (`Sidebar.tsx`)
- Collapsible sidebar
- Tab navigation:
  - Items
  - Textures
- Responsive layout

#### MainControls (`MainControls.tsx`)
- Top toolbar
- 2D/3D view toggle
- New, Save, Load, Delete buttons
- Settings button

#### FloorplannerControls (`FloorplannerControls.tsx`)
- Floor plan editing toolbar
- Mode switching buttons
- Visible only in 2D mode

#### CameraControls (`CameraControls.tsx`)
- 3D camera control toolbar
- Zoom buttons
- View reset
- Visible only in 3D mode

#### ContextMenu (`ContextMenu.tsx`)
- Right-click context menu
- Delete item functionality

#### Settings Modal (`Settings.tsx`)
- Language switcher
- Unit switcher (inch/meter/centimeter/millimeter)
- Other preference settings

### 8. 3D Interaction

**Features**:
- Orbit camera controls (rotate, zoom, pan)
- Item selection (click)
- Item movement (drag)
- Item rotation
- Collision detection
- Wall and floor click events

### 9. Data Persistence

**Local Storage**:
- localStorage for user preferences
- Project data caching

**Cloud Storage Integration**:
- RESTful API endpoints
- Save/Load/Delete operations
- Error handling and retry mechanism

### 10. Error Handling

**Features**:
- Network error recovery
- Loading failure notifications
- Graceful degradation
- User-friendly error messages

## Application Architecture

### Component Hierarchy

```
Blueprint3DApp (Main Container)
├── MainControls (Top Toolbar)
├── Sidebar (Side Panel)
│   ├── ItemsList (Items List)
│   └── TextureSelector (Texture Selector)
├── FloorplannerControls (2D Editing Tools)
├── CameraControls (3D Camera Tools)
├── ContextMenu (Context Menu)
└── Settings (Settings Panel)
```

### State Management

**Main States** (9 useState hooks):
- `currentMode`: Current mode (floorplan/design)
- `blueprint3d`: Blueprint3D instance reference
- `floorplanner`: Floorplanner instance reference
- `three`: Three instance reference
- `selectedItem`: Currently selected item
- `contextMenu`: Context menu state
- `isClient`: Client-side rendering flag
- `showSettings`: Settings panel visibility
- `showDeleteConfirm`: Delete confirmation dialog state

### Event System

**Event Callbacks**:
- `itemSelectedCallbacks`: Item selection events
- `itemLoadedCallbacks`: Item loaded completion
- `wallClicked`: Wall click events
- `floorClicked`: Floor click events
- `updated_rooms`: Room update events

## Resource Files

### 3D Models
**Location**: `app/public/models/`

**Format**: JSON (custom format, uses JSONLoader)

**Item Count**: 30+

### Texture Images
**Location**: `app/public/rooms/textures/`

**Format**: PNG/JPG

**Types**:
- Wall textures
- Floor textures

### Configuration Files
**Location**: `app/public/constants/`

**Files**:
- Default configuration
- Example scene configuration

## Development Commands

```bash
# Development server
pnpm dev:nextjs       # Start at localhost:3000

# Production build
pnpm build:nextjs     # Build optimized version
pnpm start:nextjs     # Start production server
```

## Performance Features

- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Dynamic component imports
- **SSR Compatible**: Client components marked with 'use client'
- **Optimized Rendering**: React 19 performance improvements
- **Turbopack**: Fast development builds

## Browser Compatibility

- Supports modern browsers (Chrome, Firefox, Safari, Edge)
- WebGL support required
- Latest browser versions recommended for optimal performance

## Future Extension Points

Based on the code structure, potential expansion directions include:

1. **More Item Types**: Expand the item library
2. **Custom Materials**: Allow users to upload their own textures
3. **Export Formats**: Support more export formats (PDF, DWG, etc.)
4. **Collaboration**: Multi-user real-time editing
5. **VR Support**: Virtual reality browsing mode
6. **AI Assistance**: Intelligent layout suggestions
7. **Mobile Optimization**: Touch control optimization

## Documentation Updates

- **Creation Date**: 2025-11-27
- **Version**: v1.0
- **Maintainer**: Blueprint3D Team

---

For more detailed technical documentation, please refer to:
- `/docs/` - Other documentation
- `CLAUDE.md` - Project architecture guide
- `README.md` - Project introduction
