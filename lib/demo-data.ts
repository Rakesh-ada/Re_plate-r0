export interface DemoFoodItem {
  id: string
  name: string
  description: string | null
  category: string
  quantity: number
  original_price: number | null
  discounted_price: number | null
  expiry_time: string
  status: "available" | "flash_sale" | "donated" | "claimed" | "expired"
  image_url: string | null
  created_at: string
  canteen_id: string
  staff_id: string
  canteens?: { name: string; location: string }
  flash_sales?: Array<{ discount_percentage: number; end_time: string; is_active: boolean }>
}

export interface DemoCanteen {
  id: string
  name: string
  location: string
  contact_email: string
  contact_phone: string
  operating_hours: Record<string, string>
}

export interface DemoNGO {
  id: string
  name: string
  contact_person: string
  email: string
  phone: string
  address: string
  capacity_per_day: number
}

export interface DemoAnalytics {
  total_food_logged: number
  total_food_sold: number
  total_food_donated: number
  revenue_generated: number
  meals_provided: number
  date: string
  canteen_id: string
}

export interface DemoDonation {
  id: string
  food_item_id: string
  ngo_id: string
  volunteer_id: string | null
  quantity: number
  pickup_time: string | null
  status: "pending" | "scheduled" | "picked_up" | "completed"
  notes: string | null
  created_at: string
  food_item?: DemoFoodItem
  ngo?: DemoNGO
}

export interface DemoClaim {
  id: string
  food_item_id: string
  student_id: string
  quantity: number
  amount_paid: number
  claim_time: string
  pickup_time: string | null
  is_picked_up: boolean
  food_item?: DemoFoodItem
}

// Demo Canteens
export const DEMO_CANTEENS: DemoCanteen[] = [
  {
    id: "canteen-1",
    name: "Main Campus Cafeteria",
    location: "Building A, Ground Floor",
    contact_email: "main.cafeteria@college.edu",
    contact_phone: "+1-555-0101",
    operating_hours: {
      monday: "7:00-22:00",
      tuesday: "7:00-22:00",
      wednesday: "7:00-22:00",
      thursday: "7:00-22:00",
      friday: "7:00-22:00",
      saturday: "8:00-20:00",
      sunday: "8:00-20:00",
    },
  },
  {
    id: "canteen-2",
    name: "Engineering Block Canteen",
    location: "Engineering Building, 2nd Floor",
    contact_email: "eng.canteen@college.edu",
    contact_phone: "+1-555-0102",
    operating_hours: {
      monday: "8:00-18:00",
      tuesday: "8:00-18:00",
      wednesday: "8:00-18:00",
      thursday: "8:00-18:00",
      friday: "8:00-18:00",
      saturday: "9:00-17:00",
      sunday: "closed",
    },
  },
]

// Demo NGOs
export const DEMO_NGOS: DemoNGO[] = [
  {
    id: "ngo-1",
    name: "City Food Bank",
    contact_person: "Sarah Johnson",
    email: "sarah@cityfoodbank.org",
    phone: "+1-555-0201",
    address: "123 Charity Street, Downtown",
    capacity_per_day: 500,
  },
  {
    id: "ngo-2",
    name: "Helping Hands Foundation",
    contact_person: "Michael Chen",
    email: "michael@helpinghands.org",
    phone: "+1-555-0202",
    address: "456 Community Ave, Midtown",
    capacity_per_day: 300,
  },
]

