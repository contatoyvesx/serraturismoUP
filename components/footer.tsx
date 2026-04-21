import { Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4 text-center space-y-4">

        {/* NOME */}
        <h3 className="text-xl font-bold">
          HA Serra Turismo
        </h3>

        {/* FRASE */}
        <p className="text-sm text-white/80">
          Passeios e experiências na Serra Gaúcha
        </p>

        {/* CONTATO */}
        <div className="flex justify-center gap-6 text-sm">

          <a
            href="https://wa.me/5551981699277"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <Phone size={16} />
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/ha.turismo"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <Instagram size={16} />
            Instagram
          </a>

        </div>

        {/* COPY */}
        <p className="text-xs text-white/60 mt-4">
          © 2026 HA Serra Turismo
        </p>

      </div>
    </footer>
  )
}
