import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
// import MyFeedback from './components/MyFeedback/MyFeedback';
import Homework04 from './homeworks/Homework04/Homework04';
//import MyForm from './components/MyForm/MyForm';
//import Counter from './components/counter/Counter';
//import Lesson02 from './lessons/lesson_02/Lesson02';
// import Lesson01 from './lessons/lesson_01/Lesson01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App /> 
    {/* <Lesson02 /> */}
    {/* <Lesson01 /> */}
    {/* <MyForm /> */}
    {/* <Counter /> */}
    {/* <MyFeedback /> */}
    <Homework04 />

  </>
);

