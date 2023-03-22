import { Link } from 'react-router-dom'
import { getIcon } from '@ui/components/Icons'
import { useMemo } from 'react'

interface Props {
  icon?: string
}
export function Card ({ icon }: Props): JSX.Element {
  const Icon = useMemo(() => getIcon(icon), [icon])
  return (
        <Link to={'/Quest'}
            className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 cursor-pointer md:max-w-lg hover:text-hover"
        >
            <div className="rounded shadow shadow-primary hover:shadow-hover px-8 py-6 flex items-center border-2">
                <div className="rounded self-start">
                    <Icon className='w-11 h-auto' />
                </div>
                <div className="ml-6">
                    <h3 className="mb-4  font-bold ">¿Quieres participar o crear un evento?</h3>
                    <p className="text-sm tracking-normal font-normal leading-5">
                        Entonces ingresa a la sección de misiones y ver todo los eventos que tenemos y también
                        puedes proponernos un evento llenando el formulario
                    </p>

                </div>
            </div>
        </Link >
  )
}
