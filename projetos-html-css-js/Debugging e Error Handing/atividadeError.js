function validaError(arr, num) {
  try {
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

  if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

  if(typeof num !== 'number') 
    throw new TypeError("Num precisa ser do tipo number");

  if(arr.length !== num)
    throw new RangeError("Tamanho inválido");

  return arr;
  }
  catch(e) {
    if(e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError")
      // throw e;
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError!")
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangerError!")
      console.log(e.message)
    } else {
      console.log("Tipo de erro não esperado:" + e)
    }
  }
 }

console.log(validaArray()); //espera receber erro de ReferenceError.

console.log(validaArray(5, 5)); //espera receber um erro do tipo TypeError.

console.log(validaArray([], 'a'));

console.log(validaArray([], 5)); // espera receber um erro referente a RangerError!. [1, 2, 3, 4, 5] aqui retorna o tamanho enviado.