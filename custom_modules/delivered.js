let delivereds = new Array()
class Delivereds {
    constructor(project, performer, start, end) {
        this.project = project;
        this.performer = performer;
        this.start = start;
        this.end = end;
    }

}
const createDelivered = (project, performer, start, end) => {
    let delivered = new Delivereds(project, performer, start, end)
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

// const findDelivered = (code) => {
//     let index = customers.findIndex(x => x.code === code);
//         if (index === -1) return -1
//         else return delivereds[index]
// }

export default { delivereds, addDelivered, changeDelivered, deleteDelivered, createDelivered }


