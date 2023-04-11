import space_stations from "./custom_modules/space_station.js"
import planets from "./custom_modules/planet.js"
import cargos from "./custom_modules/cargo.js"
import delivereds from "./custom_modules/delivered.js"


const findAllSpace_stations = (planetCode) => {
    let arr = []
    for (let i = 0; i < planets.planets.length; i++) {
        if (planets.planets[i].space_station === planetCode) arr.push(planets.planets[i])
    }
    if (arr.length > 0) {
        console.log("Space station: ", arr)
    }
    else {
        console.log("That planet don't have any stations")
    }
}


let code = { key: 1 }
const stat1 = space_stations.createSpace_station('station1', 123, code)
const stat2 = space_stations.createSpace_station('station2', 234, code)
const stat3 = space_stations.createSpace_station('station3', 233244, code)

space_stations.addSpace_station(stat1)
space_stations.addSpace_station(stat2)
space_stations.addSpace_station(stat3)
space_stations.changeSpace_station(1, "newStat", 1221)
space_stations.deleteSpace_station(2)

console.log("Find: ", space_stations.findSpace_station(2))
console.log("All: " , space_stations.space_stations)


const plan1 = planets.CreatePlanet("Ears", code, "human", 1)
const plan2 = planets.CreatePlanet("Winus", code, "alian", 1)
const plan3 = planets.CreatePlanet("Jupiter", code, "juteroids", 1)

planets.addPlanet(plan1)
planets.addPlanet(plan2)
planets.addPlanet(plan3)
planets.changePlanet(4, "Ears", 'human', 1)
planets.deletePlanet(plan2.code)

console.log("Find: ", planets.findPlanet(4))
console.log("All: " , planets.planets)


const carr1 = cargos.createCargo('carr1', code, 1, 11)
const carr2 = cargos.createCargo('carr2', code, 2, 22)
cargos.addCargo(carr1)
cargos.addCargo(carr2)
cargos.changeCargo(7, 'carr1.1', 3, 33)
cargos.deleteCargo(8)

console.log(cargos.cargos)

const dell1 = delivereds.createDelivered(plan1.code, carr1.code, 2022, 2025)
const dell2 = delivereds.createDelivered(plan2.code, carr1.code, 2022, 2035)
delivereds.addDelivered(dell1)
delivereds.addDelivered(dell2)

console.log(delivereds.delivereds)

findAllSpace_stations(plan2.space_station)


