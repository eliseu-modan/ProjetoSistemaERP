import React ,{ useLayoutEffect, useState} from 'react'
import {Switch , Route,HashRouter} from 'react-router-dom'
import '../componentes/Menu.css'
import{ CadastrarClient } from '../pages/CadastrarCliente'
import { Prop } from '../pages/PaineldeControle'
import {CadastrarProduto} from '../pages/CadastrarProduto'
import {CadastrarVendas }from '../pages/CadastrarVendas'
import {VendasEfetuadas} from '../pages/VendasEfetuadas'
import { ProdutosCadastrados } from '../pages/ProdutosCadastrados'
import { Clientes } from '../pages/ClientesCadastrados'
const  Menus = () =>{

useLayoutEffect(()=>{


  


  const PaineldeControle = document.getElementById('NomePaineldeControle')
  const CadastrarCliente = document.getElementById('NomeCadastrarCliente')
  const CadastrarProduto =document.getElementById('NomeCadastrarProduto')
  const CadastrarVenda = document.getElementById('NomeCadastrarVendas')
  const VendasEfetuadas =document.getElementById('NomeVendasEfetuadas')
  const NomeCliente =document.getElementById('NomeCliente')
  const NomeProduto =document.getElementById('NomeProduto')

  function selecionar(){
    PaineldeControle.addEventListener('mouseover',function(){
      PaineldeControle.style.color='#00bf8f';
     CadastrarCliente.style.color='black'
     CadastrarProduto.style.color='black'
     CadastrarVenda.style.color='black'
     VendasEfetuadas.style.color='black'
     NomeCliente.style.color="black"
     NomeProduto.style.color='black'
   


    })
    CadastrarCliente.addEventListener('mouseover',function(){
      CadastrarCliente.style.color='#00bf8f'
PaineldeControle.style.color='black'
      CadastrarProduto.style.color='black'
      CadastrarVenda.style.color='black'
      VendasEfetuadas.style.color='black'
      NomeCliente.style.color="black"
      NomeProduto.style.color='black'
    


     })
     CadastrarProduto.addEventListener('mouseover',function(){
      CadastrarProduto.style.color='#00bf8f'
      CadastrarCliente.style.color='black'
      CadastrarCliente.style.color='black'
      CadastrarVenda.style.color='black'
      VendasEfetuadas.style.color='black'
      NomeCliente.style.color="black"
      NomeProduto.style.color='black'
          PaineldeControle.style.color='black'



 })
 CadastrarVenda.addEventListener('mouseover',function(){
  CadastrarVenda.style.color='#00bf8f'
  CadastrarCliente.style.color='black'
  CadastrarCliente.style.color='black'
  CadastrarProduto.style.color='black'
  VendasEfetuadas.style.color='black'
  NomeCliente.style.color="black"
  NomeProduto.style.color='black'
  PaineldeControle.style.color='black'




  
})
VendasEfetuadas.addEventListener('mouseover',function(){
  CadastrarVenda.style.color='black'
  CadastrarCliente.style.color='black'
  CadastrarCliente.style.color='black'
  CadastrarProduto.style.color='black'
  NomeCliente.style.color="black"
  NomeProduto.style.color='black'
  PaineldeControle.style.color='black'

  VendasEfetuadas.style.color='#00bf8f'

  
})
NomeCliente.addEventListener('mouseover',function(){
  CadastrarVenda.style.color='black'
  CadastrarCliente.style.color='black'
  CadastrarCliente.style.color='black'
  CadastrarProduto.style.color='black'
  VendasEfetuadas.style.color='black'
  NomeProduto.style.color='black'
  NomeCliente.style.color="#00bf8f"
  PaineldeControle.style.color='black'


  
})
NomeProduto.addEventListener('mouseover',function(){
  CadastrarVenda.style.color='black'
  CadastrarCliente.style.color='black'
  CadastrarCliente.style.color='black'
  CadastrarProduto.style.color='black'
  VendasEfetuadas.style.color='black'
  NomeCliente.style.color="black"
  NomeProduto.style.color='#00bf8f'
  PaineldeControle.style.color='black'


  
})



  

    }
    selecionar()


  })
const [listProduto,setListProduto]=useState([])
function salvarProduto(Produto){
  let newListVenda = [...listProduto]
  newListVenda.push(Produto)
  setListProduto(newListVenda)
}




  const [list ,setList]=useState([])
  function salvardados(salvar){
    let newList=[...list]

    newList.push(salvar)
    setList(newList)
  }

  const [listVendas,setListVendas]=useState([])
  function salvarVenda(dados){
    let newListVenda = [...listVendas]
    newListVenda.push(dados)
    setListVendas(newListVenda)
  }
    
        
return(

 <div className='Menu'>
   <div ><a href="#home" id='inicio'>Inicio</a></div>
   <div ><a href="#PaineldeControle" id='NomePaineldeControle' ><b> Painel de Controle </b></a></div>
   <div> <a  href="?#CadastrarCliente" id='NomeCadastrarCliente'><b> Cadastrar Cliente</b></a></div>
   <div> <a href="?#CadastrarProduto" id='NomeCadastrarProduto'><b> Cadastrar Produto </b></a></div>
   <div> <a href="?#CadastrarVendas" id='NomeCadastrarVendas'><b> Cadastrar Venda </b></a></div>
   <div> <a href="#VendasEfetuadas" id='NomeVendasEfetuadas'><b> Vendas Cadastradas </b></a></div>
   <div> <a href="#ClientesCadastrados" id='NomeCliente'><b> Clientes Cadastrados </b></a></div>
   <div> <a href="#ProdutosCadastrados" id='NomeProduto'><b> Produtos Cadastrados </b></a></div>

  <>
  </>
   <HashRouter>
 
    <Switch>

     <Route exact path="/PaineldeControle"><Prop contar={list} qtdProduto={listProduto} qtdVendas={listVendas}></Prop></Route>
     <Route  path="/CadastrarCliente" ><CadastrarClient     dadosCadastro={salvardados}></CadastrarClient></Route>
     <Route path="/clientesCadastrados"><Clientes List ={list}></Clientes></Route>
     <Route  path="/CadastrarProduto"><CadastrarProduto dadosProdutos={salvarProduto}></CadastrarProduto></Route>
     <Route  path="/CadastrarVendas"><CadastrarVendas DadosVenda={salvarVenda}></CadastrarVendas></Route>
     <Route  path="/VendasEfetuadas"><VendasEfetuadas dadosVenda={listVendas}></VendasEfetuadas></Route>
       <Route  path="/ProdutosCadastrados"><ProdutosCadastrados ListaProdutos={listProduto} ></ProdutosCadastrados></Route>




    </Switch>





   </HashRouter>

    
 </div>
 
)
 }
 export default Menus