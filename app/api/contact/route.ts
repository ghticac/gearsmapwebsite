import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    // Validate email format - using simple, safe validation
    // Client-side zod validation provides comprehensive email format checking
    // Server-side we do basic sanity checks to prevent ReDoS attacks
    // This is a defense-in-depth approach: strict client validation + safe server validation
    if (typeof email !== 'string' || !email.includes('@') || email.length > 254 || email.length < 3) {
      return NextResponse.json(
        { error: "Formato de correo electrónico inválido" },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database (e.g., Vercel Postgres, MongoDB, etc.)
    // 2. Send email notification (e.g., using SendGrid, Resend, etc.)
    // 3. Add to CRM (e.g., HubSpot, Salesforce, etc.)

    // For now, we'll just log the data
    console.log("Contact form submission:", {
      name,
      email,
      phone: phone || "N/A",
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: "Tu mensaje ha sido recibido. Te contactaremos pronto.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
