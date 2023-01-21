function sortArray(arr){
    const alphabetical = arr.sort((a, b) => a.localeCompare(b));

    const numerical = alphabetical.sort((a, b) => a.length - b.length);
    console.log(numerical.join('\n'));
}

sortArray(['test', 'Deny','omen', 'Default'])