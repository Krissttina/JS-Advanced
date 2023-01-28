function solve(areaFunc, volFunc, shapesJson) {
  const shapes = JSON.parse(shapesJson);

  const result = [];

  for (let shape of shapes) {
    const area = areaFunc.call(shape);
    const volume = volFunc.call(shape);

    const curr = {
      area,
      volume,
    };

    result.push(curr);
  }

  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

const s = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

solve(area, vol, s);
