import './myInput.css'

export default function MyInput({label, type, name, placeholder}) {
    return (
        <>

        <label className='label'>{label}</label>
        <input type={type} name={name} placeholder={placeholder}/>

        </>

    );
}