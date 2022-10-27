

console.log('account')


// url al backend

// getting all enterprises
const api_UrlEnterprise = 'https://tempec.vercel.app/enterprise'

// nodes
const signInButton = document.getElementById('accountSendButton')


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
    createEnterprise()
})

// functions

async function createEnterprise(){
    console.log("accessing")
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/
    if(accountEnterprise.value && accountPassword.value){
        if(re.exec(accountPassword.value) ){
            const res = await fetch(api_UrlEnterprise , {
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
                const data = await res.json()
                console.log(data)
                
                if(res.status !== 201){
                    console.log('error de conexion')
                }else {
                    // console.log(data)
                    window.location.href = 'https://uctempec.vercel.app/public/index.html'
                    return data

                }
    
        }else{
            console.log("falta algun campo")
            const errorUserInfo = document.getElementById('errorUserInfo')
            errorUserInfo.classList.add('errorUserInfo')
            const pErrorText = document.createTextNode('Contraseña debe incluir al menos 1 minuscula, 1 mayuscula, 1 numero y 1 caracter')
            errorUserInfo.innerHTML = ""
            errorUserInfo.appendChild(pErrorText)
        }
    }else{
        console.log("falta algun campo")
        const errorUserField = document.getElementById('errorUserInfo')
        errorUserField.classList.add('errorUserInfo')
        const pErrorFieldText = document.createTextNode('Los campos de Enterprise y Password son requeridos')
        errorUserField.innerHTML = ""
        errorUserField.appendChild(pErrorFieldText)
    }

}


    
   
