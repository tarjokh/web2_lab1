let space_stations = new Array()
class Space_station {
    constructor(name, level, code) {
        this.name = name;
        this.level = level;
        this.code = code.key
    }
}
const createSpace_station = (name, level, code) => {
    let space_station = new Space_station(name, level, code)
    code.key++
    return space_station
}
const addSpace_station = (space_station) => {
    space_stations.push(space_station)
}
const changeSpace_station = (code, newName, newLevel) => {
    let index = space_stations.findIndex(x => x.code === code);
            if (newName !== undefined) {
                space_stations[index].name = newName
            }
            if (newLevel !== undefined) {
                space_stations[index].lvl = newLevel
            }
            return 0
    }
const deleteSpace_station = (code) => {
    let index = space_stations.findIndex(x => x.code === code);
    if(index === -1){
        return -1
    }
    else {
        space_stations.splice(index, 1)
    }
}

const findSpace_station = (code) => {
   let index = space_stations.findIndex(x => x.code === code);
   if(index === -1) return -1
   else return space_stations[index]
}

export default { space_stations, addSpace_station, changeSpace_station, deleteSpace_station, findSpace_station, createSpace_station }

