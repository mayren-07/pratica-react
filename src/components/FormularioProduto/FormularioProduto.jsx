import React, { useState } from 'react'
import './FormularioProduto.css'

export const FormularioProduto = ({addProduto}) => {

    const [nome, setNome] = useState('')
    const [estoque, setEstoque] = useState('')
    const [compra, setCompra] = useState('')
    const [venda, setVenda] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!nome || !estoque || !compra || !venda) return

        addProduto({id:Math.random() * 100, nome, estoque, compra, venda})

        setCompra('')
        setVenda('')
        setEstoque('')
        setNome('')
    }
    
  return (
    <div className='formulario'>
        <form className='formulario' onSubmit={handleSubmit}>
                <p className='label'>Nome do produto:</p>
                <input className='input' type="text" onChange={(e) => setNome(e.target.value)} />

                <p className='label'>Quantidade estoque:</p>
                <input className='input' type="number" onChange={(e) => setEstoque(e.target.value)} />

                <p className='label'>Valor compra:</p>
                <input className='input' type="number" onChange={(e) => setCompra(e.target.value)} />

                <p className='label'>Valor venda:</p>
                <input className='input' type="number" onChange={(e) => setVenda(e.target.value)} />

            
                <button type='submit' className='botao'>Adicionar produto</button>
            </form>
    </div>
  )
}
