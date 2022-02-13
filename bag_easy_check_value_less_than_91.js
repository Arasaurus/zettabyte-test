// Expected Result = true
// Direction : need to check if each of array value has value less than 91
const array1 = [1, 29, 88, 37, 22, '90'];

function result(array1) {
  // Your Code Here
  const newArr = [];

array1.forEach(str => {
  newArr.push(Number(str));
});

  for(x=0; x<newArr.length;x++){

    if(newArr[x]<91){
      var answer="true";
    }
    else{
      var answer="wrong";
    }
  }
  return answer;
}

console.log(result(array1));
