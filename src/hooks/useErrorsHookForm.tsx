import { t } from '@/utils/translate'
import { useMemo } from 'react';

interface Errors {
    required?: boolean
    minLength?: number
    maxLength?: number
}
interface ErrorReturn {
    [key: string]: {
        value: string | number | boolean
        message: string 
    }
}

export const useErrorsHookForm = ()=>(props: Errors):ErrorReturn => {
    const errors:ErrorReturn = useMemo(() => {
        return Object.entries(props).reduce((objErrors: ErrorReturn, [key, value]) => {
            objErrors[key] = {
                value: value,
                message: t(key, key === 'required' ? {} : {replacements:{[key]:value}})
            }
            return objErrors
        }, {});
    }, [])
    return errors
}