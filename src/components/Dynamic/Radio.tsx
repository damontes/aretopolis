import React, { useId } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name?: string
}

export default function Radio({ label, name, ...props }: Props) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className='flex items-center border-gray-400/70 border rounded-md py-3 px-4 w-full hover:ring-[2px] hover:ring-neutral-800 relative'
    >
      <input id={id} name={name} type='radio' {...props} />
      <span className='ml-3 block text-sm font-medium leading-6 text-gray-800'>
        {label}
      </span>
    </label>
  )
}
