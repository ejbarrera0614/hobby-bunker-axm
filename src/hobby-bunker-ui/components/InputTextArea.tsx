import { IInput } from '@/interface/IInputs';
import { forwardRef } from 'react'
import { LabelInputContainer } from '@ui/components/LabelInputContainer'
import { ErrorMessageInput } from './ErrorMessageInput';

export const InputTextArea = forwardRef<HTMLTextAreaElement, IInput>(function InputText ({name, label, error, placeholder, ...props }, ref): JSX.Element {
  return (
    <LabelInputContainer label={label}>
      <textarea rows={4} name={name} placeholder={placeholder} {...props} ref={ref}
      className=" focus:outline-none  focus:border-primary block p-2.5 w-full rounded border border-primary" />
      <ErrorMessageInput error={error?.message} />
    </LabelInputContainer>
  )
})
