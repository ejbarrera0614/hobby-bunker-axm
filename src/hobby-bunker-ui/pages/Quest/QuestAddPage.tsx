import { t } from '@/utils/translate'
import InputText from '@ui/components/InputText'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useErrorsHookForm } from '../../../hooks/useErrorsHookForm';

type Inputs = Record<string, string>

function QuestAddPage (): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const useErrors = useErrorsHookForm()
  const onSubmit = handleSubmit(data => console.log(data));

  return (
      <form onSubmit={onSubmit} className='flex flex-col gap-6 max-w-md '>
        <h1>{t('addQuest')}</h1>
        <InputText label={t('name')} {...register('Name', useErrors({required: true, minLength:20}) )} error={errors?.Name} name='Name' />

        <button type="submit" className='border-2 p-4 rounded font-bold hover:text-hover ml-auto' >{t('send')}</button>
      </form>
  )
}

export default QuestAddPage
