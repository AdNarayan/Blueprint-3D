// Item categories
export type ItemCategory = 'bed' | 'drawer' | 'wardrobe' | 'light' | 'storage' | 'table' | 'chair' | 'sofa' | 'armchair' | 'stool' | 'door' | 'window'

export interface Item {
  key: string
  name: string
  image: string
  model: string
  type: string
  category: ItemCategory
}

// Items data
export const ITEMS: Item[] = [
  // Beds
  {
    key: 'bedOne',
    name: 'Bed - One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/bed-1.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/bed-1.glb',
    type: '1',
    category: 'bed'
  },
  // Drawers
  {
    key: 'drawerOne',
    name: 'Drawer - One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/drawer-1.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/drawer-1.glb',
    type: '1',
    category: 'drawer'
  },
  {
    key: 'drawerTwo',
    name: 'Drawer - Two',
    image: 'https://cdn-images.lumenfeng.com/models-cover/drawer-2.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/drawer-2.glb',
    type: '1',
    category: 'drawer'
  },
  {
    key: 'drawerThree',
    name: 'Drawer - Three',
    image: 'https://cdn-images.lumenfeng.com/models-cover/drawer-3.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/drawer-3.glb',
    type: '1',
    category: 'drawer'
  },
  {
    key: 'drawerFour',
    name: 'Drawer - Four',
    image: 'https://cdn-images.lumenfeng.com/models-cover/drawer-4.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/drawer-4.glb',
    type: '1',
    category: 'drawer'
  },
  {
    key: 'drawerFive',
    name: 'Drawer - Five',
    image: 'https://cdn-images.lumenfeng.com/models-cover/drawer-5.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/drawer-5.glb',
    type: '1',
    category: 'drawer'
  },
  {
    key: 'drawerSix',
    name: 'Drawer - Six',
    image: 'https://cdn-images.lumenfeng.com/models-cover/drawer-6.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/drawer-6.glb',
    type: '1',
    category: 'drawer'
  },
  // Wardrobes
  {
    key: 'wardrobeOne',
    name: 'Wardrobe - One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/wardrobe-1.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/wardrobe-1.glb',
    type: '1',
    category: 'wardrobe'
  },
  {
    key: 'wardrobeTwo',
    name: 'Wardrobe - Two',
    image: 'https://cdn-images.lumenfeng.com/models-cover/wardrobe-2.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/wardrobe-2.glb',
    type: '1',
    category: 'wardrobe'
  },
  {
    key: 'wardrobeThree',
    name: 'Wardrobe - Three',
    image: 'https://cdn-images.lumenfeng.com/models-cover/wardrobe-3.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/wardrobe-3.glb',
    type: '1',
    category: 'wardrobe'
  },
  {
    key: 'wardrobeFour',
    name: 'Wardrobe - Four',
    image: 'https://cdn-images.lumenfeng.com/models-cover/wardrobe-4.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/wardrobe-4.glb',
    type: '1',
    category: 'wardrobe'
  },
  // Lighting
  {
    key: 'lightOne',
    name: 'Light - One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/light-1.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/light-1.glb',
    type: '1',
    category: 'light'
  },
  {
    key: 'lightTwo',
    name: 'Light - Two',
    image: 'https://cdn-images.lumenfeng.com/models-cover/light-2.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/light-2.glb',
    type: '1',
    category: 'light'
  },
  {
    key: 'lightThree',
    name: 'Light - Three',
    image: 'https://cdn-images.lumenfeng.com/models-cover/light-3.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/light-3.glb',
    type: '1',
    category: 'light'
  },
  {
    key: 'lightFour',
    name: 'Light - Four',
    image: 'https://cdn-images.lumenfeng.com/models-cover/light-4.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/light-4.glb',
    type: '1',
    category: 'light'
  },
  // Storage
  {
    key: 'storageOne',
    name: 'Storage - One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-1.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-1.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageTwo',
    name: 'Storage - Two',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-2.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-2.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageThree',
    name: 'Storage - Three',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-3.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-3.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageFour',
    name: 'Storage - Four',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-4.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-4.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageFive',
    name: 'Storage - Five',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-5.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-5.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageSix',
    name: 'Storage - Six',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-6.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-6.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageSeven',
    name: 'Storage - Seven',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-7.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-7.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageEight',
    name: 'Storage - Eight',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-8.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-8.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageNine',
    name: 'Storage - Nine',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-9.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-9.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageTen',
    name: 'Storage - Ten',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-10.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-10.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageEleven',
    name: 'Storage - Eleven',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-11.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-11.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageTwelve',
    name: 'Storage - Twelve',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-12.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-12.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageThirteen',
    name: 'Storage - Thirteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-13.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-13.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageFourteen',
    name: 'Storage - Fourteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-14.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-14.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageFifteen',
    name: 'Storage - Fifteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-15.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-15.glb',
    type: '1',
    category: 'storage'
  },
  {
    key: 'storageSixteen',
    name: 'Storage - Sixteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/storage-16.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/storage-16.glb',
    type: '1',
    category: 'storage'
  },
  // Tables
  {
    key: 'tableOne',
    name: 'Table - One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-1.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-1.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableTwo',
    name: 'Table - Two',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-2.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-2.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableThree',
    name: 'Table - Three',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-3.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-3.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableFour',
    name: 'Table - Four',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-4.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-4.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableFive',
    name: 'Table - Five',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-5.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-5.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableSix',
    name: 'Table - Six',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-6.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-6.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableSeven',
    name: 'Table - Seven',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-7.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-7.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableEight',
    name: 'Table - Eight',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-8.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-8.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableNine',
    name: 'Table - Nine',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-9.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-9.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableTen',
    name: 'Table - Ten',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-10.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-10.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableEleven',
    name: 'Table - Eleven',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-11.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-11.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableTwelve',
    name: 'Table - Twelve',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-12.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-12.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableThirteen',
    name: 'Table - Thirteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-13.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-13.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableFourteen',
    name: 'Table - Fourteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-14.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-14.glb',
    type: '1',
    category: 'table'
  },
  {
    key: 'tableFifteen',
    name: 'Table - Fifteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/table-15.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/table-15.glb',
    type: '1',
    category: 'table'
  },
  // Seating - Chairs
  {
    key: 'chairOne',
    name: 'Chair - One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-1.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-1.glb',
    type: '1',
    category: 'chair'
  },
  {
    key: 'chairTwo',
    name: 'Chair - Two',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-2.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-2.glb',
    type: '1',
    category: 'chair'
  },
  {
    key: 'chairThree',
    name: 'Chair - Three',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-3.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-3.glb',
    type: '1',
    category: 'chair'
  },
  {
    key: 'chairFour',
    name: 'Chair - Four',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-4.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-4.glb',
    type: '1',
    category: 'chair'
  },
  {
    key: 'chairFive',
    name: 'Chair - Five',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-5.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-5.glb',
    type: '1',
    category: 'chair'
  },
  {
    key: 'chairSix',
    name: 'Chair - Six',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-6.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-6.glb',
    type: '1',
    category: 'chair'
  },
  {
    key: 'chairSeven',
    name: 'Chair - Seven',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-7.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-7.glb',
    type: '1',
    category: 'chair'
  },
  {
    key: 'chairEight',
    name: 'Chair - Eight',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-8.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-8.glb',
    type: '1',
    category: 'chair'
  },
  {
    key: 'chairNine',
    name: 'Chair - Nine',
    image: 'https://cdn-images.lumenfeng.com/models-cover/chair-9.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/chair-9.glb',
    type: '1',
    category: 'chair'
  },
  // Seating - Sofas
  {
    key: 'sofaTen',
    name: 'Sofa - Ten',
    image: 'https://cdn-images.lumenfeng.com/models-cover/sofa-10.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/sofa-10.glb',
    type: '1',
    category: 'sofa'
  },
  {
    key: 'sofaEleven',
    name: 'Sofa - Eleven',
    image: 'https://cdn-images.lumenfeng.com/models-cover/sofa-11.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/sofa-11.glb',
    type: '1',
    category: 'sofa'
  },
  {
    key: 'sofaTwelve',
    name: 'Sofa - Twelve',
    image: 'https://cdn-images.lumenfeng.com/models-cover/sofa-12.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/sofa-12.glb',
    type: '1',
    category: 'sofa'
  },
  {
    key: 'sofaThirteen',
    name: 'Sofa - Thirteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/sofa-13.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/sofa-13.glb',
    type: '1',
    category: 'sofa'
  },
  {
    key: 'sofaFourteen',
    name: 'Sofa - Fourteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/sofa-14.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/sofa-14.glb',
    type: '1',
    category: 'sofa'
  },
  // Seating - Armchairs
  {
    key: 'armchairFifteen',
    name: 'Armchair - Fifteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/armchair-15.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/armchair-15.glb',
    type: '1',
    category: 'armchair'
  },
  {
    key: 'armchairSixteen',
    name: 'Armchair - Sixteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/armchair-16.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/armchair-16.glb',
    type: '1',
    category: 'armchair'
  },
  {
    key: 'armchairSeventeen',
    name: 'Armchair - Seventeen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/armchair-17.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/armchair-17.glb',
    type: '1',
    category: 'armchair'
  },
  {
    key: 'armchairEighteen',
    name: 'Armchair - Eighteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/armchair-18.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/armchair-18.glb',
    type: '1',
    category: 'armchair'
  },
  {
    key: 'armchairNineteen',
    name: 'Armchair - Nineteen',
    image: 'https://cdn-images.lumenfeng.com/models-cover/armchair-19.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/armchair-19.glb',
    type: '1',
    category: 'armchair'
  },
  {
    key: 'armchairTwenty',
    name: 'Armchair - Twenty',
    image: 'https://cdn-images.lumenfeng.com/models-cover/armchair-20.png',
    model: 'https://cdn-images.lumenfeng.com/uploads/armchair-20.glb',
    type: '1',
    category: 'armchair'
  },
  // Seating - Stools
  {
    key: 'stoolTwentyOne',
    name: 'Stool - TwentyOne',
    image: 'https://cdn-images.lumenfeng.com/models-cover/stool-21.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/stool-21.glb',
    type: '1',
    category: 'stool'
  },
  {
    key: 'stoolTwentyTwo',
    name: 'Stool - TwentyTwo',
    image: 'https://cdn-images.lumenfeng.com/models-cover/stool-22.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/stool-22.glb',
    type: '1',
    category: 'stool'
  },
  {
    key: 'stoolTwentyThree',
    name: 'Stool - TwentyThree',
    image: 'https://cdn-images.lumenfeng.com/models-cover/stool-23.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/stool-23.glb',
    type: '1',
    category: 'stool'
  },
  {
    key: 'stoolTwentyFour',
    name: 'Stool - TwentyFour',
    image: 'https://cdn-images.lumenfeng.com/models-cover/stool-24.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/stool-24.glb',
    type: '1',
    category: 'stool'
  },
  {
    key: 'stoolTwentyFive',
    name: 'Stool - TwentyFive',
    image: 'https://cdn-images.lumenfeng.com/models-cover/stool-25.jpg',
    model: 'https://cdn-images.lumenfeng.com/uploads/stool-25.glb',
    type: '1',
    category: 'stool'
  },
  // Special items (doors, windows)
  {
    key: 'doorOne',
    name: 'Door One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/door-1.jpg',
    model: 'https://cdn-images.lumenfeng.com/door-1.glb',
    type: '7',
    category: 'door'
  },
  {
    key: 'doorTwo',
    name: 'Door Two',
    image: 'https://cdn-images.lumenfeng.com/models-cover/door-2.jpg',
    model: 'https://cdn-images.lumenfeng.com/door-2.glb',
    type: '7',
    category: 'door'
  },
  {
    key: 'windowOne',
    name: 'Window One',
    image: 'https://cdn-images.lumenfeng.com/models-cover/window-1.jpg',
    model: 'https://cdn-images.lumenfeng.com/window-1.glb',
    type: '3',
    category: 'window'
  }
]

