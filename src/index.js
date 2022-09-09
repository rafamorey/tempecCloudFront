
console.log('hola')


// url del backend
const api_url = 'https://tempec-cloud-rafamr-git-main-rafamreyes17-gmailcom.vercel.app/enterprise'


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
        body: JSON.stringify({
                "name": "Esteban",
                "userName": "raf",
                "password": "123456j"
        })
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

login()

const signInButton = document.getElementById('signInButton')
signInButton.addEventListener('click', login)
