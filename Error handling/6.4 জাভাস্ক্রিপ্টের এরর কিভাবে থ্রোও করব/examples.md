### Examples

- **Example 1**

```js
function div(a, b) {
  try {
    if (b <= 0) {
      throw new Error("Cannot divided by zero");
    } else {
      console.log(a / b);
    }
  } catch (error) {
    console.log(error.message);
  }
}

div(1, 1);
```

আমরা জানি কোন সংখ্যাকে যদি শূন্য দ্বারা ভাগ করা হয় তবে তার ভাগফল অসজ্ঞায়িত হয়। তাই আমরা চেক করে নিয়েছি আমাদের সংখ্যাটি কি শূণ্য কিনা যদি শূণ্য হয় তবে আমরা একটি এরর থ্রো করেছি যা আমরা catch এ এক্সেস করতে পারবো।

- **Example 2**

```js
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}
```

উপরের **getRectArea()** ফাংশনটিতে প্যারামিটার হিসেবে width, height পাঠানো হয়েছে যা দুইটিই integer হওয়ার
কথা কিন্তু আমরা একটি প্যারমিটার হিসেবে স্ট্রিং পাঠানো হয়েছে এতে আমরা আয়তক্ষেত্রটি পাবো না সেজন্য আমরা চেক করছি প্যারামিটার দুইটি Integer কিনা যদি Integer না হয় সেক্ষেত্রে আমরা একটি এরর থ্রো করছি। এররটি catch এ আমরা ধরতে পারছি।

- **Example 3**

```js
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
    } else {
      throw new Error("Failed to load Data");
    }
  } catch (error) {
    console.error(error);
    console.error("Server Error");
  }
}

getData();
```

উপরের আমরা একটি asynchronous কল করা হয়েছে ,যদি মেথডটির স্ট্যাটাস ২০০ হয় তবে success হবে আর যদি না হয় তবে আমরা একটি এরর থ্রো করছি - "Failed to load Data" এবং catch এ আমরা তা এক্সেস করতে পারতেছি।

- **Example 4**

```js
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (response.status === 200) {
      const result = await response.json();

      const id = result.userId;
      const albumsRes = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${id}`
      );
      if (albumsRes.status === 200) {
        const albums = await albumsRes.json();
        console.log(albums);
      } else {
        throw new Error("Failed to load albums data");
      }
    } else {
      throw new Error("Failed to load Todo data");
    }
  } catch (error) {
    console.log(error.message);
    console.log("Server Error");
  }
}

getData();
```

উপরে দুইটি asynchronous API কল করা হচ্ছে প্রথম কলের userId পেলে পরের API টি কল হচ্ছে এখন ধরুন যেকোন একটি API কলে এরর দিচ্ছে আমরা কিভাবে জানবো ? এর জন্য আমরা এরর throw করতে পারি যাতে আমরা নির্দিষ্টভাবে কোথায় এরর হচ্ছে সেটি ধরতে পারি।

- **Example 5**

```js
try {
  throw 52; // throws an exception with a numeric value
} catch (e) {
  if (e <= 50) {
    // statements to handle exceptions 1-50
  } else {
    // cannot handle this exception, so rethrow
    throw e;
  }
}
```

আমরা চাইলে একটি exception কে ReThrow করতে পারি।
