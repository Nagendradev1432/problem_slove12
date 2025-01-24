let rows=prompt("enter a number of rows: ")
for(i=1;i<=rows;i++){
    res=""
    for(k=1;k<=rows-i;k++){
        res=res+" "
    }
    
    for(j=1;j<=i;j++){
        res=res+"* "
    }
   console.log(res)
}
for(i=2;i<=rows;i++){
    res=""
    for(k=1;k<=i-1;k++){
        res=res+" "
    }
    for(j=1;j<=rows-i+1;j++){
        res=res+"* "
        
    }
    console.log(res)
}



let arr1 = "babad".split("");
for(i=0;i<arr1.length;i++){
    for(j=i+1;j<=arr1.length;j++){
        let str1=""
        for(k=i;k<j;k++){
            str1=str1+arr1[k]
            // console.log(str1)
        
            
        }
        //  console.log(str1)
        if(str1==str1.split("").reverse().join("")){
            if(str1.length>1){
                console.log(str1)
            }
        }
    }
   
}


let arr1=[1,2,3,4,5,7]
let arr2=[6,7,4,5,3,7]
for(i of arr1){
    if(arr2.includes(i)){
        console.log(i)
    }
    
}