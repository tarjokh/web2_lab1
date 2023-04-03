import space_stations from "./custom_modules/space_station.js"
import planets from "./custom_modules/planet.js"
import cargos from "./custom_modules/cargo.js"
import delivereds from "./custom_modules/delivered.js"
// const mod = require('custom_module');

const findAllSpace_stations = (stationCode) => {
    let arr = []
    for (let i = 0; i < space_stations.space_stations.length; i++) {
        if (space_stations.space_stations[i].planet === stationCode) arr.push(space_stations.space_stations[i])
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
space_stations.changeSpace_station(1, "newStat", 12221)
space_stations.deleteSpace_station(2)

console.log("Find: ", space_stations.findSpace_station(1))


const proj1 = planets.CreatePlanet("pr1", code, "pr1desc", 1)
const proj2 = planets.CreatePlanet("pr2", code, "pr2desc", 1)
const proj3 = planets.CreatePlanet("pr3", code, "pr2desc", 1)
planets.addPlanet(proj1)
planets.addPlanet(proj2)
planets.addPlanet(proj3)
planets.changePlanet(4, "newpr1", 'newdesc1', 1)
planets.deletePlanet(proj2.code)

console.log("Find: ", planets.findPlanet(1))


const perf1 = cargos.createCargo('perf1', code, 1, 11)
const perf2 = cargos.createCargo('perf2', code, 2, 22)
cargos.addCargo(perf1)
cargos.addCargo(perf2)
cargos.changeCargo(7, 'perf1.1', 3, 33)
cargos.deleteCargo(8)


const act1 = delivereds.createDelivered(proj1.code, perf1.code, 2022, 2025)
const act2 = delivereds.createDelivered(proj2.code, perf1.code, 2022, 2035)
delivereds.addDelivered(act1)
delivereds.addDelivered(act2)


findAllSpace_stations(stat1.code)




