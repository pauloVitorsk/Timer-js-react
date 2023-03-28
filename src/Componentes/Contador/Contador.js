import {useState} from "react"
import "./contador.css"
function Contador(){

    let [Conta,setConta]=useState(0);

    let cont=Conta;

    function Increment(){
        setTimeout(()=>{
            setConta(Conta+1)
        },100)
    }
    function Decrement(){
        setTimeout(()=>{
            if(Conta != 0){
                setConta(Conta-1)
            }
        },100)
    }

 
    return (
        <div className="Conteiner-Cont">
                <h2>CONTADOR</h2>
            <div className="Btn-conteiner">
                <button className="Btn-cont" onClick={Decrement}>-</button>
            <span>{cont}</span>
            <button className="Btn-cont" onClick={Increment}>+</button>
            </div>
            

        </div>

    )
}
export default Contador;