function solve(cards){
    let output = [];
    let suit = '';
    let face = '';

    const faces = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
    ];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    for (let card of cards) {
            if(card.length > 2){
                face = '10';
                suit = card[2];
            }else{
                face = card[0];
                suit = card[1]
            }
            
        if(faces.includes(face) == false || suit in suits == false){ 
            throw new TypeError(`Invalid card: ${card}`);
        }else{
           output.push(face + suits[suit]);
        }
    }
    console.log(output.join(' ')); 
}

let log = [];
let oldCon = console.log;
console.log = (str) => log.push(str);

solve(['5S', '3D', 'QD', '1C']);

expect(log[0]).to.contains('Invalid card: 1C');

console.log = oldCon;