import { useState } from 'react'

function FormCalculadora() {
    //variáveis
    const [n1, setNum1] = useState('')
    const [n2, setNum2] = useState('')
    const [operacao, setOperacao] = useState(null)
    const [msg, setMsg] = useState('')


    //limpar 
    function limpar() {
        setNum1('')
        setNum2('')
        setMsg('')
        setOperacao('')
    }

    //Função calcular 
    function calcular(e) {
        //evitar recarregamento a página
        e.preventDefault()


        //tratar variáveis com casas decimais
        const num1 = parseFloat(n1)
        const num2 = parseFloat(n2)

        //verificar situaçãodo IMc
        if (operacao == 'soma') {
            setMsg(num1 + num2)
        } else if (operacao == 'subtracao') {
            setMsg(num1 - num2)
        } else if (operacao == 'multiplicacao') {
            setMsg(num1 * num2)
        } else if (operacao == 'divisao') {
            setMsg(num1 / num2)
        }
    }


    return (
        <div>
            <form onSubmit={calcular} >

                <h2>Calculadora Simples</h2>

                <div>
                    <input 
                        type="number"
                        name="num1"
                        id="n1"
                        placeholder="Digite o número"
                        value={n1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type="number"
                        name="num2"
                        id="n2"
                        placeholder="Digite o segundo numero"
                        value={n2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type="text"
                        name="mensagem"
                        id="msg"
                        placeholder="Resultado"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    />
                </div>

                <div>
                    <select
                        value={operacao}
                        onChange={(e) => setOperacao(e.target.value)}
                    >
                        <option value="soma">Somar (+)</option>
                        <option value="subtracao">Subtrair (-)</option>
                        <option value="multiplicacao">Multiplicar (*)</option>
                        <option value="divisao">Dividir (/)</option>
                    </select>

                </div>

                <div>
                    <input type="submit" value="Calcular" />
                    <br />
                    <input type="button" value="Limpar" onClick={limpar} />
                </div>

                <div>
                    <p>{msg}</p>
                </div>
            </form>
        </div>
    )
}

export default FormCalculadora