let factorial =(n)=>{
    if(n==0) return 1;
    return n*factorial(n-1);
}


function input(x){
    if(typeof(x)!="number" || x<0){
        console.log("Invalid Input")
        return;
    }
    console.log(factorial(x))
        
}

input(10);
input(-3);
input("String");