function produceDrivingRange(range) {
  return function(start, end) {
    let street = Number(end.slice(0,2)) - Number(start.slice(0,2));
    if(street < range) {
      return `within range by ${range - street}`;
    } else {
      return `${street - range} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(price) {
    return price * percentage
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}

// const Driver = createDriver()
// let sam = new Driver("Sam")
