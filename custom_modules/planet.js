let planets = new Array()
class Planet {
    constructor(name, code, description, space_station) {
        this.name = name;
        this.description = description;
        this.code = code.key
        this.space_station = space_station
    }

}
const CreatePlanet = (name, code, description, space_station) => {
    let planet = new Planet(name, code, description, space_station)
    code.key++
    return planet
}
const addPlanet = (planet) => {
    planets.push(planet)
}
const changePlanet = (code, newName, newDescription, newSpace_station) => {
    let index = planets.findIndex(x => x.code === code);
    if (newName !== undefined) {
        planets[index].name = newName
    }
    if (newDescription !== undefined) {
        planets[index].description = newDescription
    }
    if (newSpace_station !== undefined) {
        planets[index].space_station = newSpace_station
    }
}
const deletePlanet = (code) => {
    let index = planets.findIndex(x => x.code === code);
    if(index === -1){
        return -1
    }
    else{
     planets.splice(index, 1)
    }
}
const findPlanet = (code) => {
    let index = planets.findIndex(x => x.code === code);
    if(index === -1) return -1
    else return planets[index]
 }

    export default { planets, addPlanet, changePlanet, deletePlanet, CreatePlanet, findPlanet  }

    // exports.findPlanet = planets.findPlanet;
    // exports.CreatePlanet = planets.CreatePlanet;
    // exports.deletePlanet = planets.deletePlanet;
    // exports.changePlanet = planets.changePlanet;
    // exports.addPlanet = planets.addPlanet;