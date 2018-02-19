const arrayReplace = (arr, elemToReplace, substitutionElem) => {
    return arr.map(e => e === elemToReplace ? substitutionElem : e);
}