// Expected Result : 
// [
//   { id: '1', name: 'Sherlock', score: 90 },
//   { id: '4', name: 'Budi', score: 85 }
// ]
// Direction :
// Return array of student for score is bigger than mean score (average score)

const students = [
    {
      id: "1",
      name: "Sherlock",
      score:90
    },
    {
      id: "2",
      name: "Genta",
      score: 75
    },
    {
      id: "3",
      name: "Ai",
      score: 80
    },
    {
      id: "4",
      name: "Budi",
      score:85
    }
  ]
  
  function result() {
    // Your Code Here
    var score=[];
    for(x=0; x<students.length;x++){
      if(x<students.length){
      score.push(students[x].score);
      }
    }
    var sum=0;
    for(var y=0; y<score.length;y++){
      sum +=score[y];
    }
    var med=sum/4;
    for(var i=0;i<students.length;i++){
      if(students[i].score>med){
        console.log(students[i]);
      }
    }
  }
  
  console.log(result());