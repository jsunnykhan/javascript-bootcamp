- **Question 1**

    - একটি ফাংশন যা দুইটি পজিটিভ সংখ্যা প্যারামিটার হিসেবে নেয় এবং তাদের যোগফল return করে।

- **Answer**
```js
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "This data not an integer";
  } else {
    if (a >= 0 && b >= 0) {
      return a + b;
    } else {
      return "Not a positive number";
    }
  }
}

console.log(add(-1, 2));
console.log(add("a", 2));
console.log(add(3, 2));
```

- **Question 2**
- একটি asynchronous ফাংশনে API কল করে ,যদি status Code ২০০ হয় তবে ডাটা কনসোলে দেখান
  > API Endpoint : https://jsonplaceholder.typicode.com/posts

- **Answer**

    ```js
    async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (response.status === 200) {
        const result = await response.json();
        console.log(result);
    } else {
             console.log("Failed to load Data");
    }
    }

    getData();
    ```

    - 