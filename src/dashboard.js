// url
API_URLDEVICEconfig = 'https://tempec.vercel.app/enterprise/deviceConfig'

API_URLDEVICEvalues = 'https://tempec.vercel.app/device/deviceValues'


const userData = localStorage.getItem('device')
  const userDataParser = JSON.parse(userData)
console.log(userDataParser)

const divSetpoint = document.getElementById('divSetpoint')
divSetpointTextNode = document.createTextNode(userDataParser.setPoint)
divSetpoint.appendChild(divSetpointTextNode)

const divMin = document.getElementById('divMin')
divMinTextNode = document.createTextNode(userDataParser.tempMin)
divMin.appendChild(divMinTextNode)

const divMax = document.getElementById('divMax')
divMaxTextNode = document.createTextNode(userDataParser.tempMax)
divMax.appendChild(divMaxTextNode)





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
  }
}

getDeviceValues()