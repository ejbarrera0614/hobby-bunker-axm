import { forwardRef } from 'react'
import { UseFormReturn, FieldError } from 'react-hook-form';

interface IInput {
    name: string
    label: string
    error: FieldError | undefined
    [key: string]: unknown
}

interface InputProps {
    name: string;
    label?: string;
    error: FieldError | undefined;
    register: UseFormReturn['register'];
    rules?: Record<string, unknown>;
    type?: string;
    className?: string;
    placeholder?: string;
}
const InputText = forwardRef<HTMLInputElement, IInput>(function InputText ({name, label, error, ...props }, ref): JSX.Element {
    const hasError = Boolean(error);
  return (
  <label className='flex flex-col gap-2'>
    {label}
    <input  className="p-2 rounded border-2 focus:outline-none  focus:border-primary" {...props} ref={ref} name={name}/>
    {hasError && (
          <span role="alert" className="input-error">
            {error?.message}
          </span>
        )}
  </label>
  )
})

export default InputText
