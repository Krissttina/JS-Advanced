function messages(){
    const textArea = document.querySelectorAll('textarea');
    const button = document.querySelectorAll('button');
    button[0].addEventListener('click', encode);
    button[1].addEventListener('click', decode);

    function encode(){
        let encodedMes = '';
        const input = textArea[0].value;
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            encodedMes += String.fromCharCode(element.charCodeAt(0) + 1);
        }
        textArea[1].value = encodedMes;
        textArea[0].value = '';
    }

    function decode(){
        let decodedMes = '';
        const input = textArea[1].value;
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            decodedMes += String.fromCharCode(element.charCodeAt(0) - 1);
        }
        textArea[1].value = decodedMes;
    }
}