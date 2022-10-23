
// Url backend
api_urlDevice = 'https://tempec.vercel.app/device/'

api_urlUser = 'https://tempec.vercel.app/user/'

api_urlEnterprise = 'https://tempec.vercel.app/enterprise/'

API_URLDEVICEvalues = 'https://tempec.vercel.app/device/deviceValues'

// Nodes
const addDevice = document.getElementById('addDeviceButton')

const deleteDevice = document.getElementById('deleteDeviceButton')

const statusDevice = document.getElementById('statusDeviceButton')

const sectionDevicesContainer = document.getElementById('devsCont')


// localStorage
const userData = localStorage.getItem('1')
const userDataParser = JSON.parse(userData)
// console.log(userDataParser)
// console.log('ESTE es data parser')

// Count id devices in screen
var counterDevicesShown = 0 

// const sectionDevicesContainer = document.getElementById('devsCont')

// Listener Buttons

const btnSignOut = document.getElementById('signOut')
btnSignOut.addEventListener('click', ()=>{
  localStorage.removeItem('deviceData')
  localStorage.removeItem('deviceStatus')
  localStorage.removeItem('deviceValues')
  localStorage.removeItem('1')
  localStorage.removeItem('dataDates')
  // window.location.href = 'http://127.0.0.1:5501/public/index.html'
  window.location.href = 'https://uctempec.vercel.app/index.html'

})

addDevice.addEventListener('click', () =>{
  deployFormForID()
})


function  deployFormForID(){
  console.log("adding device")
  const divFormNewDevice = document.getElementById('divFormNewDevice')
  divFormNewDevice.innerHTML = ""
  divFormNewDevice.classList.add('formCreateNewDevice')
  const formFormNewDevice = document.createElement('div')
  formFormNewDevice.setAttribute("action", "./dashboard.js")
  formFormNewDevice.classList.add('formCreateNewDeviceContainer')
  
  const pFormNewDevice = document.createElement('p')
  
  const pTextNodeFormNewDevice = document.createTextNode('Please introduce the name and Id for your Tempec Device')
  pFormNewDevice.append(pTextNodeFormNewDevice)
  formFormNewDevice.appendChild(pFormNewDevice)
  
  const divValuesContainer = document.createElement('div')
  divValuesContainer.classList.add('divValuesContainer')
  const inputNameFormNewDevice = document.createElement('input')
  inputNameFormNewDevice.setAttribute('type', "text")
  inputNameFormNewDevice.setAttribute('placeholder', "Name device")
  inputNameFormNewDevice.setAttribute('id', "nameDevice")
  const labelNameFormNewDevice = document.createElement('label')
  labelNameFormNewDevice.setAttribute('for', 'nameDevice')
  const inputIdFormNewDevice = document.createElement('input')
  inputIdFormNewDevice.setAttribute('type', "text")
  inputIdFormNewDevice.setAttribute('placeholder', "Id device")

  divValuesContainer.appendChild(inputNameFormNewDevice)
  divValuesContainer.appendChild(labelNameFormNewDevice)
  divValuesContainer.appendChild(inputIdFormNewDevice)
  formFormNewDevice.appendChild(divValuesContainer)
  
  const divInputsContainer = document.createElement('div')
  divInputsContainer.classList.add('divInputsContainer')
  const inputSendFormNewDevice = document.createElement('input')
  inputSendFormNewDevice.setAttribute("type", "submit")
  inputSendFormNewDevice.setAttribute("value", "Send")
  const inputCancelFormNewDevice = document.createElement('input')
  inputCancelFormNewDevice.setAttribute("type", "submit")
  inputCancelFormNewDevice.setAttribute("value", "Cancel")
  divInputsContainer.appendChild(inputSendFormNewDevice)
  divInputsContainer.appendChild(inputCancelFormNewDevice)
  formFormNewDevice.appendChild(divInputsContainer)

  
  divFormNewDevice.appendChild(formFormNewDevice)
  
  

  inputSendFormNewDevice.addEventListener('click', () => {
    const inputName = document.getElementById('nameDevice')
    const data = {
      name: inputName.value,
      id: inputIdFormNewDevice.value
    }
    createDeviceById(data)
    divFormNewDevice.innerHTML = ""
  })

  inputCancelFormNewDevice.addEventListener('click', () =>{
    divFormNewDevice.innerHTML = "";
  })
}

