let cargos = new Array()
class Cargo {
    constructor(name, code, weight, type) {
        this.name = name;
        this.code = code.key
        this.weight = weight;
        this.type = type;
    }

}
const createCargo = (name, code, weight, type) => {
    let cargo = new Cargo(name, code, weight, type)
    code.key++
    return cargo
}
const addCargo = (cargo) => {
    cargos.push(cargo)
}
const changeCargo = (code, newName, newWeight, newType) => {
    let index = cargos.findIndex(x => x.code === code);
            if (newName !== undefined) {
                cargos[index].name = newName
            }
            if (newWeight !== undefined) {
                cargos[index].weight = newWeight
            }
            if (newType !== undefined) {
                cargos[index].type = newType
            }
}
const deleteCargo = (code) => {
    let index = cargos.findIndex(x => x.code === code);
            cargos.splice(index, 1)
}


export default { cargos, addCargo, changeCargo, deleteCargo, createCargo }

