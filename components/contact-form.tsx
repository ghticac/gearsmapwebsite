"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { toast } from "sonner"

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Debe ser un correo electrónico válido"),
  phone: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        toast.success("¡Mensaje enviado!", {
          description: "Nos pondremos en contacto contigo pronto.",
        })
        reset()
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      setSubmitStatus("error")
      toast.error("Error al enviar", {
        description: "Por favor, intenta de nuevo más tarde o contáctanos directamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Tu Nombre *
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Ingresa tu nombre"
          className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
            errors.name ? "border-red-500" : "border-border"
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Tu Correo Electrónico *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Ingresa tu correo electrónico"
          className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
            errors.email ? "border-red-500" : "border-border"
          }`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Tu Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          placeholder="Ingresa tu teléfono"
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Tu Mensaje *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          placeholder="Ingresa tu mensaje"
          className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none ${
            errors.message ? "border-red-500" : "border-border"
          }`}
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : submitStatus === "success" ? (
          <>
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Enviado
          </>
        ) : submitStatus === "error" ? (
          <>
            <AlertCircle className="w-4 h-4 mr-2" />
            Reintentar
          </>
        ) : (
          "Enviar"
        )}
      </Button>
    </form>
  )
}
