import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/stunning-mountain-landscape-at-golden-hour-with-dr.jpg"
          alt="Paisagem da serra"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-3xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <MapPin size={16} />
            <span className="text-sm font-medium">Experiências na Serra com atendimento personalizado</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Explore a Serra com mais conforto, segurança e paisagens inesquecíveis
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
            Passeios, roteiros e experiências pensadas para quem quer aproveitar o melhor da região com praticidade e suporte do início ao fim.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="rounded-full px-8 py-6 text-base font-semibold"
            >
              <a href="#destinos" className="flex items-center gap-2">
                Ver destinos
                <ArrowRight size={18} />
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              variant="outline"
              className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-base font-semibold text-white hover:bg-white/20 hover:text-white"
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
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <div className="text-3xl font-bold md:text-4xl">15+</div>
              <div className="mt-1 text-sm text-white/80">Anos de experiência</div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <div className="text-3xl font-bold md:text-4xl">950+</div>
              <div className="mt-1 text-sm text-white/80">Viajantes atendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
