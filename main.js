function showVerticalMessage(str) {  
  if (str[0] === 'м') {
    str = str[0].toUpperCase() + str.slice(1)
  };

  if(str.length > 10) {
    str = str.slice(0, 10)
  }

  let substr = '';
  for(let char of str) {
    substr = substr + `${char}\n`
  } console.log(substr)
}