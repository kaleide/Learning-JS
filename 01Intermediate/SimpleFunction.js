// current marks, total marks, percentage, grade
// 90 a, 80 b, 70 c, 60, d, 50 e, else f

// let getMyGrade = function(currentMarks, totalMarks) {
//     let myPercent = (currentMarks/totalMarks) * 100

//     let myGrade = ''

//     if (myPercent >= 90) {
//         myGrade = 'A'
//     } else if (myPercent >= 80) {
//         myGrade = 'B'
//     } else if (myPercent >= 70) {
//         myGrade = 'C'
//     } else if (myPercent >= 60) {
//         myGrade = 'D'
//     } else if (myPercent >= 50) {
//         myGrade = 'E'     
//     } else {
//         myGrade = 'F'  
//     }
//     return `Your grade is ${myGrade} and percentage is ${myPercent}`
// }
// let yourResult = getMyGrade(49, 100)
// console.log(yourResult)

// let resultMaker = function(currentMarks,totalMarks){
//     let percentage = (currentMarks/totalMarks) * 100;
//     if (percentage>90) {
//       console.log('Grade:A');
//     }else if(percentage>80){
//       console.log('Grade:B');
//     }else if(percentage>70){
//       console.log('Grade:C');
//     }else if(percentage>60){
//       console.log('Grade:D');
//     }else if (percentage>50) {
//       console.log('Grade:E');
//     }else{
//       console.log('Failed!');
//     }
//     return 'Percentage: '+percentage;
//   }
//   console.log(resultMaker(92,100));

// let myGrade = ''

// let myResult = function (marks,fullMarks=100) 
// {
//     if(!(marks ===parseInt(marks) && fullMarks === parseInt(fullMarks)))
//     {
//         return 'marks and fullMarks should be in number'
//     }
//     else
//     {
//         let percent = (marks/fullMarks)*100
//         if(percent>=90)
//         {
//             myGrade = 'A'
//             return `Your percent is ${percent} % and your grade is ${myGrade}`
//         }
        
//         else if(percent>=80)
//         {
//             myGrade = 'B'
//             return `Your percent is ${percent} % and your grade is ${myGrade}`
//         }
//         else if(percent>=70)
//         {
//             myGrade = 'C'
//             return `Your percent is ${percent} % and your grade is ${myGrade}`
//         }
//         else if(percent>=60)
//         {
//             myGrade = 'D'
//             return `Your percent is ${percent} % and your grade is ${myGrade}`
//         }
//         else if(percent>=50)
//         {
//             myGrade = 'E'
//             return `Your percent is ${percent} % and your grade is ${myGrade}`
        
//         }
//         else 
//         {
//             return `Your percent is ${percent} % and you have not passed in your exam`
//         }
//     }
// }

// console.log(myResult(40,100))
 
