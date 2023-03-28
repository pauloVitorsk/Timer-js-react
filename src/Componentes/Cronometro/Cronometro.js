import React from "react";
import "./Cronometro.css"

function Cronometro(){

    let sec=0;
    let min =0;
    let hour=0;

    let interval

function twoNum(num) {
    if(num < 10){
        return "0"+num
    }else{
        return num
    }
}

    function Start(){
      interval =setInterval(cont,1000)
    }

    function cont(){
        sec++
        if(sec==60){
            sec=0
            min++
        }
        if(min==60){
            min=0
            hour++
        }
        document.getElementById("cont").innerText= twoNum(hour)+":"+twoNum(min)+":"+twoNum(sec)
    }
    function Pause(){
        clearInterval(interval)
    }
    function Stop(){
        sec=0;
        min=0;
        hour=0;
        clearInterval(interval)
        document.getElementById("cont").innerText= ("00"+":"+"00"+":"+"00")
    }

    return(
        <div className="Conteiner">
            <h1>CRONOMETRO</h1>
            <h2 id="cont" className="number">00 :00 :00</h2>
            <div className="Btn-conteiner">
                <button className="Start" onClick={Start}>START</button>
            <button className="Pause" onClick={Pause}>PAUSE</button>
            <button className="Stop" onClick={Stop}>STOP</button>
            </div>
            

        </div>
    )
}
export default Cronometro;