const translations: Record< string, Record<string, string> > = {
  default: { default: 'Algo ha ocurrido' },
  es: {
    home: 'Inicio',
    quest: 'Misiones',
    addQuest: 'Agregar misión',
    events: 'Eventos',
    aboutUs: '¿Qué somos?',
    loading: 'Cargando...',
    questFilterBy: 'Filtrar misiones por:',
    selectAGame: 'Selecciona un juego',
    name: 'Nombre:',
    minLength: 'La cantidad de caracteres minima son %minLength%',
    required: 'Este campo es requerido',
  }
}
interface Props {
  lang?: string
  replacements?: Record<string, string>
}
export function t (key: string, {lang = 'es', replacements ={}}: Props = {}): string{
  const getLang = translations[lang] ?? translations.es
  let txt = getLang[key] 
  const entriesReplacements =  Object.entries(replacements)
  if(Boolean(entriesReplacements.length) && txt){
    entriesReplacements.forEach(([key, value]) => {
      txt = txt.replace(`%${key}%`, `${value}`)
    })
  }
  
  return txt ?? translations.default.default
} 