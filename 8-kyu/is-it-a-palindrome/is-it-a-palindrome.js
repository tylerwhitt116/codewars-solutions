let isPalindrome = (str) => {
    const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    return newStr === newStr.split('').reverse().join('')
}