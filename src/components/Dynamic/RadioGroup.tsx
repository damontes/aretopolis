import {
  Children,
  cloneElement,
  useId,
  type ChangeEvent,
  type FieldsetHTMLAttributes
} from 'react'

interface Props
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  children: React.ReactElement[]
  onChange?: (value: string) => void
  value?: string
}

export default function RadioGroup<T>({
  children,
  onChange = () => null,
  value = '',
  ...props
}: Props) {
  const id = useId()

  return (
    <fieldset {...props}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          name: `radio-group-${id}`,
          checked: (child.props as { value?: string }).value === value,
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            onChange((event.target as HTMLInputElement).value)
        })
      })}
    </fieldset>
  )
}
