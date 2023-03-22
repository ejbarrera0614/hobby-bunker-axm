import { IInput } from '@/interface/IInputs';
import { forwardRef } from 'react'
import { LabelInputContainer } from '@ui/components/LabelInputContainer'
import { ErrorMessageInput } from './ErrorMessageInput';


export const InputText = forwardRef<HTMLInputElement, IInput>(function InputText ({name, label, error, placeholder, ...props }: IInput, ref): JSX.Element {
  return (
  <LabelInputContainer label={label}>
    <input {...props} ref={ref} name={name} placeholder={placeholder} 
    className="p-2 rounded border-2 focus:outline-none  focus:border-primary w-full"/>
    <ErrorMessageInput error={error?.message} />
  </LabelInputContainer>
  )
})
