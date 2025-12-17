// TODO: Implement full booking flow
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
        <p className="text-muted-foreground mb-8">
          Let's get you booked! Start by selecting a service.
        </p>
        
        <Button asChild size="lg">
          <Link href="/services">
            Browse Services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Coming soon:</strong> Full booking flow with calendar, 
            time selection, and instant confirmation.
          </p>
        </div>
      </div>
    </div>
  )
}