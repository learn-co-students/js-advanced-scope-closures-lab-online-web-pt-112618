// function produceDrivingRange(blockrange) {
//   return function (string1, string2) {
//     // need to parse strings and subtract from block range
//     // .ie travel = 15-12 = 3
//     // range = blockrange - travel
//     // javascript determine positive and negative number
//   }
//
// }

function produceDrivingRange(x){
  return function(start, end){
    let startB = (parseInt(start))
    let endB = (parseInt(end))
    let blocks = Math.abs(startB - endB)
    if (blocks >= x) {
      return `${Math.abs(blocks - x)} blocks out of range`
    } else {
      return `within range by ${Math.abs(blocks - x)}`
    }
  }
}

  function produceTipCalculator(tip) {
    return function (price) {
      return tip * price;
    };
  }

  function createDriver() {
    let itemId = 0;
    return class {
      constructor(name) {
        this.name = name;
        this.id = itemId++;
      }

    }
  }
