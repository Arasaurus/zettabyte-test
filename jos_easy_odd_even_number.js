// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  // Your Code Here
  var evens=[];
  var odds=[];
  for(var x=0; x<number.length;x++){
    if((number[x]%2)!=1){
      evens.push(number[x]);
    }
    else{
      odds.push(number[x]);
    }
    
  }
   var numArr=[evens, odds];
   return numArr;
}

console.log(result(number));