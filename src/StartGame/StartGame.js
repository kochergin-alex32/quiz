import React from 'react'
import './StartGame.css';
import logo from '../assetc/img/logo.png';
function StartGame({startOn, setStartOn }) {
 function StartHandler(){
   console.log(111);
   setStartOn(true);
 }

  return (
    
     <>
  
    <div className='startArea'>
        <div className='logo'>
        <img src={logo} alt=""/>
        <p>Именем великого магистра PHP и обладателя 17 дана по верстке С.Тимофеева </p>
        </div>
        <div className='text'>
        <h1>Пройди краткий опрос </h1>
        <h4> чтобы понять твой уровень и мoтивацию</h4>
        </div>
    <button className="result" onClick={()=>StartHandler()}> начать опрос</button>
    </div>
    </>
   
  )
}

export default StartGame