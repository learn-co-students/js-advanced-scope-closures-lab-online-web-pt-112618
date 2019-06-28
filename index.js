function produceDrivingRange(blockRange) {
  return function(string1, string2) {
    
    let start = parseInt(string1);
    let end = parseInt(string2);
    let distranceToTravel = Math.abs(end-start);
    let difference = blockRange - distranceToTravel;
    
    if (difference > 0) {
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(rideFare) {
    return rideFare * percentage;
  }
}

function createDriver() {
  let driverID = 0
  return class { 
    constructor(name) {
      this.id = ++driverID
      this.name = name
    }
  }
}