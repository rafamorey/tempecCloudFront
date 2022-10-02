
// Url backend
api_urlDevice = 'https://tempec.vercel.app/device/'
// api de prueba con server.js 
api_urlDeviceTest = 'http://localhost:3002/device/'

api_urlUser = 'https://tempec.vercel.app/user/'

api_urlEnterprise = 'https://tempec.vercel.app/enterprise/'

// Nodes
const addDevice = document.getElementById('addDeviceButton')

const deleteDevice = document.getElementById('deleteDeviceButton')

const statusDevice = document.getElementById('statusDeviceButton')

const sectionDevicesContainer = document.getElementById('devsCont')


// localStorage
const userData = localStorage.getItem('1')
  const userDataParser = JSON.parse(userData)
console.log(userDataParser)

// Count id devices in screen
var counterDevicesShown = 0 

// const sectionDevicesContainer = document.getElementById('devsCont')

// Listener Buttons

addDevice.addEventListener('click', () =>{
  deployFormForID()
})


function  deployFormForID(){
  console.log("adding device")
  const divFormNewDevice = document.getElementById('divFormNewDevice')
  divFormNewDevice.innerHTML = ""
  const formFormNewDevice = document.createElement('div')
  formFormNewDevice.setAttribute("action", "./dashboard.js")
  
  const pFormNewDevice = document.createElement('p')
  
  const pTextNodeFormNewDevice = document.createTextNode('Please introduce the name and Id for your Tempec Device')
  pFormNewDevice.append(pTextNodeFormNewDevice)
  
  const inputNameFormNewDevice = document.createElement('input')
  inputNameFormNewDevice.setAttribute('type', "text")
  inputNameFormNewDevice.setAttribute('placeholder', "Name device")
  inputNameFormNewDevice.setAttribute('id', "nameDevice")

  const labelNameFormNewDevice = document.createElement('label')
  labelNameFormNewDevice.setAttribute('for', 'nameDevice')

  const inputIdFormNewDevice = document.createElement('input')
  inputIdFormNewDevice.setAttribute('type', "text")
  inputIdFormNewDevice.setAttribute('placeholder', "Id device")
  
  const inputSendFormNewDevice = document.createElement('input')
  inputSendFormNewDevice.setAttribute("type", "submit")
  inputSendFormNewDevice.setAttribute("value", "Send")
  formFormNewDevice.appendChild(pFormNewDevice)
  formFormNewDevice.appendChild(labelNameFormNewDevice)
  formFormNewDevice.appendChild(inputNameFormNewDevice)
  formFormNewDevice.appendChild(inputIdFormNewDevice)
  formFormNewDevice.appendChild(inputSendFormNewDevice)
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
}

// funcion para enviar una peticion al server para saber cuantos devices hay para este usuario y entonces hacer el render de todos.
async function bringAllDevices(){
  console.log("getting devices for user ...(put id for this user)")
  // const userData = localStorage.getItem('1')
  // const userDataParser = JSON.parse(userData)
  
  // console.log(devicesUser)
  if(userDataParser.body == null){
    console.log("no devices")
  }else{
    const devicesUser = userDataParser.body.devices
    devicesUser.forEach(device => {
      createDeviceContainer(device)
    })
  }

}

async function createDeviceById(device){
  // const res = await fetch(`${api_urlDevice}id`)
  const res = await fetch(`${api_urlEnterprise}deviceid`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": device.name,
      "devices": [{
        "id": device.id
      }]
    })
  })
  const data = await res.json() 
  if(res.status !== 201){
    console.log('No se encontro device')
  } else{
    console.log('Device ok')
    createDeviceContainer(data)
  }
}

async function createDeviceContainer(data){
  counterDevicesShown++
  console.log(data)
  console.log("creating device")
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
  const divTempIdealTextNode = document.createTextNode(data.id)
  divTempIdeal.appendChild(divTempIdealTextNode)
  divTempIdeal.setAttribute("id", data.id)
  const divTempActual = document.createElement('div')
  const divDeviceTempActualTextNode = document.createTextNode(data.tempActual)
  divDeviceTemp.appendChild(divDeviceTempActualTextNode)
  divDeviceTemp.appendChild(divTemp)
  divDeviceTemp.appendChild(divTempIdeal)
  divDeviceTemp.appendChild(divTempActual)
  // div min
  const divDeviceMin = document.createElement('div')
  divDeviceMin.classList.add('min')
  const divMin = document.createElement('div')
  const divDeviceMinTextNode = document.createTextNode('Min')
  divDeviceMin.appendChild(divDeviceMinTextNode)
  const divMinIdeal = document.createElement('div')
  const divDeviceMinIdealTextNode = document.createTextNode(data.minIdeal)
  divDeviceMin.appendChild(divDeviceMinIdealTextNode)
  const divMinActual = document.createElement('div')
  const divDeviceActualTextNode = document.createTextNode(data.minActual)
  divDeviceMin.appendChild(divDeviceActualTextNode)
  divDeviceMin.appendChild(divMin)
  divDeviceMin.appendChild(divMinIdeal)
  divDeviceMin.appendChild(divMinActual)
  // div button
  // div max
  const divDeviceMax = document.createElement('div')
  divDeviceMax.classList.add('max')
  const divMax = document.createElement('div')
  const divDeviceMaxTextNode = document.createTextNode('Max')
  divDeviceMax.appendChild(divDeviceMaxTextNode)
  const divMaxIdeal = document.createElement('div')
  const divDeviceMaxIdealTextNode = document.createTextNode(data.maxIdeal)
  divDeviceMax.appendChild(divDeviceMaxIdealTextNode)
  const divMaxActual = document.createElement('div')
  const divDeviceMaxActualTextNode = document.createTextNode(data.maxActual)
  divDeviceMax.appendChild(divDeviceMaxActualTextNode)
  divDeviceMax.appendChild(divMax)
  divDeviceMax.appendChild(divMaxIdeal)
  divDeviceMax.appendChild(divMaxActual)
  // div button
  const divDeviceButtons = document.createElement('div')
  divDeviceButtons.classList.add('deviceButtons')
  const inputDelete = document.createElement('input')
  inputDelete.setAttribute("id", data.id)
  inputDelete.setAttribute("value", "Delete")
  inputDelete.setAttribute("type", "Button") 
  const inputStatus = document.createElement('input')
  inputStatus.setAttribute("id", "statusDeviceButton")
  inputStatus.setAttribute("value", "Status")
  inputStatus.setAttribute("type", "Button") 
  divDeviceButtons.appendChild(inputDelete)
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
  inputDelete.addEventListener('click', () => {
    // console.log(data.id)
    deleteDeviceById(divDeviceContainer, inputDelete ,userDataParser)
  })

  // statusDeviceButton.addEventListener('click', () => {
  //   getStatusDevice(idDevice)
  // })

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
    // remuevo el contenedor del device
    sectionDevicesContainer.removeChild(deviceToDelete)
  }
}

async function getStatusDevice(id){
  const res = await fetch(api_urlGetDeviceById, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      idDevice: id
    })
  })
}


bringAllDevices()