import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/stunning-mountain-landscape-at-golden-hour-with-dr.jpg"
          alt="Paisagem da serra"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 pt-36 pb-28">
        <div className="max-w-2xl text-white">

          {/* TAG */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">
            <MapPin size={16} />
            <span className="text-sm">
              Serra Gaúcha • Atendimento personalizado
            </span>
          </div>

          {/* TITULO */}
          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Passeios na Serra Gaúcha <br />
            com conforto e praticidade
          </h1>

          {/* SUB */}
          <p className="mt-5 text-sm text-white/80 md:text-base">
            Roteiros, passeios e experiências para você aproveitar sem preocupação.
          </p>

          {/* BOTÕES */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            {/* WHATSAPP */}
            <Button
              size="lg"
              asChild
              className="rounded-full px-8 py-6 text-base font-semibold bg-green-600 hover:bg-green-700 text-white"
            >
              <a
                href="https://wa.me/5551981699277"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <PhoneCall size={18} />
                Falar no WhatsApp
              </a>
            </Button>

            {/* DESTINOS */}
            <Button
              size="lg"
              asChild
              variant="outline"
              className="rounded-full border-white/30 px-8 py-6 text-base text-white"
            >
              <a href="#destinos" className="flex items-center gap-2">
                Ver destinos
                <ArrowRight size={18} />
              </a>
            </Button>

          </div>

          {/* NÚMEROS */}
          <div className="mt-10 flex gap-6">

            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs text-white/70">
                anos de experiência
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold">950+</div>
              <div className="text-xs text-white/70">
                clientes atendidos
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
