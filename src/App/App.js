import React from 'react';
import Result from '../Result/Result';
import Game from '../Game/Game';
import StartGame from '../StartGame/StartGame';
import './App.css';
// import questions1 from '../assetc/questions1';


const questions = [
{
title: 'Хочешь научиться кодить... ?',
variants: ['нет', 'да', 'незнаю'],
correct: 1,
},
{
title: 'Хорошо подумал... ?',
variants: ['да', 'нет', 'незнаю'],
correct: 0,
},
{
title: 'Что-то знаешь web-разработке... ?',
variants: ['что-то знаю', 'ни чего не знаю', 'научите по братски'],
correct: 2,
},
{
title: 'React - это ... ?',
variants: ['библиотека', 'фреймворк', 'приложение'],
correct: 0,
},
{
title: 'Компонент - это ... ',
variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
correct: 1,
},
{
title: 'Что такое JSX?',
variants: [
'Это простой HTML',
'Это функция',
'Это тот же HTML, но с возможностью выполнять JS-код',
],
correct: 2,
},
{
title: 'Что такое typescript',
variants: [
'Это  разновидность javascript ',
'Это итерфейс позволяющий сохранять данные, и использовать между компонентами',
'Это строготипизированый язык, позволяющий выявлять ошибки на этапе разработки',
],
correct: 2,
},
{
title: 'Для чего нужен react context',
variants: [
'Для передачи данных через дерево без необходимости использовать пропсы ',
'Для привязки события к элементу в HTML',
'Для подключения CSS стилей к компонентам react',
 ],
correct: 0,
},
{
title: 'Что такое useMemo',
variants: [
'Это хук позволяющий добавлять переменную состояния в компонент',
'Это хук позволяющий управлять различными действиями в компоненте',
'Это хук, позволяющий кэшировать данные между рендерингами',
],
correct: 2,
},
];




function App() {
    // const questions = [... questions1]
    console.log(questions);
    
    const [startOn, setStartOn]=React.useState(false);
    console.log(startOn);
    // этот стейт хранит в себе шаг, т.е. на каком из вопросов мы находимся
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    // const questions = questions
    const question = questions[step];
    const onClickVariant = (index)=>{
        // console.log(step,index);
        setStep(step +1);
        if(index === question.correct){
            setCorrect(correct + 1);
        }
    }
    // console.log(question);
return (
<div className="App">
    {/* {
    step != questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} questions={questions}/> : <Result correct={correct} questions={questions}/> 
    } */}

    {
         startOn ?(step != questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} questions={questions}/> : <Result correct={correct} questions={questions} step={step} setStep={setStep} />): <StartGame startOn={startOn} setStartOn={setStartOn} />
    }
   

</div>
);
}

export default App;
