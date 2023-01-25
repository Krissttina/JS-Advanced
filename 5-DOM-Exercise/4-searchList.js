function search() {
    const items = Array.from(document.querySelectorAll('#towns li'));
    const result = document.querySelector('#result');
    const search = document.querySelector('#searchText');
 
    let counter = 0;
 
    items.forEach(element => {
       if(element.textContent.includes(search.value)){
          element.style.fontWeight = 'bold';
          element.style.textDecoration = 'underline';
          counter++;
       }else{
          element.style.fontWeight = 'normal';
          element.style.textDecoration = 'none';
       }
    });
    result.textContent = `${counter} matches found`;
 }