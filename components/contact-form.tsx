"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { toastConfig } from "@/lib/toast-config"
import { postData } from "@/lib/api-helpers"

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

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

    try {
      await postData("/api/contact", data)
      toastConfig.success("¡Mensaje enviado!", "Nos pondremos en contacto contigo pronto.")
      reset()
    } catch (error) {
      // Network or other errors
      const isNetworkError = error instanceof TypeError && error.message.includes("fetch")
      toastConfig.error(
        isNetworkError ? "Error de conexión" : "Error al enviar",
        isNetworkError
          ? "No pudimos conectar con el servidor. Verifica tu conexión."
          : error instanceof Error
            ? error.message
            : "Ocurrió un error al procesar tu solicitud. Intenta de nuevo."
      )
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
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
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
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
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
          {...register("message")}
          rows={5}
          placeholder="Ingresa tu mensaje"
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
        disabled={isSubmitting}
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
  )
}
