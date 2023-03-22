import { ROUTES } from '@/constants/menu'
import { useGetData } from '@/hooks/useTestFirebase'
import { t } from '@/utils/translate'
import { Card } from '@ui/components/Card-lx'
import { NavLink } from 'react-router-dom'

const QuestPage = (): JSX.Element => {
  const { data, isLoading } = useGetData()

  return (
        <>
        <div className='flex items-center justify-center gap-8'>
          <label htmlFor="InputSelectGame">{t('questFilterBy')}</label>
            <select name='InputSelectGame' defaultValue={'DEFAULT'} className="select bg-transparent rounded border-2 w-full max-w-xs p-4 focus:outline-none cursor-pointer">
              <option disabled value='DEFAULT' className=" cursor-pointer">{t('selectAGame')}</option>
              {isLoading
                ? <option disabled className=" cursor-pointer">{t('loading')}</option>
                : <>
                    {data?.map((data) => (<option key={data.id} value={data.id} className=" cursor-pointer">{data.name}</option>))}
                  </>
              }
            </select>
            <NavLink to={ROUTES.quest.subMenu?.questAdd.path ?? '/'} className='border-2 p-4 rounded font-bold hover:text-hover ml-auto'>{t('addQuest')}</NavLink>
        </div>
        <section className='mt-6'>
            <Card />
        </section>
        </>
  )
}

export default QuestPage
