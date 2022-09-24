
// Url backend
api_urlGetDeviceById = 'https://tempec.vercel.app/device/id'

api_urlGetDevicesUser = 'https://tempec.vercel.app/user/devices'

// Nodes

const addDevice = document.getElementById('addDeviceButton')

const deleteDevice = document.getElementById('deleteDeviceButton')

const statusDevice = document.getElementById('statusDeviceButton')

// const sectionDevicesContainer = document.getElementById('devsCont')

// Listener Buttons

addDevice.addEventListener('click', () =>{
  deployFormForID()
})


function  deployFormForID(){
  console.log("adding device")
  const capa = document.createElement('div')
  
}

// funcion para enviar una peticion al server para saber cuantos devices hay para este usuario y entonces hacer el render de todos.
async function bringAllDevices(){
  console.log("getting devices for user ...(put id for this user)")
}

async function bringDeviceById(id){
  // console.log(`getting device ${id}`)
  // const res = await fetch(api_urlGetDeviceById)
  // const data = await res.json()
  // console.log(data)
  console.log("adding device")
  const sectionDevicesContainer = document.getElementById('devsCont')
  sectionDevicesContainer.innerHtml= "";
  // deviceContainer
  const divDeviceContainer = document.createElement("div")
  divDeviceContainer.classList.add('deviceContainer')
  // div divece name
  const divDeviceName =  document.createElement('div')
  divDeviceName.classList.add('deviceName')
  const divTextNode = document.createTextNode('deviceName')
  divDeviceName.appendChild(divTextNode)  
divDeviceContainer.appendChild(divDeviceName)

  const divDeviceContainerDescription = document.createElement('div')
  divDeviceContainerDescription.classList.add('deviceContainer-description')
  divDeviceContainer.appendChild(divDeviceName)
  // div ideal & actual
  const divDeviceIdeal = document.createElement('div')
  divDeviceIdeal.classList.add('ideal')
  const divIdeal = document.createElement('div')
  const divActual = document.createElement('div')
  divDeviceIdeal.appendChild( divIdeal)
  divDeviceIdeal.appendChild( divActual)
// div temp
  const divDeviceTemp = document.createElement('div')
  divDeviceTemp.classList.add('temp')
  const divTemp = document.createElement('div')
  const divTempIdeal = document.createElement('div')
  const divTempActual = document.createElement('div')
  divDeviceTemp.appendChild(divTemp)
  divDeviceTemp.appendChild(divTempIdeal)
  divDeviceTemp.appendChild(divTempActual)
  // div min
  const divDeviceMin = document.createElement('div')
  divDeviceMin.classList.add('min')
  const divMin = document.createElement('div')
  const divMinIdeal = document.createElement('div')
  const divMinActual = document.createElement('div')
  divDeviceMin.appendChild(divMin)
  divDeviceMin.appendChild(divMinIdeal)
  divDeviceMin.appendChild(divMinActual)
  // div button
  // div max
  const divDeviceMax = document.createElement('div')
  divDeviceMax.classList.add('max')
  const divMax = document.createElement('div')
  const divMaxIdeal = document.createElement('div')
  const divMaxActual = document.createElement('div')
  divDeviceMax.appendChild(divMax)
  divDeviceMax.appendChild(divMaxIdeal)
  divDeviceMax.appendChild(divMaxActual)
  // div button
  const divDeviceButtons = document.createElement('div')
  divDeviceButtons.classList.add('deviceButtons')
  const inputDelete = document.createElement('input')
  inputDelete.setAttribute
  ("id", "deleteDeviceButton")
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
}
