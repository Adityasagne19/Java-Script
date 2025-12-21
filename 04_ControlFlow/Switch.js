// switch (key) {      //Switch statement structure
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
    case 1:                          //We can also match strings in switch cases eg: case "january":
        console.log("january");
        break;                       //break is used to exit the switch statement once a case is matched
    case 2:
        console.log("february");
        break;     
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        break;
}