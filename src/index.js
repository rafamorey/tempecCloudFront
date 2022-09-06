<<<<<<< HEAD

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
        return data
    }
}

<<<<<<< HEAD
login()

const signInButton = document.getElementById('signInButton')
signInButton.addEventListener('click', login)
=======






>>>>>>> fb8d0ad9ffddaccc17372cee270eee60cf5c89d3
