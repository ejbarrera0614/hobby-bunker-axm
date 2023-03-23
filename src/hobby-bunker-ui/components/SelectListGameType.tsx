import { LabelInputContainer } from '@ui/components/LabelInputContainer'
import { useGetData } from '@/hooks/useTestFirebase'
import { ISelectGameType } from '@/interface/IInputs'
import { t } from '@/utils/translate'
import {  forwardRef  } from 'react'
import { ErrorMessageInput } from './ErrorMessageInput'
import { IDataUseGetData } from '@/interface/Games'
interface GetData extends IDataUseGetData {
  isLoading: boolean
}
export const SelectListGameType = forwardRef<HTMLSelectElement, ISelectGameType>(function SelectListGameType({name, label, className, error, onChange}, ref){
    const { data, isLoading }: GetData = useGetData()

  return (
    <LabelInputContainer label={label ?? ''}>
      <select name={name} defaultValue='' ref={ref} onChange={onChange} className={`bg-transparent  rounded border-2 w-full  p-2 focus:outline-none cursor-pointer ${className} `} >
        <option disabled value={''}  className=" cursor-pointer">{t('selectAGame')}</option>
        {isLoading
          ? <option disabled className=" cursor-pointer">{t('loading')}</option>
          : <>
              {data?.map((data) => (<option key={data.id} value={data.id} className=" cursor-pointer">{data.name}</option>))}
            </>
        }
      </select>
      <ErrorMessageInput error={error?.message} />
    </LabelInputContainer>
  )
})

