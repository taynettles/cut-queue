import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CreditCard } from "lucide-react";


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Book Your Perfect Look
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Easy online booking for all your salon and barbershop needs.
          Choose your service, pick a time, and you're all set.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/services">View Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Easy Scheduling</h3>
          <p className="text-sm text-muted-foreground">
            View real-time availability and book your appointments in just a few clicks.
          </p>
        </div>
      </div>

      <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Save Time</h3>
          <p className="text-sm text-muted-foreground">
            No phone calls needed. Book 24/7 at your convenience
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Secure Payments</h3>
          <p className="text-sm text-muted-foreground">
            Pay online securely with Stripe
          </p>
        </div>
    </div>
  );
}
