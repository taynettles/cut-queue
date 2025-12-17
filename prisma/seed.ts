// prisma/seed.ts
// Seed the database with initial data

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@salon.com' },
    update: {},
    create: {
      email: 'admin@salon.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })
  console.log('✅ Created admin user:', admin.email)

  // Create test customer
  const customerPassword = await bcrypt.hash('customer123', 10)
  const customer = await prisma.user.upsert({
    where: { email: 'customer@example.com' },
    update: {},
    create: {
      email: 'customer@example.com',
      name: 'Test Customer',
      password: customerPassword,
      role: 'CUSTOMER',
    },
  })
  console.log('✅ Created test customer:', customer.email)

  // Create services
  const services = [
    {
      name: "Men's Haircut",
      description: "Classic men's haircut with wash and style",
      price: 3500, // $35.00
      duration: 30,
    },
    {
      name: "Women's Haircut",
      description: "Cut and blow dry for any hair length",
      price: 5500, // $55.00
      duration: 45,
    },
    {
      name: "Beard Trim",
      description: "Professional beard shaping and trimming",
      price: 2000, // $20.00
      duration: 15,
    },
    {
      name: "Hair Coloring",
      description: "Full hair coloring service with professional products",
      price: 9500, // $95.00
      duration: 120,
    },
    {
      name: "Highlights",
      description: "Partial or full highlights",
      price: 8500, // $85.00
      duration: 90,
    },
    {
      name: "Blowout",
      description: "Professional wash and blow dry",
      price: 4000, // $40.00
      duration: 30,
    },
  ]

  for (const service of services) {
    const created = await prisma.service.upsert({
      where: { name: service.name },
      update: {},
      create: service,
    })
    console.log('✅ Created service:', created.name)
  }

  // Create business settings
  const settings = await prisma.businessSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      openTime: '09:00',
      closeTime: '18:00',
      workDays: [1, 2, 3, 4, 5, 6], // Monday - Saturday
      bookingBuffer: 15,
    },
  })
  console.log('✅ Created business settings')

  console.log('🎉 Seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })