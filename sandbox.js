const utils = require('./index')

let counter = new utils.Counter(3)

console.log(counter);
//first call
counter.countDown();
console.log(counter)

counter.countDown();
console.log(counter)

counter.countDown();
console.log(counter)

counter.countDown();
console.log(counter)

counter.countDown();
console.log(counter)











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