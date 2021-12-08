// Now, you need to figure out how to pilot this thing.

// It seems like the submarine can take a series of commands like forward 1, down 2, or up 3:

// forward X increases the horizontal position by X units.
// down X increases the depth by X units.
// up X decreases the depth by X units.
// Note that since you're on a submarine, down and up affect your depth, and so they have the opposite result of what you might expect.

// The submarine seems to already have a planned course (your puzzle input). You should probably figure out where it's going. For example:

// forward 5
// down 5
// forward 8
// up 3
// down 8
// forward 2
// Your horizontal position and depth both start at 0. The steps above would then modify them as follows:

// forward 5 adds 5 to your horizontal position, a total of 5.
// down 5 adds 5 to your depth, resulting in a value of 5.
// forward 8 adds 8 to your horizontal position, a total of 13.
// up 3 decreases your depth by 3, resulting in a value of 2.
// down 8 adds 8 to your depth, resulting in a value of 10.
// forward 2 adds 2 to your horizontal position, a total of 15.
// After following these instructions, you would have a horizontal position of 15 and a depth of 10. (Multiplying these together produces 150.)

// Calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?

const fsp = require("fs/promises")
const path = require("path")
let forwardPos = 0;
let depthPos = 0;
let sum = 0;
let aim = 0;

main()