// funcion para enviar una peticion al server para saber cuantos devices hay para este usuario y entonces hacer el render de todos.
async function bringAllDevices(){
  console.log("bringAllDevices")
  

  // const userData = localStorage.getItem('1')
  // const userDataParser = JSON.parse(userData)
  
  // console.log(devicesUser)
  if(userDataParser == null){
    console.log("no devices")
  }else{
    sectionDevicesContainer.innerHTML=""
    const devicesUser = userDataParser.body.devices
    console.log(`devicesUser${devicesUser}`)
    devicesUser.forEach(device => {
      createDeviceContainer(device)
      console.log('device')
      console.log(device)
    })
  }

}

async function createDeviceById(device){
  // const res = await fetch(`${api_urlDevice}id`)
  console.log("createDeviceById")
  console.log(device)
  
  const res = await fetch(`${api_urlEnterprise}deviceid`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "enterprise": userDataParser.body.enterprise,
      "devices": [{
        "id": device.id,
        "name": device.name,
        "setPoint": 16,
        "tempInt":0,
        "tempExt":0,
        "histH":1,
        "histL":1,
        "tempMax":0,
        "tempMin":0,
        "dateMax":0,
        "dateMin":0,
        "grados": "C",
        "alarmaH": 1.2,
        "alarmaL": 1.2,
        "online": true,
        "last_setpoint": 16,
        "last_hisH": 1,
        "last_hisL": 1,
        "last_alarmaH": 1.2,
        "last_alarmaL": 1.2,
        "last_name": "xrc1",
        "last_grados": "C"
      }]
    })
  })
  const data = await res.json() 
  if(res.status !== 201){
    console.log('No se encontro device')
  } else{
    // console.log('Device ok')

    userDataParser.body.devices.push(data.body.devices[0])
    console.log(userDataParser)
    localStorage.setItem('1', JSON.stringify(userDataParser))
    console.log(localStorage)
    // bringAllDevices()
    //  console.log(userDataParser)
     console.log('localstorage update')
    //  createSingleDevice(device)
  }
}

async function createSingleDevice(device){
  const resDevice = await fetch(`${api_urlDevice}`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "enterprise": userDataParser.body.enterprise,
        "id": device.id,
        "name": device.name
    })
  })
}

