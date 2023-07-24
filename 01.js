// const matches = (obj, source) =>
//     Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

console.log("-----------------")

// let date = new Date()
// console.log(date)
// let weekDay = date.getDay()
// let weekVar = ["Sunday", "Maonday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"]
// console.log("Today is :" + weekVar[weekDay])
// let hours = date.getHours()
// console.log(hours)
// let minutes = date.getMinutes()
// console.log(minutes)
// let seconds = date.getSeconds()
// console.log(seconds)


// if (hours > 12) {
//     hours = hours - 12
//     console.log(hours + " PM : " + minutes + " :min " + seconds + " :sec")
// }
// else {
//     console.log(hours + " AM : " + minutes + " :min " + seconds + " :sec")
// }

console.log("----------------------------------------")
// let date = new Date()
// let month = date.getMonth()
// let day = date.getDate()
// let year = date.getFullYear()
// console.log(month + "-" + day + "-" + year)
// console.log(day + "-" + month + "-" + year)

// Area of triangle

function areaOfTriangle(height, width) {
    return (1 / 2 * (height * width))
}

console.log(areaOfTriangle(7, 6))