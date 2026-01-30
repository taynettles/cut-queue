# Cut Queue

A full-stack salon booking platform with customer-facing booking, admin management, and Stripe payment integration.

## Overview

End-to-end booking system with role-based access control, real-time appointment availability, and payment processing. Built with Next.js, React, PostgreSQL, and Stripe.

## Tech Stack

Next.js 16, React 19, PostgreSQL, Prisma, NextAuth.js, Stripe, Zod, Radix UI, Tailwind

## Quick Start

```bash
npm install
npx prisma migrate dev
npm run dev
```

See `.env.local` setup in the repo for database and Stripe credentials.

## Architecture

**Database Models**: User (with roles), Service, Appointment, BusinessSettings  
**Authentication**: NextAuth with email/password and role-based access  
**Payments**: Stripe integration for appointment deposits  
**API**: RESTful endpoints for auth, services, appointments, admin operations

## Project Structure

```
app/
  ├── (customer)/        # Customer booking and appointment views
  ├── admin/            # Admin dashboard
  └── api/              # Authentication, webhooks, business logic

components/
  ├── booking/          # Calendar and booking forms
  ├── admin/            # Admin-specific UI
  └── ui/               # Radix UI component library

lib/
  ├── auth.ts          # NextAuth configuration
  ├── db.ts            # Prisma client
  └── stripe.ts        # Stripe integration

prisma/
  ├── schema.prisma    # Database schema
  └── migrations/      # Migration history
```
