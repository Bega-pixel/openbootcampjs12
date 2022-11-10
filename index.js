const num = 15;

let fibonacci = new Array(num); 
    fibonacci.fill(0);   
    fibonacci[0] = 0; 
    fibonacci[1] = 1;  
    
    for(let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];  
    }

    console.log(fibonacci);