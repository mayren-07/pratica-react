import React, { useState } from 'react'
import { ItemEstoque } from '../ItemEstoque/ItemEstoque'
import { FormularioProduto } from '../FormularioProduto/FormularioProduto'

export const App = () => {

    const [caixa, setCaixa] = useState('0.00')

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: 'produto1',
            estoque: 6,
            compra: 20,
            venda: 23
        },
        {
            id: 2,
            nome: 'produto2',
            estoque: 6,
            compra: 20,
            venda: 23
        },
        {
            id: 3,
            nome: 'produto3',
            estoque: 3,
            compra: 20,
            venda: 23
        }
    ])

    const addProduto = (produto) => {
        setProdutos([...produtos, produto])
    }

  return (
    <div className='App '>
    <h1>Gerenciador de tarefas</h1>
    <h2>Caixa: R${caixa}</h2>
    <FormularioProduto addProduto={addProduto}/>
    {produtos.map(item => 
        <ItemEstoque produto={item} produtos={produtos} setProdutos={setProdutos} caixa={caixa} setCaixa={setCaixa} key={item.id}/>
    )}
    </div>
  )
}
