function getData(callback) {
  setTimeout(() => {
    callback("Data diterima...");
  }, 1000);
}

getData((msg) => console.log(msg));

console.log(); 

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Berhasil ambil data"), 1000);
  });
}

fetchData().then(console.log);

console.log();

async function run() {
  const data = await fetchData();
  console.log(data);
}
run();

