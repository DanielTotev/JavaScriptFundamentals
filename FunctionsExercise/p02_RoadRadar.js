function radar(arr) {
    let velocity = arr[0];
    let area = arr[1];
    let speedLimit = getSpeedLimit(area);
    if(velocity <= speedLimit){
        return;
    }
    let severity = getInfractionSeverity(velocity, speedLimit);
    console.log(severity);
    
    function getSpeedLimit(area) {
        switch (area.toLowerCase()){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    
    function getInfractionSeverity(velocity, maxSpeed) {
        let difference = velocity - maxSpeed;
        if(difference <= 20){
            return "speeding";
        }else if(difference <= 40){
            return "excessive speeding";
        }else {
            return 'reckless driving';
        }
    }
}

radar([200, 'motorway']);