import { useState, useEffect, useRef, useCallback } from 'react'
import FirebaseDB from '@/firebase/index'
import { collection, getDocs } from 'firebase/firestore/lite'
import { type IDataUseGetData, type IDataGames } from '@/interface/games'
import { isDevelopment } from '@/utils/isDevelopment'

export const useGetData = (): IDataUseGetData => {
  const [data, setData] = useState<IDataUseGetData>({
    data: [],
    isLoading: false,
    error: ''
  })
  const isMounted = useRef(true)
  const getData = useCallback(
    async () => {
      setData(prevState => ({ ...prevState, isLoading: true }))
      try {
        const collectionRef = collection(FirebaseDB, 'games')
        const docs = await getDocs(collectionRef)
        const notes: IDataGames[] = docs.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
        if (isMounted.current) {
          setData({
            data: notes,
            isLoading: false,
            error: ''
          })
        }
      } catch (error) {
        if (isMounted.current) {
          setData({
            data: [],
            isLoading: false,
            error: 'Ha ocurrido un error'
          })
        }
      }
    },
    []
  )

  /**
   * Validación que evita que se mute el estado en caso que el componente que llamo este hook sea desmontado
   */
  useEffect(() => {
    if (isDevelopment()) {
      isMounted.current = true
    }
    void getData()
    return () => { // función de limpieza para actualizar el valor de isMounted cuando el componente se desmonte
      isMounted.current = false
    }
  }, [])

  return data
}
