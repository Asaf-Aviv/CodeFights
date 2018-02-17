const allLongestStrings = inputArray => {
    const longestWordLen = Math.max(...inputArray.map(w => w.length))
    return inputArray.filter(word => word.length === longestWordLen);
}