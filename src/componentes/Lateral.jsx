import estilos from './Lateral.module.css'
import {Gear} from '@phosphor-icons/react'

export function Lateral(){
    return(
        <aside className={ estilos.conteiner }>
            <img className={ estilos.imagemCabecalho } src='https://i.pinimg.com/564x/bf/ef/e6/bfefe6b3e36de3572de433e7a399b5ff.jpg' />

            <div className={ estilos.perfil }>
                <img className={ estilos.avatar } src='https://i.pinimg.com/564x/d7/74/1e/d7741e39dbf3f5cf987fb71e40d5356b.jpg' />
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
