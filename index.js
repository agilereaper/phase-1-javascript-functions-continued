function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog")

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(message = "a hard worker") {
  const innerAdj = function (special = "*") {
        return `You are ${message}${special}${message}!`;
    }
    return innerAdj
}
