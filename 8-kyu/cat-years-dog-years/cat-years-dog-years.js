var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears, dogYears;
  
  if(humanYears === 1){
    dogYears = 15;
    catYears = 15;
  }else if(humanYears === 2){
    dogYears = 15 + 9;
    catYears = 15 + 9;
  }else{
    dogYears = 15 + 9 + (humanYears - 2) * 5;
    catYears = 15 + 9 + (humanYears - 2) * 4;
  }
  return [humanYears,catYears,dogYears];
}
​