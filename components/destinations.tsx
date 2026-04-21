import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    name: "City Tour Gramado e Canela",
    image: "/gramado-charming-town-with-flowers-and-architectur.jpg",
    rating: 4.8,
  },
  {
    name: "Tour Uva e Vinho + Trem",
    image: "/bento.jpg",
    rating: 4.9,
  },
  {
    name: "Vinícola Jolimont",
    image: "/canela.jpg",
    rating: 4.8,
  },
  {
    name: "Linha Bela + Almoço",
    image: "/beautiful-mountain-landscape-with-sunset--serene-p.jpg",
    rating: 4.7,
  },
]

const whatsappNumber = "5551981699277"

const getWhatsappLink = (name: string) => {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Olá! Quero detalhes sobre ${name}`
  )}`
}

export function Destinations() {
  return (
    <section id="destinos" className="py-24">
      <div className="container mx-auto px-4">

        {/* TITULO */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Destinos mais procurados
          </h2>
          <p className="mt-3 text-muted-foreground">
            Escolha seu passeio e fale direto no WhatsApp
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item, i) => (
            <Card key={i} className="overflow-hidden group">
              
              <div className="relative h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />

                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-400" />
                  {item.rating}
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-3">
                  {item.name}
                </h3>

                <Button asChild className="w-full rounded-full">
                  <a
                    href={getWhatsappLink(item.name)}
                    target="_blank"
                  >
                    Ver detalhes
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full px-6">
            <a href="#contato">Ver todos</a>
          </Button>
        </div>

      </div>
    </section>
  )
}
