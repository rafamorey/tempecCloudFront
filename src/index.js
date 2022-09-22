

console.log('hola')


// url del backend

// getting info one user
const api_urlId = 'https://tempec.vercel.app/enterprise/id'
// common url
const api_url = 'https://tempec.vercel.app/'
// getting all enterprises
const api_urlEnterprise = 'https://tempec.vercel.app/enterprise'

// nodes
const signInButton = document.getElementById('signInButton')
const dataUser = document.getElementById('loginUser')
const dataPassword = document.getElementById('loginPassword')


// nodos account
const accountEnterprise = document.getElementById('accountEnterprise')
const accountName = document.getElementById('accountName')
const accountUser = document.getElementById('accountUser')
const accountPassword = document.getElementById('accountPassword')
const accountEmail = document.getElementById('accountEmail')
const accountPhone = document.getElementById('accountPhone')
const accountSendButton = document.getElementById('accountSendButton')

// buttons
signInButton.addEventListener('click', () => {
    login()
})

// accountSendButton.addEventListener('click', () => {
//     console.log('Sending Data')
//     createEnterprise()
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
    console.log('access')
    // const res = await fetch(api_url)
    const res = await fetch(api_url, {
        // // especificamos el metodo de la peticion
        method: 'POST',
        // // se envia el header para indicar que es un json
        headers: {
            'Content-Type': 'application/json'
        },
        // se envia el body convertido en json por que no sabemos con que lenguaje fue escrito el backend
        body: JSON.stringify(
            {
                "name": dataUser.value,
                "userName": "raf",
                "password": dataPassword.value
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
    if(res.status !== 200){
        console.log(res.status)
        console.log('error de conexion')
    }else {
        // console.log(data)

        return data
    }




