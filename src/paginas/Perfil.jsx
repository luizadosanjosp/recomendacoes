import estilos from './Perfil.module.css'

export function Login(){

    function obterDadosForm(){
        
    }

    return(
        <div className={estilos.container}>

            <p className={estilos.titulo}>Perfil</p>

            <form 
                className={estilos.formulario}
                onSubmit={obterDadosForm}
            >
                <input
                    className={estilos.campo}
                    placeholder='Nome'
                />

                <input
                    className={estilos.campo}
                    placeholder='E-mail'
                />

                <button
                    className={estilos.botao}
                    type='submit'
                >Confirmar</button>

            </form>
        </div>
    )
}