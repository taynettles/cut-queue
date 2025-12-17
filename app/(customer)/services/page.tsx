import { prisma } from "@/lib/db"
import { ServiceCard } from "@/components/booking/service-card"
import type { Service } from "@/types"

async function getServices() {
  const services = await prisma.service.findMany({
    where: { active: true },
    orderBy: { name: 'asc' }
  })
  return services
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground mb-8">
          Choose from our range of professional services. All appointments include
          a consultation to ensure you get exactly what you're looking for.
        </p>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No services available at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service: Service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}