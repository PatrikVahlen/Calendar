// myArray = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]
myArray = []
let sum = 0;


for (let i = 1; i < 101; i++) {
    myArray.push(i)
}

myArray.forEach(x => {
    sum = (x * (x + 1)) / 2;
    console.log(sum)
})

