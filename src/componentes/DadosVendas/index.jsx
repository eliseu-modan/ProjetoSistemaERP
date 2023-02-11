import React from "react";
import { TableRow } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import $ from 'jquery';

export  const DadosVendas = ({tipoProduto ,modelo,codigoEan,Fabricante,Preço,TipoVenda,Nome,RazaoSocial,CNPJ,list,
id})=>{
          
   
   function RemoverLista() {
        
      $("#table").remove();
  list= list.shift()
  }
   
       
  return(
    
    <TableRow id="table" className='index'
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >        
          <TableCell component="th"   >
          <button onClick={RemoverLista} className='excluir' >Remover</button>
          </TableCell >
    <TableCell align="right">{id}</TableCell>
          <TableCell align="right" >{tipoProduto}</TableCell>
          <TableCell align="right" >{modelo}</TableCell>
  
          <TableCell align="right" >{codigoEan}</TableCell>
          <TableCell align="right" >{Fabricante}</TableCell>
  
         <TableCell align="right" >{Preço}</TableCell>
         <TableCell align="right">{TipoVenda}</TableCell>
         <TableCell align="right">{Nome}</TableCell>
         <TableCell align="right">{RazaoSocial}</TableCell>
         <TableCell align="right">{CNPJ}</TableCell>

        </TableRow>
      )
      
  
  
  
   }