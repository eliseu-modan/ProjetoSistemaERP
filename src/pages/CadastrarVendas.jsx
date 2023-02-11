import React, { useState } from "react";
import '../pages/CadastrarVendas.css'
import $ from 'jquery'

export const CadastrarVendas = ({DadosVenda})=>{
           
    
  const [inputtipoProduto ,setInputTipoProduto] = useState('')
  const [inputmodelo,setInputModelo] =useState('')
  const [inputean,setInputEan]=useState('')
  const [inputfabricante,setInputFabricante]=useState('')
  const [inputpreço,setInputPreço]=useState('')
  const [inputvenda,setInputVenda]=useState('')
  const [inputnome,setInputNome]=useState('')
  const [inputemail,setInputEmail]=useState('')
  const [inputcnpj,setInputCnpj]=useState('')


  function salvarDadosVenda(){

      $('form').on('click',function(){
        data.contador++

      })

   const data ={
     contador: 1,
    inputtipoProduto,
    inputmodelo,
    inputean,
    inputfabricante,
    inputpreço,
    inputvenda,
    inputnome,
    inputemail,
    inputcnpj

    
    
    
  }
  DadosVenda(data)

  }





    return(
    <div className="ComponenteCadastrarVendas"><div id="nomeTituloVenda"><b> Cadastrar Vendas </b></div>

        
<form>
  
  <div  class="form-row">
    <div class="form-group col-md-6">
      <label for="inputNomeProduto" id='descriçaoProduto'>Tipo Produto </label>
      <input type="text"  value={inputtipoProduto} onChange={e =>setInputTipoProduto(e.target.value)} class="form-control"   id="inputNomeProduto" placeholder="Nome do Produto" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputModelo" id='descriçaoModelo'>Modelo</label>
      <input type="text" value={inputmodelo} onChange={e =>setInputModelo(e.target.value)} class="form-control" id="inputModelo" placeholder="Modelo do Produto"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputEan" id='nomeEan'>&nbsp;Código EAN </label>
    <input type="number"  value={inputean} onChange={e => setInputEan(e.target.value)}  class="form-control" id="inputEan" placeholder="Código de Barra"/>
  </div>
  <div class="form-group">
    <label for="inputFabricante" id='nomeFabricante'>&nbsp;Fabricante </label>
    <input type="text" value={inputfabricante} onChange={e =>setInputFabricante(e.target.value)}  class="form-control" id="inputFabricante" placeholder="Fabricante"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPreço" id='nomePreço'>Preço</label>
      <input type="text" value={inputpreço} onChange={e => setInputPreço(e.target.value)}  class="form-control" id="inputPreço" placeholder="Preço do Produto" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputTipoVenda" id='nomeVenda'>Tipo Venda &nbsp;</label>
      <select id="inputTipoVenda" value={inputvenda} onChange={e =>setInputVenda(e.target.value)}  class="form-control">
        <option selected>Escolha o Tipo de Venda...</option>
        <option>Venda Direta</option>
        <option>Venda Consultiva</option>
        <option>Venda Corporativa</option>
        <option>Venda Casada</option>
        <option>Venda Consignada</option>
       
      </select>
    </div>
  </div>
  <div  class="form-row">
    <div class="form-group col-md-6">
      <label for="inputNome" id='descriçaoNome'>Nome Completo</label>
      <input type="text" value={inputnome} onChange={e =>setInputNome(e.target.value)} class="form-control" id="inputNome" placeholder="Nome completo" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail" id='nomeEmail'>E-MAIL</label>
      <input type="text" value={inputemail} onChange={e =>setInputEmail(e.target.value)}  class="form-control" id="inputEmail" placeholder="Razão Social"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputCnpj-Cpf" id='nomeCnpj'>CNPJ / CPF</label>
    <input type="number" value={inputcnpj} onChange={e =>setInputCnpj(e.target.value)}  class="form-control" id="inputCnpj-Cpf" placeholder="Digite o CNPJ ou CPF"/>
  </div>
   
  <button type="submit"  onClick={salvarDadosVenda}  class="btn btn-primary">Salvar Produto</button>
</form>





        </div>
)}