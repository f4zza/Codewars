// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.



function getGrade (s1, s2, s3) {
    let sum = (s1+s2+s3)/3
    
      if(sum >=90 && sum <= 100){
        return 'A'
      }else if(sum >= 80 && sum<90){
        return 'B'
      }else if(sum >=70 && sum< 80){
        return 'C'
      }else if(sum >=60 && sum<70 ){
        return 'D'
      }else{
        return `F`
      }
    

      //one liner

      function getGrade (s1, s2, s3) {
        let sum = (s1 + s2 + s3) / 3
        return sum >= 90 ? "A" : sum >= 80 ? "B" : sum >= 70 ? "C" : sum >= 60 ? "D" : "F"
      }