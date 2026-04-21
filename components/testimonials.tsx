import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    text: "Experiência incrível, tudo organizado e sem dor de cabeça.",
  },
  {
    name: "Carlos Mendes",
    text: "Passeios bem planejados e atendimento rápido no WhatsApp.",
  },
  {
    name: "Ana Rodrigues",
    text: "Valeu muito a pena, recomendo para quem vai pra Gramado.",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">

        {/* TITULO */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            Avaliações reais
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6">

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                "{t.text}"
              </p>

              <span className="font-semibold text-sm">
                {t.name}
              </span>

            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
