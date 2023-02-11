
import { TableRow} from '@mui/material';
import TableCell from '@mui/material/TableCell';
import $ from 'jquery';



 export  const DadosProdutos = ({nomeProduto ,modeloProduto,eanProduto,validadeProduto,preçoProduto,
  tipoVenda,pesoProduto,fabricanteProduto , contador , listProduto})=>{
    
    function RemoverLista() {
      
    $("#table").remove();
      listProduto = listProduto.shift()
}
 
     
return(
  
  <TableRow id="table" className='index'
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >        
        <TableCell component="th"   >
        <button onClick={RemoverLista} className='excluir' >Remover</button>
        </TableCell >
        <TableCell align="right" >{contador}</TableCell>
        <TableCell align="right" >{nomeProduto}</TableCell>

        <TableCell align="right" >{modeloProduto}</TableCell>
        <TableCell align="right" >{eanProduto}</TableCell>

       <TableCell align="right" >{validadeProduto}</TableCell>
       <TableCell align="right">{preçoProduto}</TableCell>
       <TableCell align="right">{tipoVenda}</TableCell>
       <TableCell align="right">{pesoProduto}</TableCell>
       <TableCell align="right">{fabricanteProduto}</TableCell>
      </TableRow>
    )
    



 }
