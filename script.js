window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const prom1 = new Promise((resolve) => setTimeout(resolve, 1000, "first"));
promises.push(prom1);

const prom2 = new Promise((resolve) => setTimeout(resolve, 2000, "second"))
promises.push(prom2);

const prom3 = new Promise((resolve) => setTimeout(resolve, 3000, "three"))
promises.push(prom3);

const prom4 = new Promise((resolve) => setTimeout(resolve, 4000, "four"))
promises.push(prom4);

const prom5 = new Promise((resolve) => setTimeout(resolve, 5000, "five"))
promises.push(prom5);

const ans = Promise.any(promises).then((value) => console.log(value))

document.getElementById('output').innerText = ans;