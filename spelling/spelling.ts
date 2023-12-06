const toSpell = (word: string): string => {
    
    return word.split("").join("-")
}

console.log(toSpell("programador"));
