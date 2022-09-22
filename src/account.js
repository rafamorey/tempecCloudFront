

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
            return data
        }
}


    
   