async function createDeviceContainer(data){
  counterDevicesShown++
  // console.log(data)
  console.log("creating device")
  console.log(data)
  // const sectionDevicesContainer = document.getElementById('devsCont')
  sectionDevicesContainer.innerHtml= "";
  // deviceContainer
  const divDeviceContainer = document.createElement("div")
  divDeviceContainer.classList.add('deviceContainer')
  divDeviceContainer.setAttribute('id', `divDeviceContainer#${data.id}`)
  // divDeviceContainer.setAttribute('id', deviceId)
  // div device name
  const divDeviceName =  document.createElement('div')
  divDeviceName.classList.add('deviceName')
  const divTextNode = document.createTextNode(data.name)
  divDeviceName.appendChild(divTextNode)  
divDeviceContainer.appendChild(divDeviceName)

  const divDeviceContainerDescription = document.createElement('div')
  divDeviceContainerDescription.classList.add('deviceContainer-description')
  divDeviceContainer.appendChild(divDeviceName)
  // div ideal & actual
  const divDeviceIdeal = document.createElement('div')
  divDeviceIdeal.classList.add('ideal')
  const divIdeal = document.createElement('div')
  const divIdealTextNode = document.createTextNode('Ideal')
  divIdeal.appendChild(divIdealTextNode)
  const divActual = document.createElement('div')
  const divActualTextNode = document.createTextNode('Actual')
  divActual.appendChild(divActualTextNode)
  divDeviceIdeal.appendChild( divIdeal)
  divDeviceIdeal.appendChild( divActual)
// div temp
  const divDeviceTemp = document.createElement('div')
  divDeviceTemp.classList.add('temp')
  const divTemp = document.createElement('div')
  const divTempTextNode = document.createTextNode("Temp")
  divTemp.appendChild(divTempTextNode)
  const divTempIdeal = document.createElement('div')
  const divTempIdealTextNode = document.createTextNode(data.setPoint)
  divTempIdeal.appendChild(divTempIdealTextNode)
  divTempIdeal.setAttribute("id", data.id)
  const divTempActual = document.createElement('div')
  const divTempActualTextNode = document.createTextNode(data.tempInt)
  divTempActual.appendChild(divTempActualTextNode)
  divDeviceTemp.appendChild(divTemp)
  divDeviceTemp.appendChild(divTempIdeal)
  divDeviceTemp.appendChild(divTempActual)
  // div min
  const divDeviceMin = document.createElement('div')
  divDeviceMin.classList.add('min')
  const divMin = document.createElement('div')
  const divDeviceMinTextNode = document.createTextNode('Min')
  divMin.appendChild(divDeviceMinTextNode)
  const divMinIdeal = document.createElement('div')
  const divMinIdealTextNode = document.createTextNode(data.setPoint-data.alarmaL)
  divMinIdeal.appendChild(divMinIdealTextNode)
  const divMinActual = document.createElement('div')
  const divMinActualTextNode = document.createTextNode(data.tempMin)
  divMinActual.appendChild(divMinActualTextNode)

  divDeviceMin.appendChild(divMin)
  divDeviceMin.appendChild(divMinIdeal)
  divDeviceMin.appendChild(divMinActual)
  // div button
  // div max
  const divDeviceMax = document.createElement('div')
  divDeviceMax.classList.add('max')
  const divMax = document.createElement('div')
  const divDeviceMaxTextNode = document.createTextNode('Max')
  divMax.appendChild(divDeviceMaxTextNode)
  const divMaxIdeal = document.createElement('div')
  const divDeviceMaxIdealTextNode = document.createTextNode(data.alarmaH+data.setPoint)
  divMaxIdeal.appendChild(divDeviceMaxIdealTextNode)
  const divMaxActual = document.createElement('div')
  const divDeviceMaxActualTextNode = document.createTextNode(data.tempMax)
  divMaxActual.appendChild(divDeviceMaxActualTextNode)
  divDeviceMax.appendChild(divMax)
  divDeviceMax.appendChild(divMaxIdeal)
  divDeviceMax.appendChild(divMaxActual)
  // div button
  const divDeviceButtons = document.createElement('div')
  divDeviceButtons.classList.add('deviceButtons')
  // const imgButton = document.createElement('input')
  const imgButton = document.createElement('img')
  imgButton.setAttribute("id", data.id)
  // imgButton.setAttribute("value", "Delete")
  // imgButton.setAttribute("type", "Button")
  imgButton.classList.add('deviceimgButton')
  imgButton.setAttribute("src", "../icons/bote-de-basura.png") 
  const inputStatus = document.createElement('input')
  inputStatus.setAttribute("id", "statusDeviceButton")
  inputStatus.setAttribute("value", "Status")
  inputStatus.setAttribute("type", "Button")
  inputStatus.classList.add('deviceInputStatus') 
  divDeviceButtons.appendChild(imgButton)
  divDeviceButtons.appendChild(inputStatus)
  // element to container description
  divDeviceContainerDescription.appendChild(divDeviceIdeal)
  divDeviceContainerDescription.appendChild(divDeviceTemp)
  divDeviceContainerDescription.appendChild(divDeviceMin)
  divDeviceContainerDescription.appendChild(divDeviceMax)
  divDeviceContainerDescription.appendChild(divDeviceButtons)
  // elements to divDeviceContainer
  divDeviceContainer.appendChild( divDeviceContainerDescription)
// elements to decvicesContainer
  sectionDevicesContainer.appendChild( divDeviceContainer)
// nodes buttons
  
  // le asigno id a boton de borrar para identificar que boton es el que se oprime
  // const buttonDelete = document.getElementById(data.id)
  // click on buttons, le paso el contenedor del device a eliminar, y el segundo parametro es el id del dispositivo en la base de datos
  imgButton.addEventListener('click', () => {
    console.log('deleteButton')
    deleteMessage(divDeviceContainer, imgButton ,userDataParser)
  })

  inputStatus.addEventListener('click', () => {
    // console.log("bringing status")
    getStatusDevice(data)
  })

}

