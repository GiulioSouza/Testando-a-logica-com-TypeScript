const createTable = (numbers: number[]): void => {
    
    for(const number of numbers){

        for(let i = 0; i <= 10; i++){
            console.log(`${number} x ${i} = ${number * i}`);
        }

        console.log("------------");
        
    }
}

createTable([1, 2, 3])