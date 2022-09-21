<<<<<<< HEAD

console.log('hola')


// url del backend
=======
<<<<<<< HEAD
>>>>>>> d095c15bc516e03bdc9dee8825e813de985b9a4c

const api_urlId = 'https://tempec.vercel.app/enterprise/id'

const api_url = 'https://tempec.vercel.app/'

const api_urlEnterprise = 'https://tempec.vercel.app/enterprise'

// nodes
const signInButton = document.getElementById('signInButton')
const dataUser = document.getElementById('loginUser')
const dataPassword = document.getElementById('loginPassword')

// buttons
signInButton.addEventListener('click', () => {
    login()
    
})

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
                "password": dataPassword.value
            }
        )
    })
    const data = await res.json()
    console.log(data)
    
    if(res.status !== 200){
        console.log(res.status)
        console.log('error de conexion')
    }else {
        // console.log(data)
<<<<<<< HEAD
=======
=======
console.log('hola')

// url del backend
const api_url = 'https://pokeapi.co/api/v2/pokemon/'

    // seleccionando el id del index.html
    const signInButton = document.getElementById('signInButton')
    const userButton = document.getElementById('user')
        
    signInButton.addEventListener('click', () => {
        console.log('hola2')
        let result = randomPokemon()
        loadRandom(result)
        console.log(result)
    })


const randomPokemon = () => {
        return Math.floor((Math.random() * 3) + 1
        ) 
       }
    
    async function loadRandom(result) {
        

    const res = await fetch(`${api_url}${result}`)
    const data = await res.json()
    console.log('access')
    console.log(userButton.id)
    console.log(userButton.value)
    console.log(data)
    
    if(res.status !== 200){
        console.log('error de conexion')
    }else {
>>>>>>> fb8d0ad9ffddaccc17372cee270eee60cf5c89d3
>>>>>>> d095c15bc516e03bdc9dee8825e813de985b9a4c
        return data
    }
}

<<<<<<< HEAD

=======
<<<<<<< HEAD
login()

const signInButton = document.getElementById('signInButton')
signInButton.addEventListener('click', login)
=======






>>>>>>> fb8d0ad9ffddaccc17372cee270eee60cf5c89d3
>>>>>>> d095c15bc516e03bdc9dee8825e813de985b9a4c
