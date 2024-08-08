import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { renderToHtml } from 'src/lib/renderToHtml'
import puppeteer, { Browser } from 'puppeteer'
// import chromium from '@sparticuz/chromium'
import { TestType } from '@contants/*'

const resendKey = import.meta.env.RESEND_API_KEY
const resend = new Resend(resendKey)

let browser: Browser
const isLocal = process.env.NODE_ENV === 'development'

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
  await startBrowser()

  const page = await browser.newPage()
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' })

  const pdfBuffer = await page.pdf({
    format: 'A4',
    margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
  })

  await browser.close()

  return Buffer.from(pdfBuffer)
}

async function startBrowser() {
  const chromeArgs = [
    '--font-render-hinting=none', // Improves font-rendering quality and spacing
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-animations',
    '--disable-background-timer-throttling',
    '--disable-restore-session-state',
    '--disable-web-security', // Only if necessary, be cautious with security implications
    '--single-process' // Be cautious as this can affect stability in some environments
  ]

  if (!browser?.connected) {
    browser = await puppeteer.launch({
      ...(isLocal
        ? { channel: 'chrome' }
        : {
            args: chromeArgs,
            // executablePath: await chromium.executablePath(),
            ignoreHTTPSErrors: true,
            headless: true
          })
    })
  }
}
