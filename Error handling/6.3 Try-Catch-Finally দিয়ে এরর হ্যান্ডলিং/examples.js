// try {
//   JSON.parse("<html></html>");
// } catch (e) {
//   if (e instanceof SyntaxError) {
//     console.log(
//       "I caught a SyntaxError! I'll handle it specifically here."
//     );
//   } else {
//     console.log(
//       "I caught an error, but it wasn't a SyntaxError. I handle all non-SyntaxErrors here."
//     );
//   }
// }

// try {
//     console.log(a);
// }
// catch(error) {
//     console.log('An error caught');
//     console.log('Error message: ' + error);
// }

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );

//     if (response.status === 200) {
//       const result = await response.json();
//       console.log(result);
//     } else {
//       console.log("Failed to load Data");
//     }
//   } catch (error) {
//     console.log("Server Error");
//   }
// }

// getData();

try {
  console.log("success");
} catch (error) {
  console.log("There is a error");
} finally {
  console.log("Always calling");
}
