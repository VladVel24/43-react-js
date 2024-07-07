

import MyButton from '../../components/MyButton/MyButton';
import './lesson02.css';


export default function Lesson02() {

    const handleClick = () => {
        console.log('click');
    }
    const handleSubmit = () => {
        console.log('submit');
    }
    const handleKemel = () => {
        console.log('🐪');
    }

return (

     <div className='lesson-container'>
            <h4>lesson 02</h4>
            <p>React Props: способ обмена данными из Компонента в Компонент</p>
            <h5>Мы хотим использовать наш компонент кнопку с разными данными</h5>

        <div>
            <MyButton onClick = {handleClick} name = {'click'}/>
            <MyButton onClick = {handleSubmit} name = {'submit'}/>
            <MyButton onClick = {handleKemel} name = {'🗿'}/>
        </div>

     </div>

    ); 
}