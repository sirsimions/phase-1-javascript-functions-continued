// code your solution here
function saturdayFun(event = 'roller-skate'){
    return `This Saturday, I want to ${event}!`;
}
saturdayFun('bathe my dog');

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}
mondayWork('relax with my friends');

function wrapAdjective(star = "*"){
    return function (coder = "special"){
     return `You are ${star}${coder}${star}!`;
    }
}
wrapAdjective()('a hardworker');

