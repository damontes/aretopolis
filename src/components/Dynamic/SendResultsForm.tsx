import { getLocalStorage, removeLocalStorage } from '@helpers/localStorage'
import Button from './Button'
import Input from './Input'
import { TEST_RESULT, TestType } from '@contants/*'
import { useState } from 'react'

interface Props {
  initialValues: {
    email: string
  }
}

const SendResultsForm = ({ initialValues }: Props) => {
  const answers = getLocalStorage(`${TestType.LIDERAZGO}:answers`)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const element = document.getElementById(TEST_RESULT.leadership)
    if (!element) return
    setLoading(true)
    const formData = new FormData(e.target)

    formData.set('results', JSON.stringify(answers))

    const rawResponse = await fetch('/api/results/sendEmail', {
      method: 'POST',
      body: formData
    })

    if (!rawResponse.ok) {
      console.error('Error submitting answers', rawResponse.statusText)
      return
    }
    setLoading(false)
    alert('Resultados enviados correctamente')
    window.location.href = '/'
    removeLocalStorage(`${TestType.LIDERAZGO}:answers`)
  }

  return (
    <form onSubmit={handleSubmit} className='px-8 py-6'>
      <div className='flex flex-col gap-4'>
        <Input
          label='Correo Electronico *'
          type='text'
          name='email'
          required
          defaultValue={initialValues.email}
        />
        <input
          type='hidden'
          name='results'
          defaultValue={JSON.stringify(answers)}
        />
      </div>
      <div className='mt-10'>
        <Button type='submit' disabled={loading}>
          {loading ? 'Enviando' : 'Enviar resultados'}
        </Button>
      </div>
      <p className='text-center text-xs text-gray-400 mt-4'>
        Verifica que tus datos sean correctos antes de enviar tu solicitud.
      </p>
    </form>
  )
}

export default SendResultsForm
