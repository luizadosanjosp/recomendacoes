import estilos from './Lateral.module.css'
import {Gear} from '@phosphor-icons/react'

export function Lateral(){
    return(
        <aside className={ estilos.conteiner }>
            <img className={ estilos.imagemCabecalho } src='https://i.pinimg.com/564x/bf/ef/e6/bfefe6b3e36de3572de433e7a399b5ff.jpg' />

            <div className={ estilos.perfil }>
                <img className={ estilos.avatar } src='https://avatars.githubusercontent.com/u/112957781?v=4' />
                <strong>Lulu</strong>
            </div>
            <div className={ estilos.opcoes }>
                <p className={ estilos.botao }>
                    <Gear size={20} />
                    <strong>Perfil</strong>
                </p>
            </div>
        </aside>
    )
}
