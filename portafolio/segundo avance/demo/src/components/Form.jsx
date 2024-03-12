import { React, useState } from "react";

export default function Form(){
    const [firstName, selfirstName] = useState('');
    const [lastName, selfLastName] = useState('');

    const fullname = firstName + ' ' + lastName

    function handleFirstNameChange(e){
        selfirstName(e.target.value);
    }

    function handleLastNameChange(e){
        selfLastName(e.target.value);
    }

    return(
        <>
            <h2>hola</h2>
            <form action="" class="form">
                <label class="form-control" htmlFor="firstName">First Name: </label>
                <input class="form-control" type="text" value={firstName} onChange={handleFirstNameChange}/>

                <label class="form-control" htmlFor="lastName">Last Name: </label>
                <input class="form-control" type="text" value={lastName} onChange={handleLastNameChange}/>
                <button class="btn btn-outline-success form-control">SignUp</button>
            </form>
            
            <p>Bienvenido: {fullname} </p>
        </>
    );
}
