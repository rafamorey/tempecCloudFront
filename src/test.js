
const section = document.getElementById('test')
const input = document.getElementById('oye')




input.onclick = () =>{ imprimeText()
}

function imprimeText(){
    const p = document.createElement("p")
    const ptext = document.createTextNode('hola tu')
    p.appendChild(ptext)
    section.appendChild(p)
}



