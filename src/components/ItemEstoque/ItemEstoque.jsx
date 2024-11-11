import React, {useState} from 'react'
import './ItemEstoque.css'

export const ItemEstoque = ({ produto, produtos, setProdutos, caixa, setCaixa }) => {



    const [estoque, setEstoque] = useState( produto.estoque > 5 ? 'estoqueNormal' : 'estoqueBaixo')



  return (
    <div className={'produtoItem '+ estoque}>
        <p>{produto.nome}</p>
        <p>{produto.estoque}</p>
        <p>R$ {produto.venda}</p>
        <div className=''>
            <button className='botaoComprar' onClick={() => {
                if (caixa - produto.compra < 0) {
                    window.alert('Não é possível realizar a compra, caixa ficará negativa')
                } else {
                    setCaixa(+caixa - produto.compra)
                    produto.estoque += 1
                    if (produto.estoque > 5) setEstoque('estoqueNormal')
                    setProdutos([...produtos])
                }
            }}>+</button>

            <button className='botaoVender' onClick={() => {
                if (produto.estoque == 0) {
                    window.alert('Produto sem estoque') 
                    return
                }

                produto.estoque -= 1
                if (produto.estoque <= 5) {
                    setEstoque('estoqueBaixo')
                    window.alert('Alerta de estoque baixo\n Produto: '+produto.nome+' - Quantidade: '+produto.estoque)
                }
                setProdutos([...produtos])
                setCaixa(+caixa + produto.venda)
            }}>-</button>
        </div>
    </div>
  )
}
