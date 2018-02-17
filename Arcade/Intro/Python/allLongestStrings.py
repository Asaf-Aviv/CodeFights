def allLongestStrings(inputArray):
    return map(filter(lambda word: word.len == max(key=lambda word: len(word), inputArray)