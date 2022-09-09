
console.log('hola')


// url del backend
const api_url = 'https://tempec.vercel.app/enterprise'


// nodes
const signInButton = document.getElementById('signInButton')
const dataUser = document.getElementById('loginUser')
const dataPassword = document.getElementById('loginPassword')

// buttons
signInButton.addEventListener('click', () => {
    login()
})


async function login() {

    console.log('access')
    // const res = await fetch(api_url)
    const res = await fetch(api_url, {
        // especificamos el metodo de la peticion
        method: 'POST',
        // se envia el header para indicar que es un json
        headers: {
            'Content-Type': 'application/json'
        },
        // se envia el body convertido en json por que no sabemos con que lenguaje fue escrito el backend
        body: JSON.stringify(
            {
                "name": dataUser.value,
                "password": dataPassword.value
            }
        )
    })
    const data = await res.json()
    console.log(data)
    
    if(res.status !== 201){
        console.log('error de conexion')
    }else {
        // console.log(data)
        return data
    }
}


