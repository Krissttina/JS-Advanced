function solve() {
    const input = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');
    
    const pascal = (text) => text.split(' ')
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join('');
  
    const camel = (text) => {
      text = pascal(text);
      return text[0].toLowerCase() + text.slice(1);
    }
  
    
  
    if(convention === 'Pascal Case'){
      result.textContent = pascal(input);
    }else if(convention === 'Camel Case'){
      result.textContent = camel(input);
    }else{
      result.textContent = 'Error!';
    }
  }