// Demo Food Items
const demoFoodItems: DemoFoodItem[] = [
  {
    id: "food-1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with spiced chicken",
    category: "Main Course",
    quantity: 15,
    original_price: 120,
    discounted_price: 72,
    expiry_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
    status: "flash_sale",
    image_url: "/chicken-biryani.png",
    created_at: new Date().toISOString(),
    canteen_id: "canteen-1",
    staff_id: "staff-1",
    canteens: { name: "Main Campus Cafeteria", location: "Building A, Ground Floor" },
    flash_sales: [
      { discount_percentage: 40, end_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), is_active: true },
    ],
  },
  {
    id: "food-2",
    name: "Vegetable Sandwiches",
    description: "Fresh vegetables with whole wheat bread",
    category: "Snacks",
    quantity: 25,
    original_price: 45,
    discounted_price: null,
    expiry_time: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(), // 4 hours from now
    status: "available",
    image_url: "/fresh-healthy-sandwiches.png",
    created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
    canteen_id: "canteen-1",
    staff_id: "staff-1",
    canteens: { name: "Main Campus Cafeteria", location: "Building A, Ground Floor" },
  },
  {
    id: "food-3",
    name: "Masala Dosa",
    description: "Crispy South Indian crepe with spiced potato filling",
    category: "Main Course",
    quantity: 8,
    original_price: 80,
    discounted_price: null,
    expiry_time: new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString(), // 1 hour from now
    status: "donated",
    image_url: "/masala-dosa.png",
    created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
    canteen_id: "canteen-1",
    staff_id: "staff-1",
    canteens: { name: "Main Campus Cafeteria", location: "Building A, Ground Floor" },
  },
  {
    id: "food-4",
    name: "Fresh Fruit Smoothies",
    description: "Mixed berry and mango smoothies",
    category: "Beverages",
    quantity: 12,
    original_price: 60,
    discounted_price: 30,
    expiry_time: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(), // 3 hours from now
    status: "flash_sale",
    image_url: "/colorful-fruit-smoothies.png",
    created_at: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 minutes ago
    canteen_id: "canteen-1",
    staff_id: "staff-1",
    canteens: { name: "Main Campus Cafeteria", location: "Building A, Ground Floor" },
    flash_sales: [
      { discount_percentage: 50, end_time: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(), is_active: true },
    ],
  },
]

// Demo Analytics
export const DEMO_ANALYTICS: DemoAnalytics[] = [
  {
    total_food_logged: 45,
    total_food_sold: 28,
    total_food_donated: 12,
    revenue_generated: 2340,
    meals_provided: 40,
    date: new Date().toISOString().split("T")[0],
    canteen_id: "canteen-1",
  },
  {
    total_food_logged: 38,
    total_food_sold: 22,
    total_food_donated: 10,
    revenue_generated: 1890,
    meals_provided: 32,
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    canteen_id: "canteen-1",
  },
  {
    total_food_logged: 52,
    total_food_sold: 35,
    total_food_donated: 15,
    revenue_generated: 2780,
    meals_provided: 50,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    canteen_id: "canteen-1",
  },
]

// Demo Donations
const demoDonations: DemoDonation[] = [
  {
    id: "donation-1",
    food_item_id: "food-3",
    ngo_id: "ngo-1",
    volunteer_id: "volunteer-1",
    quantity: 8,
    pickup_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    status: "scheduled",
    notes: "Pickup scheduled for 2 PM",
    created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    food_item: demoFoodItems.find((item) => item.id === "food-3"),
    ngo: DEMO_NGOS.find((ngo) => ngo.id === "ngo-1"),
  },
]

// Demo Claims
const demoClaims: DemoClaim[] = [
  {
    id: "claim-1",
    food_item_id: "food-1",
    student_id: "student-1",
    quantity: 2,
    amount_paid: 144,
    claim_time: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    pickup_time: null,
    is_picked_up: false,
    food_item: demoFoodItems.find((item) => item.id === "food-1"),
  },
]

