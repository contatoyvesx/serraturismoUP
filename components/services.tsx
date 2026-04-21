import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Train, MoonStar, MapIcon } from "lucide-react"

const services = [
  {
    icon: Train,
    title: "Uva e Vinho + Trem",
    desc: "Passeio completo com degustação e Maria Fumaça",
  },
  {
    icon: MoonStar,
    title: "Noite Alemã",
    desc: "Jantar típico + show cultural",
  },
  {
    icon: MapIcon,
    title: "City Tour",
    desc: "Principais pontos de Gramado e Canela",
  },
]

const whatsapp = "5551981699277"

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">

        {/* TITULO */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Serviços principais
          </h2>
          <p className="text-muted-foreground mt-2">
            Escolha e fale direto no WhatsApp
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Card key={i} className="p-6 text-center">

              <s.icon size={32} className="mx-auto mb-4 text-primary" />

              <h3 className="font-semibold text-xl mb-2">
                {s.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {s.desc}
              </p>

              <Button asChild className="w-full rounded-full">
                <a
                  href={`https://wa.me/${whatsapp}?text=Quero saber sobre ${s.title}`}
                  target="_blank"
                >
                  Ver detalhes
                </a>
              </Button>

            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
