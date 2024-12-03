import {useState} from "react";

function Forms(){
const [nome, setNome]= useState('')
const [email, setEmail]= useState('')

const enviarAlert = (e) => {
    console.log('Dados enviados')
    console.log('Nome:', nome)
    console.log('Email:', email)
    alert(`Formulário enviado com sucesso ${nome} ${email}`)
}
return(
    <div>
        <form onSubmit={enviarAlert}>
            <label>
                Nome: 

                <input type= "text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </label>
            <label>
                Email: 
                <input type= "email"
                value= {email}
                onRateChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Enviar</button>

        </form>
    </div>
);
}

export default Forms;