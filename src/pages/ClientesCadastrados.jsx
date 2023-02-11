import '../pages/ClientesCadastrados.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DadosCliente } from '../componentes/dadosClientes';

 export  const Clientes =({List})=> {
         

        
  return(


  <div className='ClientesCadastrados'> 
 <div className='nomeClientesCadstrados'><b>Clientes Cadastrados</b> </div>
  
     <TableContainer id='positionTabela' component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
          <TableRow>
            <TableCell><b>Remover</b> </TableCell>
            <TableCell align="right"><b>ID</b> </TableCell>
            <TableCell align="right"><b>NOME</b></TableCell>
            <TableCell align="right"><b>Razão Social</b></TableCell>
            <TableCell align="right"><b>CNPJ</b></TableCell>
             <TableCell align="right"><b>FUNDAÇÃO</b></TableCell>
             <TableCell align="right"><b>CIDADE</b></TableCell>
             <TableCell align="right"><b>ESTADO</b></TableCell>
             <TableCell align="right"><b>CEP</b></TableCell>
             <TableCell align="right"><b>CONTATO</b></TableCell>
             <TableCell align="right"><b>E-MAIL</b></TableCell>
            <TableCell align="right"><b>PROFISSÃO</b></TableCell>



            

           </TableRow>
         </TableHead>
         <TableBody>
         



          {List.map((salvar, index)=>(
                    <DadosCliente Listar={List} key={index} name={salvar.name} cpf={salvar.cpf}
                    fundaçao={salvar.fundaçao} cidade={salvar.cidade} estado={salvar.estado}
                    cep={salvar.cep} contato={salvar.contato} email={salvar.email}  profissao={salvar.profissao}
                     razaoSocial={salvar.razaoSocial} contador={salvar.contador}      >        
                  </DadosCliente>
                    ))}
                    

                  


         
                              </TableBody>


        
      </Table>
    </TableContainer>
  
  
  </div>)

  

  

          }