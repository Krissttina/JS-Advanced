function extensibleObj(){
    function ExtensibleObjs(){}
    ExtensibleObjs.prototype.extend = function(template){
        Object.entries(template).forEach(([key, value]) => {
            if(value instanceof Function){
                Object.getPrototypeOf(this)[key] = value;
            }else{
                this[key] = value;
            }
        });
    }
    return new ExtensibleObjs();
}

const myObj = extensibleObj();
console.log(myObj);

const template = {
    extensionMethod: function(){
    },
    extensionProperty: 'something'
}

myObj.extend(template);
console.log(myObj)
