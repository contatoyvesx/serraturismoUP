"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const WHATSAPP = "5551981699277"

export function ContactForm() {
  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")

  const send = () => {
    if (!name || !msg) return

    const text = `Olá, meu nome é ${name}. ${msg}`
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4 max-w-xl">

        {/* TITULO */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Fale no WhatsApp
          </h2>
          <p className="text-muted-foreground mt-2">
            Respondo rápido
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-4">
          <Input
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Textarea
            placeholder="O que você quer fazer?"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />

          <Button onClick={send} className="w-full rounded-full">
            Enviar
          </Button>
        </div>

      </div>
    </section>
  )
}
