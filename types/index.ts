import { User, Service, Appointment, AppointmentStatus, Role } from "@prisma/client"
export type { User, Service, Appointment, AppointmentStatus, Role }

export type ServiceWithAppointments = Service & {
    appointments: Appointment[]
}

export type AppointmentWithDetails = Appointment & {
    user: User
    service: Service
}

export type TimeSlot = {
    start: Date
    end: Date
    available: boolean
}

export type BookingFormData = {
    serviceId: string
    date: Date
    time: string
    notes?: string
}

export type ServiceFormData = {
    name: string
    description: string
    price: number
    duration: number
    active: boolean
}
