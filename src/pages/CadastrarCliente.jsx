import React  from 'react'
import { useState } from 'react'
import '../pages/CadastrarCliente.css'
import $  from 'jquery'


export const CadastrarClient=({dadosCadastro})=>{
const [name ,setName]=useState('')
const [email,setEmail] =useState('')
const [razaoSocial,setRazaoSocial] =useState('')
const [cpf,setCpf] =useState('')
const [fundaçao,setFundaçao] =useState('')
const [cidade,setCidade] =useState('')
const [estado,setEstado] =useState('')
const [cep,setCep] =useState('')
const [contato,setContato] =useState('')
const [profissao,setProfissao] =useState('')




const handleSave = () =>{
  $('form').on('click',function (){
        data.contador++

  })

 




  
  

  const data ={
    contador:1,
    name,
    email,
    razaoSocial,
    cpf,
    cidade,
    fundaçao,
    estado,
    cep,
    contato,
    profissao
  }
  dadosCadastro(data)
}


 



return(
  
  <div className='ComponenteCadastrarCliente' ><b>
    
    <div id='nomeCadastrar'> Cadastrar Cliente </div></b>


<form>
  
  <div  class="form-row">
    <div class="form-group col-md-6">
      <label for="inputNome" id='descriçaoNome'>Nome Completo</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} class="form-control" id="inputNome" placeholder="Nome completo" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputRazaoSocial" id='descriçaoRazao'>Razão Social</label>
      <input type="text" value={razaoSocial} onChange={e => setRazaoSocial(e.target.value)} class="form-control" id="inputRazaoSocial" placeholder="Razão Social"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputCnpj-Cpf" id='nomeCnpj'>CNPJ / CPF</label>
    <input type="number" value={cpf} onChange={e =>setCpf(e.target.value)} class="form-control" id="inputCnpj-Cpf" placeholder="Digite o CNPJ ou CPF"/>
  </div>
  <div class="form-group">
    <label for="inputDateFundaçao" id='nomeFundaçao'>Fundação</label>
    <input type="date" value={fundaçao} onChange={e => setFundaçao(e.target.value)} class="form-control" id="inputDateFundaçao" placeholder="Apartamento, hotel, casa, etc."/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity" id='nomeCity'>Cidade</label>
      <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} class="form-control" id="inputCity" placeholder='Cidade' />
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado" id='nomeEstado'>Estado</label >
      <select id="inputEstado" value={estado} onChange={e=>setEstado(e.target.value)}  class="form-control" >
        <option selected>Escolha o Estado...</option>
        <option>Acre</option>
        <option>Alagoas</option>
        <option>Amapá</option>
        <option>Amazonas</option>
        <option>Bahia</option>
        <option>Ceara</option>
        <option>Distrito Federal</option>
        <option>Espirito Santo</option>
        <option>Goias</option>
        <option>Maranhão</option>
        <option>Mato-Grosso</option>
        <option>Mato-Grosso do Sul</option>
        <option>Minas Gerais</option>
        <option>Para</option>
        <option>Paraiba</option>
        <option>Parana</option>
        <option>Pernanbuco</option>
        <option>Piaui</option>
        <option>Rio de Janeiro</option>
        <option>Rio Grande do Norte</option>
        <option>Rio Grande do Sul</option>
        <option>Rondônia</option>
        <option>Roraima</option>
        <option>Santa Catarina</option>
        <option>São Paulo</option>
        <option>Sergipe</option>
        <option>Tocantins</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP" id='nomeCep'>CEP</label>
      <input type="number" value={cep} onChange={e =>setCep(e.target.value)} class="form-control" id="inputCEP" placeholder='Cep'/>
    </div>
  </div>
  <div class="form-group col-md-2">
      <label for="inputTelefone" id='nomeContato'>Contato</label>
      <input type="tel" value={contato} onChange={e =>setContato(e.target.value)} class="form-control" id="inputTelefone" placeholder='Telefone / Celular'/>

      <div class="form-group col-md-2">
      <label for="inputEmail" id='nomeEmail'>Email</label>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} class="form-control" id="inputEmail" placeholder='Email'/>
    </div>
    </div>
    
    <div class="form-group col-md-2">
      <label for="inputProfissao" id='nomeProfissao'>Profissão</label>
      <input type="text" value={profissao} onChange={e => setProfissao(e.target.value)} class="form-control" id="inputProfissao" placeholder='Atividade Econômica'/>
    </div>
  <button type="submit" onClick={handleSave} id='btn'    class="btn btn-primary">Salvar Cliente</button>
</form>
</div>
)
    

}