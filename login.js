// Check Palindrome
 let s="";
   for(i=N-1;i>=0;--i){
       s=s+str[i];
   }if(s==str){
       console.log("Yes");
   }else{
       console.log("No");
   }
  
}

// Check Prime number
let count=0;
 for(let i=0;i<=num;i++){
     if(num%i==0){
         count++;
     }
 }
 
     if(count==2){
         console.log("Yes")
     }
     else{
         console.log("No")
     }
 
}
