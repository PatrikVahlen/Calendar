// --- Day 7: The Treachery of Whales ---
// A giant whale has decided your submarine is its next meal, and it's much faster than you are. There's nowhere to run!

// Suddenly, a swarm of crabs (each in its own tiny submarine - it's too deep for them otherwise) zooms in to rescue you! They seem to be preparing to blast a hole in the ocean floor; sensors indicate a massive underground cave system just beyond where they're aiming!

// The crab submarines all need to be aligned before they'll have enough power to blast a large enough hole for your submarine to get through. However, it doesn't look like they'll be aligned before the whale catches you! Maybe you can help?

// There's one major catch - crab submarines can only move horizontally.

// You quickly make a list of the horizontal position of each crab (your puzzle input). Crab submarines have limited fuel, so you need to find a way to make all of their horizontal positions match while requiring them to spend as little fuel as possible.

// For example, consider the following horizontal positions:

// 16,1,2,0,4,2,7,1,2,14
// This means there's a crab with horizontal position 16, a crab with horizontal position 1, and so on.

// Each change of 1 step in horizontal position of a single crab costs 1 fuel. You could choose any horizontal position to align them all on, but the one that costs the least fuel is horizontal position 2:

// Move from 16 to 2: 14 fuel
// Move from 1 to 2: 1 fuel
// Move from 2 to 2: 0 fuel
// Move from 0 to 2: 2 fuel
// Move from 4 to 2: 2 fuel
// Move from 2 to 2: 0 fuel
// Move from 7 to 2: 5 fuel
// Move from 1 to 2: 1 fuel
// Move from 2 to 2: 0 fuel
// Move from 14 to 2: 12 fuel
// This costs a total of 37 fuel. This is the cheapest possible outcome; more expensive outcomes include aligning at position 1 (41 fuel), position 3 (39 fuel), or position 10 (71 fuel).

// Determine the horizontal position that the crabs can align to using the least fuel possible. How much fuel must they spend to align to that position?


// let absvalue = Math.abs(-3);
// console.log(absvalue)


