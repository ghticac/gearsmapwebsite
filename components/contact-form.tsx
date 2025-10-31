"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simular envío (en producción, esto llamaría a tu API)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Aquí iría la llamada real a la API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      console.log("Datos del formulario:", data)

      toast.success("¡Mensaje enviado!", {
        description: "Nos pondremos en contacto contigo pronto.",
      })

      reset()
    } catch (error) {
      console.error("Error:", error)
      toast.error("Error al enviar", {
        description: "Por favor, intenta nuevamente más tarde.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold font-sans text-foreground mb-2">¿Necesitas ayuda? Contáctanos</h3>
          <p className="text-muted-foreground font-mono">
            Nuestro equipo se pondrá en contacto contigo lo antes posible.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Tu Nombre *
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Ingresa tu nombre"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Tu Correo Electrónico *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Tu Teléfono
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="Ingresa tu teléfono"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Tu Mensaje *
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={5}
              placeholder="Ingresa tu mensaje"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
