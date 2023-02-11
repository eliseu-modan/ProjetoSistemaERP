import React from "react";
import '../pages/ProdutosCadastrados.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DadosProdutos } from "../componentes/DadosProdutos";
export const ProdutosCadastrados = ({ListaProdutos}) =>{

      


         
    return(

<div className="ProdutosCadastrados">
    <div id="nomeProdutos"><b>Produtos Cadastrados</b> </div>
 <TableContainer id='positionTabela' component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
          <TableRow>
          <TableCell align="right"><b>REMOVER</b> </TableCell>

            <TableCell align="right"><b>ID</b></TableCell>

            <TableCell align="right"><b>TIPO PRODUTO</b> </TableCell>
            <TableCell align="right"><b>MODELO</b></TableCell>
            <TableCell align="right"><b>CÓDIGO / EAN</b></TableCell>
             <TableCell align="right"><b>VALIDADE</b></TableCell>
             <TableCell align="right"><b>PREÇO</b></TableCell>
             <TableCell align="right"><b>TIPO VENDA</b></TableCell>
             <TableCell align="right"><b>PESO BRUTO</b></TableCell>
             <TableCell align="right"><b>FABRICANTE</b></TableCell>
          

           </TableRow>
         </TableHead>
         <TableBody>
                
                  {ListaProdutos.map((Produto , index)=>(
                 <DadosProdutos  key={index} listProduto={ListaProdutos}  nomeProduto={Produto.nomeProduto}  modeloProduto={Produto.modeloProduto}   
                 eanProduto={Produto.eanProduto} validadeProduto={Produto.validadeProduto} preçoProduto={Produto.preçoProduto}
                 tipoVenda={Produto.tipoVenda} pesoProduto={Produto.pesoProduto} fabricanteProduto={Produto.fabricanteProduto}
                  contador={Produto.contador} 
                  
                 ></DadosProdutos>
                 
                 
                 ))}


                              </TableBody>


        
      </Table>
    </TableContainer>
  
  
  </div>)
          }