// Floor textures
export const FLOOR_TEXTURES = [
  {
    name: 'Light Fine Wood',
    thumbnail: 'https://cdn-images.lumenfeng.com/models-cover/thumbnail_light_fine_wood.jpg',
    url: 'https://cdn-images.lumenfeng.com/models-cover/light_fine_wood.jpg',
    stretch: false,
    scale: 300
  }
]

// Wall textures
export const WALL_TEXTURES = [
  {
    name: 'Marble Tiles',
    thumbnail: 'https://cdn-images.lumenfeng.com/models-cover/thumbnail_marbletiles.jpg',
    url: 'https://cdn-images.lumenfeng.com/models-cover/marbletiles.jpg',
    stretch: false,
    scale: 300
  },
  {
    name: 'Wallmap Yellow',
    thumbnail: 'https://cdn-images.lumenfeng.com/models-cover/thumbnail_wallmap_yellow.png',
    url: 'https://cdn-images.lumenfeng.com/models-cover/wallmap_yellow.png',
    stretch: true,
    scale: 0
  },
  {
    name: 'Light Brick',
    thumbnail: 'https://cdn-images.lumenfeng.com/models-cover/thumbnail_light_brick.jpg',
    url: 'https://cdn-images.lumenfeng.com/models-cover/light_brick.jpg',
    stretch: false,
    scale: 100
  }
]
