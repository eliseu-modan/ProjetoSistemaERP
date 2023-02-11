import '../pages/VendasEfetuadas.css'
import React from "react";
import '../pages/ProdutosCadastrados.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DadosVendas } from '../componentes/DadosVendas';
export const VendasEfetuadas = ({dadosVenda}) => {




    return(
<div className="VendasEfetuadas"><div id="nomeTitulo"><b>Vendas Cadastradas</b></div>

<div>
<TableContainer id='positionTabela' component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
   <TableRow>
   <TableCell align="right"><b>REMOVER</b> </TableCell>

     <TableCell align="right"><b>ID</b></TableCell>

     <TableCell align="right"><b>TIPO PRODUTO</b> </TableCell>
     <TableCell align="right"><b>MODELO</b></TableCell>
     <TableCell align="right"><b>CÓDIGO / EAN</b></TableCell>
      <TableCell align="right"><b>FABRICANTE</b></TableCell>
      <TableCell align="right"><b>PREÇO</b></TableCell>
      <TableCell align="right"><b>TIPO VENDA</b></TableCell>
      <TableCell align="right"><b>NOME</b></TableCell>
      <TableCell align="right"><b>E-MAIL</b></TableCell>
      <TableCell align="right"><b>CNPJ</b></TableCell>

   

    </TableRow>
  </TableHead>
  <TableBody>
           
           {dadosVenda.map((dado,index)=>(
    <DadosVendas key={index} list={dadosVenda} id={dado.contador}  tipoProduto={dado.inputtipoProduto} 
            modelo={dado.inputmodelo}   codigoEan={dado.inputean} Fabricante={dado.inputfabricante}
            Preço={dado.inputpreço} TipoVenda={dado.inputvenda} Nome={dado.inputnome} 
            RazaoSocial={dado.inputrSocial} CNPJ={dado.inputcnpj}
            
            
            ></DadosVendas>
           ))}
          
        


                       </TableBody>


 
</Table>
</TableContainer>

</div>

</div>


    )
}