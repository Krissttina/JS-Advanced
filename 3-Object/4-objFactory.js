function factory(library, orders){
    const result = [];

    for(let order of orders){
        const curr = Object.assign({}, order.template);
        for(let part of order.parts){
            curr[part] = library[part];
        }
        result.push(curr);
    }
    return result;
}