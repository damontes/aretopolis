import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { renderToHtml } from 'src/lib/renderToHtml'
import puppeteer from 'puppeteer'
import { TestType } from '@contants/*'

const resendKey = import.meta.env.RESEND_API_KEY
const resend = new Resend(resendKey)

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const values = Object.fromEntries(data.entries()) as Record<string, string>

  const { name, email, results } = values

  const html = renderToHtml(JSON.parse(results))
  const pdfBuffer = await generatePdf(html)

  await resend.emails.send({
    from: 'Aretopolis <no-replay@aretopolis.com>',
    to: [email],
    subject: `Resultados de la encuesta de liderazgo: ${name}.`,
    text: 'Gracias por participar en nuestra encuesta, aquí tienes tus resultados',
    attachments: [
      {
        filename: 'resultados.pdf',
        content: pdfBuffer
      }
    ],
    tags: [
      {
        name: 'test',
        value: TestType.LIDERAZGO
      }
    ]
  })

  return new Response(JSON.stringify({ message: 'ok' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

async function generatePdf(htmlContent: string) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' })

  const pdfBuffer = await page.pdf({
    format: 'A4',
    margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
  })

  await browser.close()

  return pdfBuffer
}
