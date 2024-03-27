import estilos from './Cabecalho.module.css'
import { FilmReel } from '@phosphor-icons/react'

export function Cabecalho(){
    return(
        <header className={ estilos.conteiner }>
            <FilmReel 
                size={34}
                color='#c9571e'
                weight='duotone'
            />
            <p>Recomendações</p>
        </header>
    )
}
