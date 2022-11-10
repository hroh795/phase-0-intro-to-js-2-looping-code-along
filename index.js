// Code your solutions in this file

function writeCards(arrayName, event) {
    const newArray = [];
    for(let i =0 ; i <arrayName.length; i++) {
        newArray.push(`Thank you, ${arrayName[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return newArray;
}


function countDown(num) {
    let count = num;
    while (count>=0) {
        console.log(count);
        debugger;
        count--;
    };
}
