import { DIALOGS } from '@contants/*'
import Button from './Button'

const PaymentSuccess = () => {
  const dialog = document.getElementById(
    DIALOGS.paymentSuccess
  ) as HTMLDialogElement

  const handleClose = () => {
    if (!dialog) return

    dialog.close()
  }

  return (
    <div className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 sm:max-w-sm sm:p-6 '>
      <div>
        <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6 text-green-600'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m4.5 12.75 6 6 9-13.5'
            />
          </svg>
        </div>
        <div className='mt-3 text-center sm:mt-5'>
          <h3 className='text-base font-semibold leading-6 text-gray-900'>
            Pago exitoso
          </h3>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Gracias por tu interés y confianza. Al final de tus resulatdos
              podras enviarlos a tu correo.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-6'>
        <Button onClick={handleClose}>Ver resultados</Button>
      </div>
    </div>
  )
}

export default PaymentSuccess
