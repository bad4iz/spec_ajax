/**
 * Created by bad4iz on 06.12.2016.
 */
/**
 * Created by bad4iz on 06.12.2016.
 */
class Queue {
    constructor() {
        this._data = [];
    }

    enqueue(v) {
        this._data.push(v);
    }
    dequeue(v){ return this._data.shift();}
    front(){ return this._data[this._data.length-1]}
    // isEnpty() { this._data.length == 0}
    size(){return this._data.length}
    clear(){this._data = []}
    show(){ this._data.join(" ")}
}

function hotPotato(names, num) {
    let queue = new Queue();
    for(let i=0; i<names.length; ++i)
        queue.enqueue(names[i]);
    let eliminated = '';
    while (queue.size()>1) {
        for (let i = 0; i < num; ++i)
            queue.enqueue(queue.dequeue());
        eliminated = queue.dequeue();
        console.log(eliminated +' вышел из игры');
    }
    return queue.dequeue();
}

let names = ['жим', 'вася', 'фома', 'жора'];
let winner = hotPotato(names, 1);
console.log(winner + ' победил');


class Danser{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
}
class Dance{
    constructor(list){
        this.maleDanser = new Queue();
        this.femaleDancer = new Queue();
        this.getDancer(list);
    }
    getDancer(list){
        let names = read(list)
        console.log(names);
    }
}
let process = new Dance("files.txt");
