import {InputTextArea} from '@/hobby-bunker-ui/components/InputTextArea';
import { SelectListGameType } from '@/hobby-bunker-ui/components/SelectListGameType';
import { t } from '@/utils/translate'
import {InputText} from '@ui/components/InputText'
import { useForm } from 'react-hook-form'
import { useErrorsHookForm } from '../../../hooks/useErrorsHookForm';

interface InputModel {
  Name: string
  Description: string
  GameTypeID: string
}

export function QuestAddPage (): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<InputModel>()
  const useErrors = useErrorsHookForm()
  const onSubmit = handleSubmit(data => console.log(data));

  return (
      <form onSubmit={onSubmit} className='flex flex-col gap-6 max-w-md '>
        <h1>{t('addQuest')}</h1>
        <SelectListGameType label='Selecciona un tipo de juego' className="bg-white w-full " {...register('GameTypeID', useErrors({required: true}) )} error={errors?.GameTypeID}/>
        <InputText label={t('name')} placeholder={t('phNameNewEvent')}  {...register('Name', useErrors({required: true, minLength:20}) )} error={errors?.Name}  />
        <InputTextArea label={t('description')}  placeholder={t('phDescriptionNewEvent')} {...register('Description', useErrors({required: true, maxLength:500}) )} error={errors?.Description}  />
        <button type="submit" className='border-2 p-4 rounded font-bold hover:text-hover ml-auto' >{t('send')}</button>
      </form>
  )
}