function deleteMessage(divDeviceContainer, imgButton ,userDataParser){
  const containerMessage = document.getElementById('modal')

  containerMessage.classList.add('containerMessage')
  const containerMessageButton = document.createElement('div')
  containerMessageButton.classList.add('containerMessageButton')
  containerMessage.appendChild(containerMessageButton)

  const messageP = document.createElement('p')
  messageP.classList.add('messageP')
  messageP.classList.add('messageP')
  const messagePTextNode = document.createTextNode('You are about to delete in a permanent way this device, are you sure you wanna keep going whit this task?')
  messageP.appendChild(messagePTextNode)
  containerMessageButton.appendChild(messageP)

  const buttonsContainer = document.createElement('div')
  buttonsContainer.classList.add('buttonsContainer')
  const aggreButton = document.createElement('input')
  aggreButton.setAttribute('value', "agree")
  aggreButton.setAttribute('type','submit')
  aggreButton.classList.add('aggreButton')
  buttonsContainer.appendChild(aggreButton)
  const cancelButton = document.createElement('input')
  cancelButton.setAttribute('value', "cancel")
  cancelButton.setAttribute('type','submit')
  cancelButton.classList.add('cancelButton')
  buttonsContainer.appendChild(cancelButton)
  
  containerMessageButton.appendChild(buttonsContainer)

  aggreButton.addEventListener('click', () =>{
    deleteDeviceById(divDeviceContainer, imgButton ,userDataParser)
    containerMessage.classList.remove('containerMessage')
    containerMessage.innerHTML = ""
  })

  cancelButton.addEventListener('click', () =>{
    containerMessage.classList.remove('containerMessage')
    // containerMessage.remove()    
    containerMessage.innerHTML = ""

  })
}

async function deleteDeviceById(idDeviceContainer, idDevice, deviceUser){
  console.log(deviceUser.body.name)
  console.log(idDevice.id)
const res =  await fetch(`${api_urlEnterprise}deviceid`,{
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": deviceUser.body.name,
      "id": idDevice.id
  })
})
  const data = await res.json();
  if(res.status !== 201){
    // spanError.innerHtml = "Hubo un error: " + res.status + data.Message
  } else {
    // console.log('deleting device')
    // console.log(data)
// selecciono el elemento
    const deviceToDelete = document.getElementById(idDeviceContainer.id)

    updateDeletedLocalstorage(idDevice)
    // remuevo el contenedor del device
    sectionDevicesContainer.removeChild(deviceToDelete)
    deleteSingleDevice(idDevice)
  }
}

async function deleteSingleDevice(idDevice){
  const res =  await fetch(`${api_urlDevice}id`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "enterprise": userDataParser.body.enterprise,
        "id": idDevice.id
    })
  })
  console.log(idDevice.id,userDataParser.body.enterprise)
}

function updateDeletedLocalstorage(deviceToDeleteId){
  // let existing = localStorage.getItem('1')
  // existing = existing ? JSON.parse(existing): {}
// console.log(`este es el id${deviceToDeleteId.id}`)
// console.log(`este es el objeto de objetos${userDataParser}`)

const findDevice = userDataParser.body.devices.find(device =>{
  if(device.id === deviceToDeleteId.id){
    return device
  }
 })
//  console.log(deleteDevice)
 const indexOfDevice = userDataParser.body.devices.indexOf(findDevice)
//  console.log(deviceToDelete)
 userDataParser.body.devices.splice(indexOfDevice,1)
//  console.log(userDataParser)
 localStorage.setItem('1', JSON.stringify(userDataParser))
//  console.log(userDataParser)
 console.log('localstorage update')
}

async function getStatusDevice(device){
  console.log("device values coming...")
  console.log(device)
  const res = await fetch(`${api_urlDevice}status`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "enterprise": device.enterprise,
      "name": device.name,
      "id": device.id
    })
  })
  const data = await res.json() 
  if(res.status !== 200){
    console.log('No se encontro device')
  } else{
    console.log("dataDevicedata")

    console.log(data)
    localStorage.setItem('deviceData', JSON.stringify(device))
    // localStorage.setItem('deviceStatus', JSON.stringify(data))
    getValuesDevice(device)
      // window.location.href = 'http://127.0.0.1:5501/dashboard.html'
  }
}

async function getValuesDevice(device){
  console.log("device values coming...")
  console.log(device)
  const res = await fetch(`${api_urlDevice}deviceValues`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // "enterprise": device.enterprise,
      "name": device.name,
      "id": device.id
    })
  })
  const data = await res.json() 
  if(res.status !== 200){
    console.log('No se encontro device')
  } else{
    console.log(data)
    localStorage.setItem('deviceValues', JSON.stringify(data))
    // window.location.href = 'http://127.0.0.1:5501/public/dashboard.html'
    window.location.href = 'https://uctempec.vercel.app/dashboard.html'


  }
}

bringAllDevices()