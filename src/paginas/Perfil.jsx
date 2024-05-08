import estilos from './Perfil.module.css'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const perfilSchema = z.object({

    nome: z.string()
            .min(2, 'Informe um nome válido!')
            .max(25, 'Máximo de 25 caracteres!'),
    
    email: z.string()
            .email({message: 'Informe um e-mail válido!'}),

    usuario: z.string()
            .min(5, 'Mínimo de 5 caracteres!')
            .max(10, 'Máximo de 10 caracteres!'),

    senha: z.string()
            .min(5, 'Mínimo de 5 caracteres!')
            .max(10, 'Máximo de 10 caracteres!'),

})

export function Perfil(){

    const {register, 
           handleSubmit,
           formState: {errors}
          } = useForm({
            resolver: zodResolver(perfilSchema)
          })

    function obterDadosForm(data){
        console.log(data)
    }

    return(
        <div className={estilos.container}>

            <p className={estilos.titulo}>Perfil</p>

            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosForm)}
            >
                <input
                    {...register('nome')}
                    className={estilos.campo}
                    placeholder='Nome'
                />
                {errors.nome && (
                    <p className={estilos.error}>{errors.nome.message}</p>
                )}

                <input
                    {...register('email')}
                    className={estilos.campo}
                    placeholder='E-mail'
                />
                {errors.email && (
                    <p className={estilos.error}>{errors.email.message}</p>
                )}

                <input
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder='Usuario'
                />
                {errors.usuario && (
                    <p className={estilos.error}>{errors.usuario.message}</p>
                )}

                <input
                    {...register('senha')}
                    className={estilos.campo}
                    placeholder='Senha'
                />
                {errors.senha && (
                    <p className={estilos.error}>{errors.senha.message}</p>
                )}

                <button
                    className={estilos.botao}
                    type='submit'
                >Confirmar</button>

            </form>
        </div>
    )
}