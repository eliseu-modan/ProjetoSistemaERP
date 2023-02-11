import React from 'react';
import ApexChart from 'react-apexcharts'
import '../pages/PaineldeControle.css'
 export const Prop = ({contar , qtdProduto ,qtdVendas})=>{
 

let qtdadeVendas =qtdVendas.map((dado,index)=>
  <div key={index}> {dado.contador}</div>
)

  const quantidadeVenda = qtdadeVendas.push()

let qtd = qtdProduto.map((produto ,index)=>
<div key={index}> {produto.contador}</div>
)
const quantidadeProduto = qtd.push()




let contador = contar.map(
    (tipos , index)=>
  
    <div key={index  }> {tipos.contador}
    
  </div>

   )
 const qtdCliente = contador.push()
 



   const options= {
    xaxis:{
      type:'datetime'
    },
    yaxis:{
      tooltip:{
        enabled:true
      }
    }
   }
   const series =[{
    data:[
      {
        x: new Date(1),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
     
    
 
     
     
    
    ]
   }]
  
          
    
return (
  
  
<div className='ComponentePainel'>
  
  <div id='grafico'><span id='nomeQuantidade'>Quantidade de Venda</span>
  <ApexChart 
  options={options}
  series={series}
  type={"candlestick"}
  width={640}
  height={350}/>
  </div>
  <div id='controledasVendas'>Vendas Cadastradas <p id='valueVendas'> {quantidadeVenda}</p></div>
  <div id='controleProdCadastrados'> Estoque de Produtos <p id='ValueProdutos'> {quantidadeProduto}</p></div>
  <div id='controleClientes'>CLientes Cadastrados <p id='ValueCliente' >{qtdCliente}</p></div>


                        
  

    
  
</div>
)
}
