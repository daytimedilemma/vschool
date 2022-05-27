function oneWordOnly(words){
    //  code here 
    const result = words.filter(word => !word.includes(" "))
    return result
   }
   
   console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
   console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]
   //filter " "