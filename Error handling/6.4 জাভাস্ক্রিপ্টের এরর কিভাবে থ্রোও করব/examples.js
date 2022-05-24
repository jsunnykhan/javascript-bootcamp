// function div(a, b) {
//   try {
//     if (b <= 0) {
//       throw new Error("Cannot divided by zero");
//     } else {
//       console.log(a / b);
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// div(1, 0);

// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//       throw 'Parameter is not a number!';
//     }
//   }

//   try {
//     getRectArea(3, 'A');
//   } catch (e) {
//     console.error(e);
//     // expected output: "Parameter is not a number!"
//   }

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );

//     if (response.status === 200) {
//       const result = await response.json();
//       console.log(result);
//     } else {
//       throw new Error("Failed to load Data");
//     }
//   } catch (error) {
//     console.error(error);
//     console.error("Server Error");
//   }
// }

// getData();

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );

//     if (response.status === 200) {
//       const result = await response.json();

//       const id = result.userId;
//       const albumsRes = await fetch(
//         `https://jsonplaceholder.typicode.com/albums?userId=${id}`
//       );
//       if (albumsRes.status === 200) {
//         const albums = await albumsRes.json();
//         console.log(albums);
//       } else {
//         throw new Error("Failed to load albums data");
//       }
//     } else {
//       throw new Error("Failed to load Todo data");
//     }
//   } catch (error) {
//     console.log(error.message);
//     console.log("Server Error");
//   }
// }

// getData();

// function params(x) {
//     if (x == "") throw "is Empty";
//     if (isNaN(x)) throw "not a number";
//     if (x > 10) throw "too high";
//     if (x < 5) throw "too low";
//     if (x >= 5 && x <= 10) return "Perfect match";
//   }

//   try {
//     console.log(params(7));
//   } catch (error) {
//     console.log(error);
//   }

// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/post");
//     if (response.status === 200) {
//       const result = await response.json();
//       if (!result.length) {
//         throw new Error("Empty Data");
//       } else {
//         console.log(result);
//       }
//     } else {
//       throw new Error("Failed to load data");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getData();
