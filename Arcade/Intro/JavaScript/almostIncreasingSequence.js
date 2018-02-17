const almostIncreasingSequence = sequence => {
    for(let i = 0, x = sequence.length; i < x; i++) {
        if (sequence[i+1] < sequence[i] && (sequence[i+1] > sequence[i-1] || sequence[i-1] == null)) {
            sequence.splice(i, 1);
            break;
        } else if (sequence[i+1] <= sequence[i] && sequence[i+1] === sequence[i-1]) {
            sequence.splice(i+1, 1);
            break;
        } else if (sequence[i] === sequence[i+1]) {
            sequence.splice(i, 1);
            break;
        } else if (sequence[i+1] < sequence[i] && sequence[i+1] < sequence[i-1]) {
            sequence.splice(i+1, 1);
            break;
        }
                                    
    }
    for(let i = 0, x = sequence.length; i < x; i++) {
        if (sequence[i+1] <= sequence[i]) {
            return false;
        }
    }
    return true;
}
