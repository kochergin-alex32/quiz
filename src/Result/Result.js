import React from 'react'
import './Result.css'
function Result({correct, questions,step, setStep}) {
   function reStartHandler(){
    setStep(0);
   }
    return (
    <div className="result">
        <div className="back">

             <a href='/'>&#10006;</a>
        </div>
            <div>

                <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
                <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
                 {/* <a href='/'>
                <button>Попробовать снова</button>
                </a> */}
   
                 <button onClick={()=>reStartHandler()}>Попробовать снова</button>
            </div>
        
    </div>
    );
    }

export default Result