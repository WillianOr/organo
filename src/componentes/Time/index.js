import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    // no JSX diferente do CSS não se usa '-' se usa uma letra maiuscula

    return (
        // tambem posso utilizar o && no lugardo operador ternario substituindo o ? e tirando os : e as ''
        // é interessante usar da forma ternaria por possiblitirar colocar algo alternativo uma vez que da outra forma só não ira executar o segundo comando, pois ela é uma gambiarra do IF, pois caso o primeiro item seja verdadeiro ele fara o segundo e caso seja falso ele não fara
        (props.colaboradores.length > 0) ? <section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador corDeFundo={props.corPrimaria}
                        key={colaborador.nome} nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} />)}
            </div>
        </section>
            : ''
    )
}

export default Time