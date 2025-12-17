import Link from "next/link"
import { Service } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { formatCurrency, formatDuration } from "@/lib/utils"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{service.name}</CardTitle>
            <CardDescription className="mt-2">
              {service.description || "Professional service tailored to your needs"}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="ml-2">
            {formatCurrency(service.price)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" />
          {formatDuration(service.duration)}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/booking?service=${service.id}`}>
            Book Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}