
export interface IDataGames {
  id: string
  name: string
}

export interface IDataUseGetData {
  data: IDataGames[]
  isLoading: boolean
  error: string
}
