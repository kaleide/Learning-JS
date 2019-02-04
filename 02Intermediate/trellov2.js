let myTodo = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo, meet = 0){
    todo.meetings = todo.meetings + meet
}

let meetingDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryDay = function(todo){
    let meetRemain = todo.meetings + todo.meetDone
    return `You have ${meetRemain} meeting today!`
}

addMeeting(myTodo, 4)

addMeeting(myTodo, 2)

meetingDone(myTodo, 5)

console.log(getSummaryDay(myTodo))
