import type React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
}

const Input = ({ label, ...rest }: Props) => {
  return (
    <div>
      <label
        htmlFor='email'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          className='h-11 text-lg block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
          {...rest}
        />
      </div>
    </div>
  )
}

export default Input
