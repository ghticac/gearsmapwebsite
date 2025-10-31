import { NextRequest, NextResponse } from "next/server"
import * as z from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Log the contact form submission (in production, save to database or send email)
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    })

    // TODO: In production, integrate with:
    // - Email service (SendGrid, Resend, AWS SES)
    // - Database (Postgres, MongoDB)
    // - CRM system (Salesforce, HubSpot)
    
    // Simulate a delay to mimic real API behavior
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje recibido correctamente. Nos pondremos en contacto contigo pronto.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Datos inválidos",
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar el mensaje",
      },
      { status: 500 }
    )
  }
}
