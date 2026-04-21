"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-white/80 backdrop-blur border-b" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Serra Turismo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-bold text-lg md:text-xl">
            Serra Turismo
          </span>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#destinos" className="hover:text-primary">Destinos</a>
          <a href="#servicos" className="hover:text-primary">Serviços</a>
          <a href="#depoimentos" className="hover:text-primary">Depoimentos</a>
          <a href="#contato" className="hover:text-primary">Contato</a>

          <Button asChild className="rounded-full px-5">
            <a href="#contato">Reservar</a>
          </Button>

          <Button asChild variant="outline" className="rounded-full px-5">
            <a href="https://wa.me/5551981699277" target="_blank">
              <Phone size={16} />
            </a>
          </Button>
        </div>

        {/* MOBILE BTN */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3">
          <a href="#destinos" onClick={() => setOpen(false)}>Destinos</a>
          <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#depoimentos" onClick={() => setOpen(false)}>Depoimentos</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>

          <Button asChild className="w-full rounded-full">
            <a href="#contato">Reservar</a>
          </Button>

          <Button asChild variant="outline" className="w-full rounded-full">
            <a href="https://wa.me/5551981699277" target="_blank">
              WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
