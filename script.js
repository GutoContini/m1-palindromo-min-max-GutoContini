function isPalindrome(str){
    let strTratada = str.toLowerCase();
    strTratada = strTratada.split(" ").join("");
    let strInvertida = "";
  
    for (let i = 1; i <= strTratada.length; i++) {
        strInvertida += strTratada[strTratada.length - i];
    }

    if (strTratada.toLowerCase() == strInvertida){
    return true;
    } else {
    return false;
    }
  }
  

  function arrayMaxMin(arr){
    let resultado = [arr[0], arr[0]]
    for(let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i-1]){
        if(arr[i] > resultado[1]){
        resultado.pop();
        resultado.push(arr[i]);
        }
      } else {
        if(arr[i] < resultado[0]) {
        resultado.shift();
        resultado.unshift(arr[i]);
        }
      }
    }
    return resultado;
  }