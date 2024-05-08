import estilos from './Login.module.css'
import {useState} from 'react'

export function Login(){

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function obterDadosForm(e){

        e.preventDefault()

        console.log(`Usuário: ${usuario}`)
        console.log(`Senha: ${senha}`)
    }

    return(
        <div className={estilos.container}>
            <form 
                className={estilos.formulario}
                onSubmit={obterDadosForm}
            >
                <input
                    className={estilos.campo}
                    placeholder='Usuário'
                    value={usuario}
                    onChange={ e => setUsuario(e.target.value)}
                />

                <input
                    className={estilos.campo}
                    placeholder='Senha'
                    value={senha}
                    onChange={ e => setSenha(e.target.value)}
                />

                <button
                    className={estilos.botao}
                    type='submit'
                >Entrar</button>

            </form>
        </div>
    )
}