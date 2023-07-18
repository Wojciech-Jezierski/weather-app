function generateMultiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    let tableRow = '';
    for (let j = 1; j <= 10; j++) {
      const product = i * j;
      tableRow += `${i} x ${j} = ${product}\t`;
    }
    console.log(tableRow);
  }
}
