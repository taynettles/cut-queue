# ✂️ Cut Queue

A modern, full-featured salon booking platform that streamlines appointment management and payments.

## Overview

Cut Queue is a comprehensive salon management system that allows customers to browse services, book appointments, and pay securely—while providing admins with powerful tools to manage their business. Built with cutting-edge technologies for reliability, performance, and great user experience.

### Key Features

- **Customer Portal**
  - Browse available services with descriptions and pricing
  - View real-time availability and book appointments
  - Manage and view your appointment history
  - Dark/light theme support

- **Admin Dashboard**
  - Manage services, pricing, and availability
  - View all appointments and their statuses
  - Configure business hours and booking settings
  - Track business operations in real-time

- **Payments**
  - Secure payment processing via [Stripe](https://stripe.com)
  - Support for appointment prepayment
  - Invoice and payment tracking

- **Authentication**
  - Secure user registration and login
  - Role-based access control (Customer/Admin)
  - Session management with NextAuth

- **Responsive Design**
  - Works seamlessly on mobile, tablet, and desktop
  - Accessible UI built with Radix UI components
  - Beautiful, consistent styling with Tailwind CSS

## Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org) with React 19
- **Database**: PostgreSQL with [Prisma ORM](https://prisma.io)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Payments**: [Stripe](https://stripe.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [Radix UI](https://www.radix-ui.com)
- **Validation**: [Zod](https://zod.dev) and [React Hook Form](https://react-hook-form.com)
- **Calendar**: [React Big Calendar](https://jquense.github.io/react-big-calendar/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Stripe account (for payment features)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cut-queue
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/cut_queue"
   DIRECT_URL="postgresql://user:password@localhost:5432/cut_queue"

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   ```

4. **Set up the database**

   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Populate database with sample data

### Project Structure

```
app/
  ├── (customer)/        # Customer-facing pages
  ├── admin/            # Admin dashboard pages
  └── api/              # API routes (auth, webhooks)

components/
  ├── admin/            # Admin-specific components
  ├── auth/             # Authentication forms
  ├── booking/          # Booking-related components
  ├── shared/           # Shared UI components
  └── ui/               # Radix UI primitives

lib/
  ├── auth.ts          # Authentication configuration
  ├── db.ts            # Database client
  ├── stripe.ts        # Stripe integration
  └── utils.ts         # Utility functions

prisma/
  ├── schema.prisma    # Database schema
  └── seed.ts          # Database seeding script
```

## Database Schema

### Core Models

- **User**: Customer and admin accounts with role-based access
- **Service**: Salon services with pricing and duration
- **Appointment**: Booking records linking users to services
- **BusinessSettings**: Operating hours and booking preferences

See [schema.prisma](prisma/schema.prisma) for the complete schema.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Support

For issues, questions, or suggestions, please open an issue on the repository.
