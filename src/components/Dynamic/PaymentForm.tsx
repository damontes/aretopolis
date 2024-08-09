import { getLocalStorage, removeLocalStorage } from '@helpers/localStorage'
import Button from './Button'
import Input from './Input'
import { TestType } from '@contants/*'
import { useState } from 'react'

const PaymentForm = () => {
  const answers = getLocalStorage(`${TestType.LIDERAZGO}:answers`)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    formData.set('callback_path', window.location.pathname)

    const result = await fetch('/api/payments/checkout', {
      method: 'POST',
      body: formData
    })

    if (!result.ok) {
      alert(`Hubo un error al enviar el pago ${result.statusText}`)
      setLoading(false)
      return
    }

    const { url } = await result.json()

    window.location.href = url
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
        <Button disabled={loading}>{loading ? 'Enviando' : 'Ver más'}</Button>
      </div>
      <p className='text-center text-xs text-gray-400 mt-4'>
        Verifica que tus datos sean correctos antes de enviar tu solicitud.
      </p>
    </form>
  )
}

export default PaymentForm
