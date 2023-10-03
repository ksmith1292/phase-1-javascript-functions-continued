// code your solution here

function saturdayFun(saturday='roller-skate'){
    return `This Saturday, I want to ${saturday}!`
}

function mondayWork (monday='go to the office'){
    return `This Monday, I will ${monday}.`
}

function wrapAdjective(happy2= '*'){
    return function(happy = 'special'){
        return `You are ${happy2}${happy}${happy2}!`
    }
}
console.log(wrapAdjective("banana")("totally"))
