let myTodo = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings= this.meetings + num
    },   
    meetingDone: function(num){
       this.meetDone= this.meetDone + num
    },
    resetDay: function(){
        this.meetings= 0
        this.meetingDone= 0
         return `On ${this.day} You have ${this.meetings} meetings and have completed ${this.meetingDone}`
    },

    summary: function(){
            return `You have ${this.meetings} meetings today, and have completed ${this.meetDone}!`
    },
}


myTodo.meetingDone(4)
myTodo.addMeeting(5)
console.log(myTodo.resetDay())

// handle meeting done
// function  that can reset day

