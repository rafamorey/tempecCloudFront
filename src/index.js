
console.log('hola')


// url del backend
<<<<<<< HEAD
const api_url = 'https://tempec.vercel.app/'
=======
const api_url = 'https://tempec.vercel.app/enterprise'


// nodes
const signInButton = document.getElementById('signInButton')
const dataUser = document.getElementById('loginUser')
const dataPassword = document.getElementById('loginPassword')

// buttons
signInButton.addEventListener('click', () => {
    login()
})
>>>>>>> 7f9ec10fd279cfd398b7d6f6930676d76c2a133e

// nodos

    // nodos logIn
const signInButton = document.getElementById('signInButton')
const loginUser = document.getElementById('user')
const loginPassword = document.getElementById('password')

    // nodos account
const accountEnterprise = document.getElementById('accountEnterprise')
const accountName = document.getElementById('accountName')
const accountUser = document.getElementById('accountUser')
const accountPassword = document.getElementById('accountPassword')
const accountEmail = document.getElementById('accountEmail')
const accountPhone = document.getElementById('accountPhone')
const accountSendButton = document.getElementById('accountSendButton')

// buttons
accountSendButton.addEventListener('click', () => {
    console.log('Sending Data')
    createEnterprise()
})

// signInButton.addEventListener('click', () => {
//     console.log('lo logre')
//     login()
// })

// functions

async function createEnterprise(){
    console.log(accountName.value)
    const res = await fetch(api_url + 'enterprise/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "enterprise": accountEnterprise.value,
            "name": accountName.value,
            "user": accountUser.value,
            "password": accountPassword.value,
            "email": accountEmail.value,
            "phone": accountPhone.value,
        })
    })
}

async function login() {
<<<<<<< HEAD
    console.log(user.value)
=======

>>>>>>> 7f9ec10fd279cfd398b7d6f6930676d76c2a133e
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
<<<<<<< HEAD
        body: JSON.stringify({
                "name": user.value,
                "userName": "raf",
                "password": password.value
        })
=======
        body: JSON.stringify(
            {
                "name": dataUser.value,
                "password": dataPassword.value
            }
        )
>>>>>>> 7f9ec10fd279cfd398b7d6f6930676d76c2a133e
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

<<<<<<< HEAD
// login()

=======
>>>>>>> 7f9ec10fd279cfd398b7d6f6930676d76c2a133e

