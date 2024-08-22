interface Props extends React.HTMLAttributes<HTMLDialogElement> {
  id: string
  closeButton?: boolean
}

const Dialog = ({ id, closeButton = true, children, ...rest }: Props) => {
  const onClose = () => {
    const dialog = document.getElementById(id) as HTMLDialogElement
    dialog?.close()
  }

  return (
    <dialog
      id={id}
      className='bg-white rounded-lg w-fit max-w-[95%] sm:max-w-xl backdrop:bg-primary-100/40 backdrop:blur-md animate-fade-down'
      {...rest}
    >
      {closeButton && (
        <button
          id={`${id}-close-button`}
          type='button'
          className='absolute right-2 top-2 z-50 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none'
          onClick={onClose}
        >
          <span className='sr-only'>Close</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M18 6l-12 12' />
            <path d='M6 6l12 12' />
          </svg>
        </button>
      )}
      {children}
    </dialog>
  )
}

export default Dialog
