import './lesson01.css'

export default function Lesson01() {
    //описание всего приложения в глобальном объекте document
    //это и есть DOM (Document Object Model)
    //console.dir(document); 

    const heading = "Урок 01"
    const classContainer = 'lesson-container'

//==============================================================
    function formatName(user) {
        return  `Имя: ${user.name}, Фамилия: ${user.lastName} 🥋`
    }

    const user = {
        name: 'John',
        lastName: 'Doe'
    };

// отоброжнение завимит от значения переменной
    const isLogin = true

    return (
        <div className = {classContainer}>
            <h4>{heading}</h4>
            <h5>Особенности компонента:</h5>
            <ul>
                <li>Называется с большой буквы</li>
                <li>Имеет расширение JSX</li>
                <li>Компонент эта функция</li>
                <li>Возвращает верстку</li>
                <li>Исползует import/export</li>
                <li>Не отобразится на странице , если не импортирован</li>
            </ul> 
            <h5>Пример работы с динамическими данными:</h5>
            <span>{formatName(user)}</span>
            <h5>Пример условного отображения с тернарным оператором</h5>
            <span>Пользователь {isLogin ? 'в данный момент' : 'не'} авторизован</span>
        </div>
    );
}

