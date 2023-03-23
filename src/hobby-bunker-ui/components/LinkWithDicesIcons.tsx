import { NavLink } from 'react-router-dom'
import { DiceSixFaces, DiceSixFacesTwo } from '@ui/components/Icons'
import { Link } from '@/interface/Links'

export  function LinkWithDicesIcons({ path, label, showDices }: Link): JSX.Element  {
    const dicesStyle = (showDices ?? false) ? '' : 'invisible'
  
    return (
      <NavLink to={path} className='hover:text-hover grid grid-cols-link h-full nav-link py-2'>
          <span className={`col-start-1 m-auto ${dicesStyle}`}><DiceSixFaces /></span>
          <h5 className='col-start-2 m-auto'>{label}</h5>
          <span className={`col-start-3 m-auto ${dicesStyle}`}><DiceSixFacesTwo /></span>
      </NavLink >)
  }