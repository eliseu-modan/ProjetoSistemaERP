import '../componentes/Cabeçalho.css'
import React from 'react'
import { TeladeLogin } from '../pages/TeladeLogin'
import { Route ,HashRouter,Switch} from 'react-router-dom'


export const Cabeçalho = () =>{


return(
<div className='Cabeçalho'>
    <div ><a href="/" id='nome'><b> SISTEMA ERP</b></a></div>
    <div  ><a href="#TeladeLogin" id='login__usuario'>Login</a></div>
     
     <HashRouter>
<Switch>
    <Route path="/TeladeLogin"><TeladeLogin></TeladeLogin></Route>
    </Switch>
      </HashRouter>
</div>
)}