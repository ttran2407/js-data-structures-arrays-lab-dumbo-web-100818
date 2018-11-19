// Write your solution here!
const drivers = ["Milo","Otis","Garfield"]

function destructivelyAppendDriver(){
  drivers.push("Ralph")
}

function destructivelyPrependDriver(){
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  const newDriver = [ ...drivers,name]
  return newDriver
}

function removeFirstDriver(){
  const newDriver = drivers.slice(1)
  return newDriver
}

function removeLastDriver(){
  const newDriver = drivers.slice(0, drivers.length - 1)
  return newDriver
}

function prependDriver(name){
  const newDriver = [ name,...drivers]
  return newDriver
}
