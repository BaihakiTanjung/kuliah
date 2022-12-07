// synchronous
console.log("1");
console.log("2");
console.log("3");

// callback
function formatName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function getName(name, callback) {
  const result = callback(name);
  console.log(result);
}

getName("mohamed", formatName);

// setTimeout
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

// Asynchronous
const persiapan = () => {
  setTimeout(() => {
    console.log("Persiapan");
  }, 3000);
};

const rebusAir = () => {
  setTimeout(() => {
    console.log("Rebus Air");
  }, 7000);
};

const masak = () => {
  setTimeout(() => {
    console.log("Masak");
    console.log("Selesai");
  }, 5000);
};

persiapan();
rebusAir();
masak();

// Promise
const promise = new Promise((resolve, reject) => {
  const isSucceed = true;
  if (isSucceed) {
    resolve;
  } else {
    reject;
  }
});

promise;

// async await
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};

getData();
