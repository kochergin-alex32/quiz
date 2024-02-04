import React from 'react'

function Game({step, question, onClickVariant, questions }) {
  
    const percents = Number(step)/Number(questions.length)*100
       
        console.log(percents);
    
    // const percent = step/questions.
    return (
    <>
    {/* не работает чиним */}
    <div className="progress">
    <div style={
        // стандартная форма записи вывода переменной
        { width: `${percents }%` }
        // второй вариант запими вывода переменной, тоже работает
        // { width: percents +'%' }
    } 
        className="progress__inner"></div>
    </div>
    <h1>{question.title}</h1>
    <ul>
    {question.variants.map((text, index)=>(
        <li key={text} onClick={()=> onClickVariant(index)}>{text}</li>
    ))}
    </ul>
    </>
    );
    }
export default Game