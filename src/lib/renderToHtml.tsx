import { TestType } from '@contants/*'
import getLeadershipResults from './getLeadershipResults'
import LeadershipResults from '@components/Results/LeadershipTest'
import type { Answer } from 'src/hooks/useQuestions'
import ReactDOMServer from 'react-dom/server'

export const renderToHtml = (answers: Answer[]) => {
  const results: any = getLeadershipResults(answers, TestType.LIDERAZGO, false)

  const body = ReactDOMServer.renderToStaticMarkup(
    <html>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script src='https://cdn.tailwindcss.com' />
      </head>
      <body>
        <LeadershipResults results={results} htmlTemplate isPaid />
      </body>
    </html>
  )

  return body
}
