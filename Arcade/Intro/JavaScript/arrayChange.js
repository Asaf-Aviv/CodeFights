const arrayChange = arr => {
    let operations = 0;
    
    for(let i = 1, x = arr.length; i < x; i++) {
        if(arr[i] <= arr[i-1]) {
            let diff = arr[i-1] - arr[i] + 1;
            arr[i] += diff;
            operations += diff;
        }
    }
    return operations;
}