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
        return data
    }
}







