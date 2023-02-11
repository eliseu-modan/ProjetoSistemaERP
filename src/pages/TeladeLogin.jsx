import React from "react";
import '../pages/TeladeLogin.css'

export const TeladeLogin = ()=>{



    return(
        <div id="TeladeLogin">
            <form className="form">
                
                    <label id="nomeLogin">Nome</label>
                    <input type="text"  id="inputnome" placeholder="Nome Completo"/>
                    <label id="senhaLogin">Senha</label>
                    <input type="text"  id="inputsenha" placeholder="Senha"/>
           <div id="button">
         <div > <a  href="" id="cancelar">Cancelar </a></div>
         <div ><a href="" id="login">Fazer Login </a></div>
         <div ><a href="" id="cadastrar">CADASTRA-SE</a></div></div>

    </form>
 </div>
        
    )
    
}