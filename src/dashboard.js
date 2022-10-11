// url




const deviceData = localStorage.getItem('deviceData')
  const deviceDataParser = JSON.parse(deviceData)
console.log(deviceDataParser)

const deviceValues = localStorage.getItem('deviceValues')
const deviceValuesParser = JSON.parse(deviceValues)
console.log(deviceValuesParser.body.setPoint)

const divSetpoint = document.getElementById('divSetpoint')
divSetpointTextNode = document.createTextNode(deviceValuesParser.body.setPoint)
divSetpoint.appendChild(divSetpointTextNode)

const divMin = document.getElementById('divMin')
divMinTextNode = document.createTextNode(deviceValuesParser.body.tempMin)
divMin.appendChild(divMinTextNode)

const divMax = document.getElementById('divMax')
divMaxTextNode = document.createTextNode(deviceValuesParser.body.tempMax)
divMax.appendChild(divMaxTextNode)








