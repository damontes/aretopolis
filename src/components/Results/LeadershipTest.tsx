import Button from '@components/Dynamic/Button'
import CircularProgress from '@components/Dynamic/CircularProgress'
import PercentageBar from '@components/Dynamic/PercentageBar'
import { cn } from '@helpers/utils'
import { AREAS, AREAS_RECOMMENDATIONS, DIALOGS, SECTIONS } from 'src/constants'

export type LeadershipResultsItems = Array<{
  section: number
  percentage: number
  recommendations: string
  recommendationsByArea: Array<{
    area: number
    recommendation: string
  }>
}>

interface ResultsLiderazgoProps {
  results: LeadershipResultsItems | Record<number, number>
  htmlTemplate?: boolean
  isPaid?: boolean
}

const LeadershipResults = (props: ResultsLiderazgoProps) => {
  const { results, isPaid = false, htmlTemplate = false } = props

  const handlePaymentDialogForm = () => {
    const dialog = document.getElementById(
      DIALOGS.paymentForm
    ) as HTMLDialogElement
    dialog?.showModal()
  }

  const handleSendResults = () => {
    const dialog = document.getElementById(
      DIALOGS.sendResultsForm
    ) as HTMLDialogElement

    dialog?.showModal()
  }

  if (!isPaid) {
    return (
      <div
        id='leadership-results'
        className='relative max-w-screen-lg mx-auto py-10 px-4'
      >
        <h1 className='text-4xl font-bold'>
          Felicidades, Terminaste el test de liderazgo LEAD.
        </h1>
        <p className='font-light text-md my-2 text-gray-600'>
          Estos son tus resultados en porcentajes de 0 a 100%, según tu grado de
          desarrollo para cada competencia.
        </p>
        <ul className='flex flex-col gap-2 list-none mt-4'>
          {Object.entries(results)
            .sort((a, b) => b.at(-1) - a.at(-1))
            .map(([area, count], index) => {
              const title = AREAS[Number(area) as keyof typeof AREAS]
              return (
                <li
                  className='p-2 flex-col sm:flex-row flex sm:items-center gap-x-6'
                  key={index}
                >
                  <h3 className='text-sm font-semibold min-w-72'>{title}</h3>
                  <div className='flex-1'>
                    <PercentageBar percentage={(count as number) / 10} />
                  </div>
                </li>
              )
            })}
        </ul>
        <div className=''>
          <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
            <div className='mx-auto max-w-3xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                ¿Deseas desarrollar las áreas de oportunidad que reflejan tus
                resultados?
                <br />
              </h2>
              <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600'>
                Obtén un diagnóstico con disciplinas recomendadas para
                fortalecer tu liderazgo.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Button className='max-w-xs' onClick={handlePaymentDialogForm}>
                  Obtener
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const recommendationsByArea = (results as LeadershipResultsItems).reduce(
    (acc, result) => {
      return { ...acc, ...result.recommendationsByArea }
    },
    {}
  )

  return (
    <div
      id='leadership-results'
      className='relative max-w-screen-lg mx-auto py-10 px-4'
    >
      <h1 className='text-4xl font-bold'>Tus fortalezas de liderazgo</h1>
      <p className='font-light text-md my-2 text-gray-600'>
        Terminaste el test de liderazgo LEAD. Estos son tus resultados en
        porcentajes de 0 a 100%, según tu grado de desarrollo para cada
        competencia.
      </p>
      <section className='my-10 space-y-2'>
        <h2 className='text-xl font-bold'>Tus fortalezas para construir</h2>
        <div
          className={cn('grid gap-2', {
            'grid-cols-2': htmlTemplate,
            'grid-cols-1 md:grid-cols-2': !htmlTemplate
          })}
        >
          {(results as LeadershipResultsItems)
            .sort((a, b) => b.percentage - a.percentage)
            .map((result, index) => {
              const sectiontitle =
                SECTIONS[Number(result.section) as keyof typeof SECTIONS]
              return (
                <article
                  className='p-4 border border-gray-200 rounded-md'
                  key={index}
                >
                  <div className='flex items-center justify-between'>
                    <h3 className='font-bold'>{sectiontitle}</h3>
                    <CircularProgress
                      percentage={result.percentage}
                      size={64}
                    />
                  </div>
                  <p className='font-light text-sm leading-6 text-gray-600'>
                    {result.recommendations}
                  </p>
                </article>
              )
            })}
        </div>
      </section>
      <section>
        <header className='space-y-2 px-2 pt-4 pb-8 border-b border-primary-100'>
          <h2 className='text-xl font-bold'>Fortalezas para construir</h2>
          <p className='font-light text-sm my-2 text-gray-600'>
            Utilice estas recomendaciones para desarrollar sus habilidades de
            liderazgo. céntrese en un área a la vez y establezca objetivos
            específicos para seguir su progreso
          </p>
        </header>
        <ul className='flex flex-col gap-2 list-none'>
          {Object.entries(recommendationsByArea).map(
            ([area, recommendations], index) => {
              const title =
                AREAS_RECOMMENDATIONS[Number(area) as keyof typeof AREAS]
              return (
                <li className='p-2' key={index}>
                  <h3 className='text-sm font-semibold'>{title}</h3>
                  <ul className='list-decimal text-sm flex flex-col gap-y-6 ml-4 mt-4 text-gray-600'>
                    {(recommendations as string[]).map(
                      (recommendation, index) => (
                        <li className='leading-5' key={index}>
                          {recommendation}
                        </li>
                      )
                    )}
                  </ul>
                </li>
              )
            }
          )}
        </ul>
      </section>
      {!htmlTemplate && (
        <div className='flex justify-center'>
          <Button className='max-w-xs' onClick={handleSendResults}>
            Enviar resultados
          </Button>
        </div>
      )}
    </div>
  )
}

export default LeadershipResults
