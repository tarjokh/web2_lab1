class Planet {

    constructor (name) {

        this.name = name;
        this.stations = [];
        this.cargo = [];
        this.deliveredCargo=[];

        if (typeof name === 'undefined')    { this.name = "unknown"; }

    }

}

let planets_list = new Array();

function find_planet (name) {

    for (let planet of planets_list) {

        if (name === planet.name) { return planet; }

    }

    return -1;

}

function add_planet (name) {

    let planet = new Planet(name);
    planets_list.push(planet);
    return planet;

}

function remove_planet (name) {

    for (let i = 0; i < planets_list.length; i++) {

        let planet = planets_list[i];

        if (planet.name === name) { planets_list.splice(i, 1);
            return 1; }

    }

    return -1;

}


function edit_planet (name, new_name) {

    for (let i = 0; i < planets_list.length; i++) {

        let planet = planets_list[i];

        if (planet.name === name) { planets_list[i].name = new_name;
            return 1; }

    }

    return -1;

}

function get_planets() {

    console.log("\n" + "List of all planets:");

    for (let i = 0; i < planets_list.length; i++) {

        let planet = planets_list[i];
        console.log(`Name of planet: ${planet.name}`);

    }

    console.log();

    return planets_list;

}

exports.find_planet      = find_planet;
exports.add_planet       = add_planet;
exports.remove_planet    = remove_planet;
exports.edit_planet      = edit_planet;
exports.get_planets      = get_planets;





class Cosmic_Station{

    constructor(name) {
        this.name=name;
        if (typeof name === 'undefined') { this.name = "Unknown station"; }
    }
}

function add_station(name, planet){
    let station = new Cosmic_Station(name);
    planet.stations.push(station);
    return station;
}

function remove_station (name, planet) {

    let station = find_station(name, planet);

    if (station === -1) { return -1; }

    let id = planet.stations.indexOf(station);
    planet.stations.splice(id, 1);

    return 1;

}

function find_station (name, planet) {

    for (let i = 0; i < planet.stations.length; i++) {

        let station = planet.stations[i];

        if (name === station.name) { return station; }

    }

    return -1;

}

function edit_station (name, planet, new_name) {

    let station = find_station(name, planet);

    if (station === -1) { return -1; }

    let id = planet.stations.indexOf(station);

    planet.stations[id].name = new_name;

    return 1;

}

function get_stations (planet) {

    console.log("\n" + `List of all stations ${planet.name}:`);

    for (let i = 0; i < planet.stations.length; i++) {

        let station = planet.stations[i];
        console.log(`\tName of station: ${station.name}`);

    }

    console.log();

    return planet.stations;

}

// Експортуємо функції
exports.find_station = find_station;
exports.add_station = add_station;
exports.remove_station = remove_station;
exports.edit_station = edit_station;
exports.get_stations = get_stations;