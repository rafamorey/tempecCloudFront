
// Url backend
api_urlGetDeviceById = 'https://tempec.vercel.app/device/id'

api_urlGetDevicesUser = 'https://tempec.vercel.app/user/devices'

// Nodes

const addDevice = document.getElementById('addDeviceButton')

const deleteDevice = document.getElementById('deleteDeviceButton')

const statusDevice = document.getElementById('statusDeviceButton')

// Listener Buttons

addDevice.addEventListener('click', () =>{
  bringAllDevices()
})


// funcion para enviar una peticion al server para saber cuantos devices hay para este usuario y entonces hacer el render de todos.
async function bringAllDevices(){
  console.log("getting devices for user ...(put id for this user)")
}

async function bringDeviceById(id){
  console.log(`getting device ${id}`)
  const res = await fetch({
    "url "
  })
}