// let myArray = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
const myArray = [1101, 1, 29, 67, 1102, 0, 1, 65, 1008, 65, 35, 66, 1005, 66, 28, 1, 67, 65, 20, 4, 0, 1001, 65, 1, 65, 1106, 0, 8,
    99, 35, 67, 101, 99, 105, 32, 110, 39, 101, 115, 116, 32, 112, 97, 115, 32, 117, 110, 101, 32, 105, 110, 116, 99, 111, 100, 101,
    32, 112, 114, 111, 103, 114, 97, 109, 10, 3, 443, 2, 394, 403, 176, 454, 60, 126, 959, 781, 426, 212, 194, 65, 26, 100, 1047, 718,
    29, 1124, 515, 723, 74, 969, 717, 228, 50, 39, 1074, 1799, 1276, 505, 477, 9, 742, 804, 191, 133, 730, 26, 272, 139, 501, 549, 318,
    1164, 1019, 399, 2, 224, 1807, 421, 191, 594, 168, 336, 13, 271, 571, 385, 1071, 1316, 1796, 673, 417, 1518, 1152, 196, 1307, 262,
    217, 167, 696, 64, 84, 844, 312, 1770, 371, 517, 11, 450, 745, 80, 382, 367, 1527, 79, 1002, 878, 298, 147, 57, 24, 1282, 291, 338,
    911, 60, 622, 508, 513, 53, 404, 339, 672, 440, 168, 1302, 246, 116, 446, 502, 1402, 398, 1686, 118, 600, 865, 131, 48, 162, 1614,
    255, 1104, 1379, 85, 115, 38, 9, 483, 629, 28, 157, 238, 727, 27, 142, 766, 716, 393, 19, 115, 220, 1103, 397, 1330, 1027, 667, 0,
    678, 464, 1431, 549, 976, 456, 1403, 683, 749, 600, 711, 159, 98, 1000, 606, 478, 428, 612, 790, 1202, 1461, 713, 533, 1643, 53,
    29, 1, 261, 268, 466, 478, 187, 256, 134, 373, 1239, 17, 727, 574, 1206, 854, 88, 27, 51, 544, 793, 100, 1146, 49, 166, 317, 325,
    506, 64, 3, 255, 951, 747, 274, 926, 664, 531, 72, 443, 1088, 91, 259, 725, 100, 41, 1709, 239, 101, 119, 1472, 437, 91, 360, 539,
    96, 498, 78, 825, 103, 621, 216, 274, 402, 133, 446, 263, 1167, 212, 607, 1596, 17, 113, 814, 528, 56, 128, 388, 686, 1179, 43,
    886, 58, 633, 33, 186, 808, 220, 98, 15, 947, 1074, 612, 328, 979, 1203, 562, 938, 207, 35, 484, 812, 616, 218, 207, 249, 117, 136,
    39, 914, 951, 122, 252, 23, 1, 194, 132, 366, 1004, 4, 1079, 832, 510, 103, 1024, 203, 398, 1543, 17, 995, 961, 195, 79, 1070, 1222,
    53, 143, 91, 223, 6, 645, 175, 512, 424, 471, 829, 153, 126, 332, 586, 543, 460, 594, 105, 122, 220, 432, 197, 243, 73, 121, 454,
    765, 99, 186, 35, 478, 113, 1526, 305, 596, 102, 365, 38, 1053, 628, 24, 425, 962, 570, 170, 457, 268, 518, 339, 32, 78, 600, 8,
    154, 530, 641, 1889, 74, 58, 1047, 166, 100, 923, 687, 1280, 1144, 1260, 405, 1786, 22, 694, 243, 284, 1109, 503, 650, 633, 52,
    236, 661, 620, 54, 642, 130, 697, 718, 259, 244, 52, 387, 347, 459, 724, 661, 535, 354, 53, 105, 246, 493, 538, 894, 0, 368, 67,
    151, 2, 127, 724, 705, 237, 512, 557, 573, 829, 789, 61, 415, 131, 526, 982, 206, 73, 46, 82, 411, 1670, 1350, 34, 654, 190, 160,
    575, 669, 21, 830, 34, 1233, 371, 819, 360, 271, 173, 420, 38, 112, 273, 115, 493, 40, 51, 634, 844, 281, 613, 193, 10, 111, 567,
    52, 17, 1137, 117, 105, 122, 250, 72, 70, 1038, 210, 1008, 191, 99, 1123, 1641, 90, 1306, 47, 385, 835, 395, 1057, 1036, 4, 127,
    103, 486, 205, 138, 929, 286, 46, 641, 1041, 490, 399, 178, 1492, 421, 106, 275, 741, 1196, 15, 174, 700, 892, 8, 818, 215,
    436, 624, 459, 415, 812, 28, 196, 921, 119, 333, 896, 541, 117, 926, 1084, 276, 222, 361, 325, 23, 1295, 205, 384, 207, 863,
    659, 22, 89, 21, 110, 269, 157, 385, 422, 941, 629, 1511, 544, 701, 404, 489, 38, 495, 507, 238, 132, 753, 119, 459, 145, 120,
    984, 313, 973, 1049, 158, 372, 317, 596, 1024, 177, 256, 23, 6, 527, 1439, 592, 743, 104, 414, 256, 418, 425, 271, 58, 583, 0,
    164, 277, 1285, 809, 125, 391, 843, 70, 69, 194, 250, 611, 287, 2, 389, 1469, 555, 552, 28, 236, 278, 178, 314, 368, 254, 86,
    240, 72, 204, 8, 856, 28, 312, 236, 464, 144, 405, 433, 28, 42, 16, 587, 22, 403, 1234, 744, 484, 48, 180, 238, 47, 384,
    1315, 13, 78, 9, 882, 70, 551, 58, 756, 111, 777, 340, 1046, 185, 83, 412, 19, 527, 514, 355, 350, 1198, 913, 154, 87, 507,
    76, 1108, 392, 361, 1081, 75, 1083, 201, 896, 1161, 1267, 46, 420, 79, 702, 879, 348, 622, 68, 611, 180, 515, 37, 186, 435,
    1485, 438, 699, 1441, 1122, 85, 145, 1372, 68, 2, 621, 147, 503, 156, 993, 496, 536, 359, 485, 657, 152, 585, 681, 908,
    294, 398, 4, 190, 33, 197, 304, 157, 38, 77, 922, 1033, 166, 85, 411, 544, 1688, 81, 192, 111, 561, 212, 176, 291, 44,
    76, 465, 35, 6, 110, 1329, 1702, 53, 70, 82, 4, 1141, 278, 483, 66, 9, 115, 733, 856, 18, 1167, 282, 100, 11, 605, 673,
    1093, 1268, 1633, 1632, 570, 847, 575, 160, 8, 335, 5, 27, 489, 3, 1669, 1072, 571, 144, 460, 15, 200, 15, 108, 473,
    527, 775, 818, 87, 359, 46, 665, 191, 635, 1122, 289, 457, 169, 17, 42, 395, 1258, 189, 253, 1292, 69, 370, 419, 47,
    79, 22, 668, 655, 274, 60, 1012, 428, 246, 248, 1181, 520, 760, 1274, 320, 608, 65, 137, 722, 386, 275, 252, 1221, 729,
    421, 265, 171, 84, 9, 3, 8, 1328, 86, 939, 890, 986, 34, 156, 245, 1896, 617, 1733, 346, 751, 1281, 244, 346, 56, 196,
    380, 426, 810, 233, 353, 28, 147, 307, 131, 1529, 1173, 68, 862, 1048, 774, 571, 699, 163, 306, 385, 368, 150, 651,
    316, 517, 47, 508, 407, 452, 315, 257, 1652, 73, 222, 1187, 1635, 1268, 48, 301, 247, 308, 211, 149, 1300, 141, 113,
    57, 152, 498, 450, 34, 376, 748, 442, 670, 358, 105, 587, 66, 0, 285, 46]
// let myArray = [324, 325, 326, 327,]

// sum = myArray[8] - myArray[9];
// console.log(sum)

// console.log(myArray.length)

// let maxvalue = Math.max(...myArray);
// console.log(maxvalue)

let maxPosition = Math.max(...myArray);
// let maxPosition = 2;
let fuelSum = 0;
let beforefule = 0;
let fuelArray = [];
let minArray = [];
let minFuel = 0;
let minPosition = 0;
let sum = 0;

// console.log(maxPosition)

// mySortedArray = 

for (y = 0; y <= maxPosition; y++) {
    for (i = 0; i < myArray.length; i++) {
        fuelSum += Math.abs(myArray[i] - y)
        // console.log(fuelSum)
    }
    fuelArray.push(fuelSum)
    // console.log(fuelSum)
    // console.log(fuelArray[y])
    if (fuelSum <= Math.min(...fuelArray)) {
        minPosition = y
        minArray.push(minPosition)
        console.log(fuelSum)
    }

    // console.log(minArray)
    fuelSum = 0;
}
// console.log(minArray)
// console.log(fuelArray)
console.log(minPosition);
// console.log(minFuel)

minFuel = Math.min(...fuelArray)
console.log(minFuel)