async function main() {
    const input = await parseInput()
    let nums = input.map(ea => String(ea))
    // console.log(nums[0])
    // console.log(nums[999])
    // console.log(nums.length)
    partOne()
    partTwo()

    function partOne() {

        for (i = 0; i < nums.length; i++) {
            // console.log(nums[i])
            switch (nums[i]) {
                case "forward 1\r":
                    forwardPos += 1;
                    sum++
                    break;
                case "forward 2\r":
                    forwardPos += 2;
                    sum++
                    break;
                case "forward 3\r":
                    forwardPos += 3;
                    sum++
                    break;
                case "forward 4\r":
                    forwardPos += 4;
                    sum++
                    break;
                case "forward 5\r":
                    forwardPos += 5;
                    sum++
                    break;
                case "forward 5":
                    forwardPos += 5;
                    sum++
                    break;
                case "forward 6\r":
                    forwardPos += 6;
                    sum++
                    break;
                case "forward 7\r":
                    forwardPos += 7;
                    sum++
                    break;
                case "forward 8\r":
                    forwardPos += 8;
                    sum++
                    break;
                case "forward 9\r":
                    forwardPos += 9;
                    sum++
                    break;
                case "up 1\r":
                    depthPos += 1;
                    sum++
                    break;
                case "up 2\r":
                    depthPos += 2;
                    sum++
                    break;
                case "up 3\r":
                    depthPos += 3;
                    sum++
                    break;
                case "up 4\r":
                    depthPos += 4;
                    sum++
                    break;
                case "up 5\r":
                    depthPos += 5;
                    sum++
                    break;
                case "up 6\r":
                    depthPos += 6;
                    sum++
                    break;
                case "up 7\r":
                    depthPos += 7;
                    sum++
                    break;
                case "up 8\r":
                    depthPos += 8;
                    sum++
                    break;
                case "up 9\r":
                    depthPos += 9;
                    sum++
                    break;
                case "down 1\r":
                    depthPos -= 1;
                    sum++
                    break;
                case "down 2\r":
                    depthPos -= 2;
                    sum++
                    break;
                case "down 3\r":
                    depthPos -= 3;
                    sum++
                    break;
                case "down 4\r":
                    depthPos -= 4;
                    sum++
                    break;
                case "down 5\r":
                    depthPos -= 5;
                    sum++
                    break;
                case "down 6\r":
                    depthPos -= 6;
                    sum++
                    break;
                case "down 7\r":
                    depthPos -= 7;
                    sum++
                    break;
                case "down 8\r":
                    depthPos -= 8;
                    sum++
                    break;
                case "down 9\r":
                    depthPos -= 9;
                    sum++
                    break;
            }
        }
        console.log(forwardPos)
        console.log(depthPos)
        console.log(Math.abs(forwardPos * depthPos))
    }
    function partTwo() {
        forwardPos = 0;
        depthPos = 0;
        // nums = [
        //     "forward 5\r",
        //     "down 5\r",
        //     "forward 8\r",
        //     "up 3\r",
        //     "down 8\r",
        //     "forward 2\r",
        // ]
        for (i = 0; i < nums.length; i++) {
            // console.log(nums[i])
            switch (nums[i]) {
                case "forward 1\r":
                    forwardPos += 1;
                    sum++
                    if (aim != 0) {
                        depthPos += aim * 1
                    }
                    break;
                case "forward 2\r":
                    forwardPos += 2;
                    sum++
                    if (aim != 0) {
                        depthPos += aim * 2
                    }
                    break;
                case "forward 3\r":
                    forwardPos += 3;
                    sum++
                    if (aim != 0) {
                        depthPos += aim * 3
                    }
                    break;
                case "forward 4\r":
                    forwardPos += 4;
                    sum++
                    if (aim != 0) {
                        depthPos += aim * 4
                    }
                    break;
                case "forward 5\r":
                    forwardPos += 5;
                    sum++
                    if (aim != 0) {
                        depthPos += aim * 5
                    }
                    break;
                case "forward 5":
                    forwardPos += 5;
                    if (aim != 0) {
                        depthPos += aim * 5
                    }
                    sum++
                    break;
                case "forward 6\r":
                    forwardPos += 6;
                    sum++
                    if (aim != 0) {
                        depthPos += aim * 6
                    }
                    break;
                case "forward 7\r":
                    forwardPos += 7;
                    sum++
                    if (aim != 0) {
                        depthPos += aim * 7
                    }
                    break;
                case "forward 8\r":
                    forwardPos += 8;
                    sum++
                    if (aim != 0) {
                        depthPos += aim * 8
                    }
                    break;
                case "forward 9\r":
                    forwardPos += 9;
                    if (aim != 0) {
                        depthPos += aim * 9
                    }
                    sum++
                    break;
                case "up 1\r":
                    aim -= 1;
                    sum++
                    break;
                case "up 2\r":
                    aim -= 2;
                    sum++
                    break;
                case "up 3\r":
                    aim -= 3;
                    sum++
                    break;
                case "up 4\r":
                    aim -= 4;
                    sum++
                    break;
                case "up 5\r":
                    aim -= 5;
                    sum++
                    break;
                case "up 6\r":
                    aim -= 6;
                    sum++
                    break;
                case "up 7\r":
                    aim -= 7;
                    sum++
                    break;
                case "up 8\r":
                    aim -= 8;
                    sum++
                    break;
                case "up 9\r":
                    aim -= 9;
                    sum++
                    break;
                case "down 1\r":
                    aim += 1;
                    sum++
                    break;
                case "down 2\r":
                    aim += 2;
                    sum++
                    break;
                case "down 3\r":
                    aim += 3;
                    sum++
                    break;
                case "down 4\r":
                    aim += 4;
                    sum++
                    break;
                case "down 5\r":
                    aim += 5;
                    sum++
                    break;
                case "down 6\r":
                    aim += 6;
                    sum++
                    break;
                case "down 7\r":
                    aim += 7;
                    sum++
                    break;
                case "down 8\r":
                    aim += 8;
                    sum++
                    break;
                case "down 9\r":
                    aim += 9;
                    sum++
                    break;
            }
            // console.log(forwardPos)
            // console.log(depthPos)
            // console.log(aim)
        }
        console.log(forwardPos)
        console.log(depthPos)
        console.log(aim)
        console.log(Math.abs(forwardPos * depthPos))
    }
}

async function parseInput() {
    const rawInput = await fsp.readFile(path.resolve(__dirname, "file.txt"), "utf-8")
    const input = rawInput.split("\n")
    return input
}