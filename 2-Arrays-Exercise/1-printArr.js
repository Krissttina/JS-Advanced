function printArrayWithDelimiter(arr, sign){

    console.log(arr.join(`${sign}`));
}

printArrayWithDelimiter(['One',
'Two',
'Three',
'Four',
'Five'],
'-')