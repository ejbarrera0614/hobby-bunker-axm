import { ROUTES } from '@/constants/menu'
import { t } from '@/utils/translate'
import { Card } from '@ui/components/Card-lx'
import { NavLink } from 'react-router-dom'
import { SelectListGameType } from '../../components/SelectListGameType';

export function QuestPage(): JSX.Element {

  return (
        <>
        <div className='flex items-center justify-center gap-8'>
          <label htmlFor="InputSelectGame">{t('questFilterBy')}</label>
            <SelectListGameType />
            <NavLink to={ROUTES.quest.subMenu?.questAdd.path ?? '/'} className='border-2 p-4 rounded font-bold hover:text-hover ml-auto'>{t('addQuest')}</NavLink>
        </div>
        <section className='mt-6'>
            <Card />
        </section>
        </>
  )
}

