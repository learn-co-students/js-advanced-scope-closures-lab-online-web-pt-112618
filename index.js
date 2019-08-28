function produceDrivingRange(range){
    return function(start, finish){
        let distance = parseInt(finish)-parseInt(start)
        if (distance>range){
            return `${distance-range} blocks out of range`
        } else {
            return `within range by ${range-distance}`
        }
    }
}

function produceTipCalculator(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}

function createDriver(){
    let driverId = 0;
    return class Driver{
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
    }
}