import React from "react";
import '../pages/CadastrarProduto.css'
import { useState } from 'react'
import $ from 'jquery'


export const CadastrarProduto =({dadosProdutos})=>{
  


  
const [nomeProduto,setNomeProduto]=useState('')
const [modeloProduto ,setModeloProduto]=useState('')
const [eanProduto,setEanProduto]=useState('')
const [validadeProduto,setValidadeProduto]=useState('')
const [preçoProduto,setPreçoProduto]=useState('')
const [tipoVenda,setTipoVenda]=useState('')
const [pesoProduto,setPesoProduto]=useState('')
const [fabricanteProduto,setFabricanteProduto]=useState('')




function salvarProduto(){
$('form').on('click',function(){
data.contador++
})

const data = {
  contador:1,
  nomeProduto,
  modeloProduto,
  eanProduto,
  validadeProduto,
  preçoProduto,
  tipoVenda,
  pesoProduto,
  fabricanteProduto
}
dadosProdutos(data)

}





return(
<div className="ComponenteCadastrarProduto">
   <b> <div id="nomeCadastrarProduto">Cadastrar Produto</div></b>

      
<form>
  
  <div  class="form-row">
    <div class="form-group col-md-6">
      <label for="inputNomeProduto" id='descriçaoProduto'>Tipo Produto </label>
      <input type="text" value={nomeProduto} onChange={e => setNomeProduto(e.target.value)} class="form-control"   id="inputNomeProduto" placeholder="Nome do Produto" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputModelo" id='descriçaoModelo'>Modelo</label>
      <input type="text" value={modeloProduto} onChange={e => setModeloProduto(e.target.value)} class="form-control" id="inputModelo" placeholder="Modelo do Produto"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputEan" id='nomeEan'>&nbsp;Código EAN </label>
    <input type="number" value={eanProduto} onChange={e => setEanProduto(e.target.value)}  class="form-control" id="inputEan" placeholder="Código de Barra"/>
  </div>
  <div class="form-group">
    <label for="inputValidade" id='nomeValidade'>&nbsp;Validade</label>
    <input type="date" value={validadeProduto} onChange={e => setValidadeProduto(e.target.value)} class="form-control" id="inputValidade" placeholder="Apartamento, hotel, casa, etc."/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPreço" id='nomePreço'>Preço </label>
      <input type="text" value={preçoProduto} onChange={e => setPreçoProduto(e.target.value)}  class="form-control" id="inputPreço" placeholder="Preço do Produto" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputVendas" id='nomeVenda'>Tipo Venda </label>
      <select id="inputVendas" value={tipoVenda} onChange={e => setTipoVenda(e.target.value)} class="form-control">
        <option selected>Escolha o Tipo de Venda...</option>
        <option>Venda Direta</option>
        <option>Venda Consultiva</option>
        <option>Venda Corporativa</option>
        <option>Venda Casada</option>
        <option>Venda Consignada</option>
       
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputPeso" id='nomePeso'>Peso </label>
      <input type="number"  value={pesoProduto} onChange={e => setPesoProduto(e.target.value)} class="form-control"  id="inputPeso" placeholder="Peso"/>
    </div>
  </div>
  <div class="form-group col-md-2">
      <label for="inputFabricante" id='nomeFabricante'>&nbsp;Fabricante </label>
      <input type="tel"  value={fabricanteProduto} onChange={e => setFabricanteProduto(e.target.value)}class="form-control" id="inputFabricante" placeholder='Empresa Fabricante'/>

    </div>
   
  <button type="submit"  onClick={salvarProduto}  class="btn btn-primary">Salvar Produto</button>
</form>
</div>
)


}








