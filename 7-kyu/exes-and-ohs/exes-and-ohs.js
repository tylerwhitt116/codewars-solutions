function XO(str) {
    const lwerStr = str.toLowerCase()// set the whole string to lower case
    const x = [...lwerStr].filter(char => char === 'x').length// filter how many times 'x' appears
    const o = [...lwerStr].filter(char => char === 'o').length// filter how many times 'o' appears
    
    return x === o //compare values
}