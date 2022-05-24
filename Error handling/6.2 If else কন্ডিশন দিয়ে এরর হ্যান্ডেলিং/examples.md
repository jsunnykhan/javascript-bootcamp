### Examples
- **Example 1**
```js
function add(a, b) {
  return a + b;
}

function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "This data not an integer";
  } else {
    return a + b;
  }
}

console.log(add("3", "2")); // 32
console.log(addition("3", "2")); // This data not an integer
console.log(addition(3, 2)); // 5
```

উপরের **add** ফাংশনটি দুইটি সংখ্যা যোগ করে যোগফল return দেয়, কিন্তু যদি দুইটি সংখ্যার পরিবর্তে দুইটি স্ট্রিং প্যারামিটার হিসেবে পাস করি তবে তা দুইটি স্ট্রিংকে concat করে ৩২ রেজাল্ট দেয়। সেক্ষেত্রে আময়াদের চেক করে নিতে হবে প্যারামিটার হিসেবে সে দুটি ভ্যালু পাঠানো হয়েছে তা সংখ্যা কিনা। যদি সংখ্যা না হয় তবে এরর ম্যাসেস দিবে।

- **Example 2**
```js
function convertToInt(num) {
  const result = Number.parseInt(num);

  if (!result) {
    return "Please provide a valid value";
  } else {
    return result;
  }
}

console.log(convertToInt("45.54434sd")); // 45
console.log(convertToInt("sdsadasd45.54434sd")); // Please provide a valid value
```

আবার যদি কোন ভ্যালুকে ইন্টিজারে কনভার্ট করতে চাই তাহলে আমরা সেই ভ্যালুটি valid/invalid কিনা তা if/else এর মাধ্যমে চেক করতে পারি।

- **Example 3**
```js
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (response.status === 200) {
    const result = await response.json();
    console.log(result);
  } else {
    console.log("Failed to load Data");
  }
}

getData();
```

উপরের **getData()** ফাংশনটিতে একটি asynchronous মেথড কল করা হয়েছে এবং সার্ভার থেকে ডাটা নিয়ে আসতেও পারে নাও আসতে পার ,এক্ষেত্রে আমরা if/else দিয়ে চেক করে error হ্যান্ডিলিং করতে পারি।

- **Example 4**

```js
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (response.status === 200) {
    const result = await response.json();

    const id = result.id;
    const albumsRes = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${id}`
    );
    if (albumsRes.status === 200) {
      const albums = await albumsRes.json();
      console.log(albums);
    } else {
      console.log("Failed to load Data");
    }
  } else {
    console.log("Failed to load Data");
  }
}

getData();
```

অনেক সময় আমাদের মাল্টিপল রিকোয়েস্ট নিয়ে কাজ করতে হতে পারে,সেক্ষেত্রে আমাদের প্রথম রিকোয়েস্টের আইডি নিয়ে পরের রিকোয়েস্টে পাস করতে হতে পারে ,যদি প্রথম রিকোয়েস্ট যদি আমরা না হেন্ডেল করি তবে পুরো কোডটিই আমাদের ইরর দিবে এজন্য ইরর হ্যান্ডেলিং করাটা আবশ্যক।
