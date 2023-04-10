let delivereds = new Array()
class Delivereds {
    constructor(name, weight, start, end) {
        this.name = name;
        this.weight = weight;
        this.start = start;
        this.end = end;
    }

}
const createDelivered = (name, weight, start, end) => {
    let delivered = new Delivereds(name, weight, start, end)
    return delivered
}
const addDelivered = (delivered) => {
    delivereds.push(delivered)
}
const changeDelivered = (code, newEnd) => {
    let index = customers.findIndex(x => x.code === code);
            if (newEnd !== undefined) {
                delivereds[index].end = newEnd
            }
            return
}
const deleteDelivered = (code) => {
    let index = customers.findIndex(x => x.code === code);
            delivereds.splice(index, 1)
            return
}


export default { delivereds, addDelivered, changeDelivered, deleteDelivered, createDelivered }


