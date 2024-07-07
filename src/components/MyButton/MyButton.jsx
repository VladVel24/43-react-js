
import './myButton.css'

export default function MyButton(props) {
    //console.log(props);
    return (
        <button onClick = {props.onClick} className="myButton">{props.name}</button>
    )
}