const bikes = [
    "Rad Rover",
    "Rad Rover Step-thru",
    "Rad City Step-over",
    "RadCity Step-thru",
    "Rad Runner",
    "Rad Mini Step-thru",
    "7 Speed Cruiser",
    "7 Speed Step-Thru Cruiser",
    "Hybrid",
    "Hybrid Step-thru"
    //...
]

function menu(bikes) {
    for(let bike of bikes) { 
        console.log(bike)
    }
}

menu(bikes)