// Mock Functions
export const mockSupabase = {
  from: (table: string) => ({
    select: (columns?: string) => ({
      eq: (column: string, value: any) => ({
        single: () => {
          if (table === "canteens") {
            return Promise.resolve({ data: DEMO_CANTEENS.find((c) => c.id === value), error: null })
          }
          if (table === "analytics") {
            return Promise.resolve({ data: DEMO_ANALYTICS.find((a) => a.canteen_id === value), error: null })
          }
          return Promise.resolve({ data: null, error: null })
        },
        order: (column: string, options?: any) => {
          if (table === "food_items") {
            return Promise.resolve({ data: demoFoodItems.filter((item) => item.canteen_id === value), error: null })
          }
          if (table === "analytics") {
            return Promise.resolve({ data: DEMO_ANALYTICS.filter((a) => a.canteen_id === value), error: null })
          }
          return Promise.resolve({ data: [], error: null })
        },
      }),
      gte: (column: string, value: any) => ({
        order: (column: string, options?: any) => {
          if (table === "analytics") {
            return Promise.resolve({ data: DEMO_ANALYTICS, error: null })
          }
          return Promise.resolve({ data: [], error: null })
        },
      }),
      order: (column: string, options?: any) => {
        if (table === "food_items") {
          return Promise.resolve({ data: demoFoodItems, error: null })
        }
        if (table === "donations") {
          return Promise.resolve({ data: demoDonations, error: null })
        }
        return Promise.resolve({ data: [], error: null })
      },
    }),
    insert: (data: any) => ({
      select: (columns?: string) => ({
        single: () => {
          if (table === "food_items") {
            const newItem: DemoFoodItem = {
              id: `food-${Date.now()}`,
              ...data,
              created_at: new Date().toISOString(),
              canteens: DEMO_CANTEENS.find((c) => c.id === data.canteen_id),
            }
            demoFoodItems.unshift(newItem)
            return Promise.resolve({ data: newItem, error: null })
          }
          return Promise.resolve({ data: data, error: null })
        },
      }),
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => {
        if (table === "food_items") {
          const itemIndex = demoFoodItems.findIndex((item) => item.id === value)
          if (itemIndex !== -1) {
            demoFoodItems[itemIndex] = { ...demoFoodItems[itemIndex], ...data }
          }
        }
        return Promise.resolve({ error: null })
      },
    }),
  }),
  rpc: (functionName: string, params: any) => {
    if (functionName === "create_flash_sale") {
      const itemIndex = demoFoodItems.findIndex((item) => item.id === params.item_id)
      if (itemIndex !== -1) {
        const item = demoFoodItems[itemIndex]
        demoFoodItems[itemIndex] = {
          ...item,
          status: "flash_sale",
          discounted_price: item.original_price ? (item.original_price * (100 - params.discount_percent)) / 100 : null,
          flash_sales: [
            {
              discount_percentage: params.discount_percent,
              end_time: new Date(Date.now() + params.duration_minutes * 60 * 1000).toISOString(),
              is_active: true,
            },
          ],
        }
      }
      return Promise.resolve({ data: `sale-${Date.now()}`, error: null })
    }
    if (functionName === "claim_food_item") {
      const newClaim: DemoClaim = {
        id: `claim-${Date.now()}`,
        food_item_id: params.item_id,
        student_id: params.student_uuid,
        quantity: params.claim_quantity,
        amount_paid: 0, // Will be calculated
        claim_time: new Date().toISOString(),
        pickup_time: null,
        is_picked_up: false,
        food_item: demoFoodItems.find((item) => item.id === params.item_id),
      }
      demoClaims.push(newClaim)

      // Update food item quantity
      const itemIndex = demoFoodItems.findIndex((item) => item.id === params.item_id)
      if (itemIndex !== -1) {
        demoFoodItems[itemIndex].quantity -= params.claim_quantity
        if (demoFoodItems[itemIndex].quantity <= 0) {
          demoFoodItems[itemIndex].status = "claimed"
        }
      }

      return Promise.resolve({ data: newClaim.id, error: null })
    }
    return Promise.resolve({ data: null, error: null })
  },
}

// Helper functions
export const getDemoFoodItems = () => demoFoodItems
export const getDemoDonations = () => demoDonations
export const getDemoClaims = () => demoClaims
export const getDemoCanteens = () => DEMO_CANTEENS
export const getDemoNGOs = () => DEMO_NGOS
export const getDemoAnalytics = () => DEMO_ANALYTICS

// Update functions for real-time demo
export const addDemoFoodItem = (item: Omit<DemoFoodItem, "id" | "created_at">) => {
  const newItem: DemoFoodItem = {
    ...item,
    id: `food-${Date.now()}`,
    created_at: new Date().toISOString(),
  }
  demoFoodItems.unshift(newItem)
  return newItem
}

export const updateDemoFoodItem = (id: string, updates: Partial<DemoFoodItem>) => {
  const index = demoFoodItems.findIndex((item) => item.id === id)
  if (index !== -1) {
    demoFoodItems[index] = { ...demoFoodItems[index], ...updates }
    return demoFoodItems[index]
  }
  return null
}
