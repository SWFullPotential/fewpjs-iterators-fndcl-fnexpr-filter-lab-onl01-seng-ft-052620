// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(d => {return d.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(drivers, name){
    let sliced = name.length 
    return drivers.filter(d => {return d.slice(0, sliced) === name})
}

// additional way to code with same result. 
// function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     )
//   }

function matchName(drivers, string) {
    return drivers.filter(d => {return d.name === string})
};
