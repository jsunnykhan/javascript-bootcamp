// function add(a, b) {
//   return a + b;
// }

// function addition(a, b) {
//   if (typeof a !== "number" && typeof b !== "number") {
//     return "This data not an integer";
//   } else {
//     return a + b;
//   }
// }

// console.log(add("3", "2")); // 32
// console.log(addition("3", "2")); // This data not an integer
// console.log(addition(3, 2)); // 5

// function convertToInt(num) {
//   const result = Number.parseInt(num);

//   if (!result) {
//     return "Please provide a valid value";
//   } else {
//     return result;
//   }
// }

// console.log(convertToInt("45.54434sd")); // 45
// console.log(convertToInt("sdsadasd45.54434sd")); // Please provide a valid value

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//   if (response.status === 200) {
//     const result = await response.json();

//     const id = result.id;
//     const albumsRes = await fetch(
//       `https://jsonplaceholder.typicode.com/albums?userId=${id}`
//     );
//     if (albumsRes.status === 200) {
//       const albums = await albumsRes.json();
//       console.log(albums);
//     } else {
//       console.log("Failed to load Data");
//     }
//   } else {
//     console.log("Failed to load Data");
//   }
// }

// getData();

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//   if (response.status === 200) {
//     const result = await response.json();
//     console.log(result);
//   } else {
//     console.log("Failed to load Data");
//   }
// }

// getData();

// function add(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "This data not an integer";
//   } else {
//     if (a >= 0 && b >= 0) {
//       return a + b;
//     } else {
//       return "Not a positive number";
//     }
//   }
// }

// console.log(add(-1, 2));
// console.log(add("a", 2));
// console.log(add(3, 2));



(function () {
  try {
      throw new Error();
  } catch (x) {
      var x = 1, y = 2;
      console.log({x});
  }
  console.log(x);
  console.log(y);
})();