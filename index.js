const BoardMember = function(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training 
}

// const methods = {
//     veto: "No, I must disagree.",
//     approve: "You can do that!",
//     doCharity: "I like to help people.",
//     releasePressStatement: "You will see great things from Scuber.",
//     sayHi: `Hi, my name ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
// }

// Object.entries(methods).forEach(entry => {
//     const [key, value] = entry
//     key = function(){
//         return value
//     }
//     BoardMember.prototype.add(key)
// })

BoardMember.prototype.veto = function(){
    return "No, I must disagree"
}
BoardMember.prototype.approve = function(){
    return "You can do that!"
}
BoardMember.prototype.doCharity = function(){
    return "I like to help people."
}
BoardMember.prototype.releasePressStatement =function(){
    return "You will see great things from Scuber."
}
BoardMember.prototype.sayHi =function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}