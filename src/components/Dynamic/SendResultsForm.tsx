import { getLocalStorage, removeLocalStorage } from '@helpers/localStorage'
import Button from './Button'
import Input from './Input'
import { TestType } from '@contants/*'
import { useState } from 'react'

const SendResultsForm = () => {
  const answers = getLocalStorage(`${TestType.LIDERAZGO}:answers`)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const result = await fetch('/api/results/sendEmail', {
      method: 'POST',
      body: formData
    })

    if (!result.ok) {
      alert(`Error al enviar los resultados ${result.statusText}`)
      setLoading(false)
      return
    }

    alert('Resultados enviados correctamente')

    window.location.href = '/'
    removeLocalStorage(`${TestType.LIDERAZGO}:answers`)
  }

  return (
    <form onSubmit={handleSubmit} className='px-8 py-6'>
      <div className='flex flex-col gap-4'>
        <Input label='Nombre *' type='text' name='name' required />
        <Input label='Correo Electronico *' type='text' name='email' required />
        <input
          type='hidden'
          name='results'
          defaultValue={JSON.stringify(answers)}
        />
      </div>
      <div className='mt-10'>
        <Button disabled={loading}>
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
