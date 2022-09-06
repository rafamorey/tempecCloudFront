
console.log('hola')


// url del backend
const api_url = 'https://tempec.vercel.app/'

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
    console.log(user.value)
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
                "name": user.value,
                "userName": "raf",
                "password": password.value
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

// login()


