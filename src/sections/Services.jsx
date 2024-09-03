import { services } from "../constants"
const Services = () => {
  return (
    <section className="max-containers bg-yellow-50 flex justify-center flex-wrap gap-9">
      {
        services.map((service) => (
          <ServiceCard key={service.label} {...service}/>
        ))
      }
    </section>
  )
}

export default Services
