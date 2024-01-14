var romanToInt = function (s) {
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let sum = 0;
  
    for (let i = 0; i < s.length; i++) {
      let currentVal = romanValues[s[i]];
      let nextVal = romanValues[s[i + 1]];
  
      if (nextVal > currentVal) {
        sum += (nextVal - currentVal);
        i++;  
      } else {
        sum += currentVal;
      }
    }
  
    return sum;
  };
  
  let s = "III";
  console.log(romanToInt(s)); 