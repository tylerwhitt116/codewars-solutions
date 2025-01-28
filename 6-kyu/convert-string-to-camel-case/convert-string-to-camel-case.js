function toCamelCase(str){
 return str.split(/[-_]/) // Split the string into an array using "-" or "_" as delimiters
    .map((word, index) => 
      index === 0 
        ? word // Keep the first word as is
        : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of subsequent words
    )
    .join(''); // Join the words back into a single string
}