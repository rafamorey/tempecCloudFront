// url

<<<<<<< HEAD
API_URLDEVICEvalues = 'https://tempec.vercel.app/device/deviceValues'
=======

>>>>>>> 8310c394965ed225c97b5c6c6fdc01b655f24ba1


const deviceData = localStorage.getItem('deviceData')
  const deviceDataParser = JSON.parse(deviceData)
console.log(deviceDataParser)

const deviceValues = localStorage.getItem('deviceValues')
const deviceValuesParser = JSON.parse(deviceValues)
console.log(deviceValues)

const divSetpoint = document.getElementById('divSetpoint')
divSetpointTextNode = document.createTextNode(deviceDataParser.setPoint)
divSetpoint.appendChild(divSetpointTextNode)

const divMin = document.getElementById('divMin')
divMinTextNode = document.createTextNode(deviceDataParser.tempMin)
divMin.appendChild(divMinTextNode)

const divMax = document.getElementById('divMax')
divMaxTextNode = document.createTextNode(deviceDataParser.tempMax)
divMax.appendChild(divMaxTextNode)





<<<<<<< HEAD
async function getDeviceValues(){
  console.log("device values are coming...")
  const res = fetch(API_URLDEVICEvalues,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "name": "ok",
      "id": "uno"
    })
  })
  const data = await res.json()
  if(res.status !==200){
    console.log("cant fetch data for this device")
  }else{
    console.log("fetching devices config parameters")
    console.log(data)
  }
}

// async function createDeviceById(device){
//   // const res = await fetch(`${api_urlDevice}id`)
//   const res = await fetch(`${api_urlEnterprise}deviceid`,{
//     method:'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "name": "Esteban",
//       "devices": [{
//         "id": "uno"
//       }]
//     })
//   })
//   const data = await res.json() 
//   if(res.status !== 201){
//     console.log('No se encontro device')
//   } else{
//     console.log('Device ok')
//     // createDeviceContainer(data)
//   }
// }

getDeviceValues()
=======



>>>>>>> 8310c394965ed225c97b5c6c6fdc01b655f24ba1
