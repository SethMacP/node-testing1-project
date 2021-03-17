const utils = require('./index')

let seasons = new utils.Seasons()

console.log(seasons)

console.log(seasons.next());
console.log(seasons)

console.log(seasons.next());
console.log(seasons)

console.log(seasons.next());
console.log(seasons)

console.log(seasons.next());
console.log(seasons)

console.log(seasons.next());
console.log(seasons)






/*old code

if(this.startNumber == this.downNumber){
    this.downNumber -= 1
    return this.startNumber
}
else if(this.downNumber < this.startNumber && this.downNumber > 0){
    this.downNumber -=1
    return this.downNumber
}else{
    return this.downNumber
}


        */