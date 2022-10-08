// url




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








