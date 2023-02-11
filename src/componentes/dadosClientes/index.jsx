
import { TableRow } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import $ from 'jquery';

 export  const DadosCliente = ({name,cpf,fundaçao,cidade,estado,cep,contato,email,profissao,Listar,contador,razaoSocial})=>{
 
  function RemoverLista() {
        
    $("#table").remove();
 Listar=Listar.shift()
}
  
     
return(
  <TableRow id="table" className='index'
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
        <TableCell component="th"   >
        <button onClick={RemoverLista} className='excluir' >REMOVER</button>
        </TableCell >
        <TableCell align="right" >{contador}</TableCell>

        <TableCell align="right" >{name}</TableCell>
        <TableCell align="right" >{razaoSocial}</TableCell>

       <TableCell align="right" >{cpf}</TableCell>
       <TableCell align="right">{fundaçao}</TableCell>
       <TableCell align="right">{cidade}</TableCell>
       <TableCell align="right">{estado}</TableCell>
       <TableCell align="right">{cep}</TableCell>
       <TableCell align="right">{contato}</TableCell>
       <TableCell align="right">{email}</TableCell>
       <TableCell align="right">{profissao} </TableCell>

      </TableRow>
    )




 }


