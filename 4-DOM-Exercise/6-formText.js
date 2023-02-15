function solve() {

    const textarea = document.getElementById("input").value;
    const output = document.getElementById("output");
  
    const sentances = textarea.split(".")
        .filter(x => x.length >= 1)
        .map(x => x.trim());
  
        const par = (p, text) => `<${p}>${text}</${p}>`
  let index = 0
  
        output.innerHTML = sentances
        .reduce((a, v, i) => {
            if (i % 3 === 0 && i !== 0) index += 1
            a[index] = (a[index] || "") + `${v}.`
            return a
        }, [])
        .map(x => par("p", x))
        .join("\n");
  }