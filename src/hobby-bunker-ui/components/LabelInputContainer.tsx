
interface Props {
  label: string
  children: React.ReactNode
}
export  function LabelInputContainer({label, children}: Props) {
  return (
    <label className='flex flex-col gap-2'>
        <span>{label}</span>
        <div>
          {children}
        </div>
    </label>
  )
}
