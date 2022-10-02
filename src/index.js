

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
const principalContainer = document.getElementById('principalContainer')


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

// functions

async function createEnterprise(){
    console.log(accountName.value)
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
}

async function login() {
    
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/
    console.log('access')
    if (dataUser.value && dataPassword.value){
        if(re.exec(dataPassword.value) ){
            console.log("si cumple")
            const res = await fetch(api_urlId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "name": dataUser.value,
                        "password": dataPassword.value
            })
        })
                const data = await res.json()
        
                if(res.status !== 200){
                    console.log('error de conexion')
                }else {
                    localStorage.setItem('1',JSON.stringify(data))
                    window.location.href = 'http://127.0.0.1:5501/device.html'
                    return data
                    
                }
        }else{
            console.log("falta algun campo")
            const errorUserInfo = document.getElementById('errorUserInfo')
            errorUserInfo.classList.add('errorUserInfo')
            const pErrorText = document.createTextNode('Usuario o contraseña incorrecta')
            errorUserInfo.innerHTML = ""
            errorUserInfo.appendChild(pErrorText)
        }
    }else{
        console.log("falta algun campo")
        const errorUserField = document.getElementById('errorUserInfo')
        errorUserField.classList.add('errorUserInfo')
        const pErrorFieldText = document.createTextNode('Los campos de usuario y password son requeridos')
        errorUserField.innerHTML = ""
        errorUserField.appendChild(pErrorFieldText)
    }


    
    }

    

