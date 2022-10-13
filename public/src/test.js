

const sendB = document.getElementById('send')
const input = document.getElementById('ID')
const body = document.getElementById('body')

sendB.onclick = () =>{ imprimeText()
}


function imprimeText(){
    console.log(input.value)
    localStorage.setItem('id', input.value)
    alert(localStorage.getItem('id'))
    document.body.innerHTML =  `
        <input  placeholder= "hola">
    `
}









// localStorage.setItem('id', 2)

// alert(localStorage.getItem('id'))


// localStorage.test = 5

// alert(localStorage.test)

// localStorage.user = JSON.stringify({name:"rafa"})

// let user = JSON.parse(localStorage.user)
// alert(user.name)

// input.onclick = () =>{ imprimeText()
// }




