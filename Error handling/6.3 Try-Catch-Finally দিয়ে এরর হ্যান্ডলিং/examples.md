### Examples

```js
try {
  JSON.parse("<html></html>");
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log("I caught a SyntaxError! I'll handle it specifically here.");
  } else {
    console.log(
      "I caught an error, but it wasn't a SyntaxError. I handle all non-SyntaxErrors here."
    );
  }
}
```

উপরের কোডটিতে SyntaxError আছে, এই ইরর হ্যান্ডেল করার জন্য আমরা try catch ইউস করতে পারি। যদি try এর ভিতরে কোন ইরর দেয় ,সেই ইরর catch এর ভিতরে ধরা হয়। catch প্যারামিটার হিসেবে একটি error রিটার্ন করে ,সেই error কে আমরা নিজেদের মতো মডিফাই করতে পারি।

```js
try {
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}
```

আমরা যদি কোন ভ্যারিয়েবল ডিক্লেয়ার না করি তবে ইরর দেয়। উপরের কোডটিতে আমরা সেটি try/catch এর মাধ্যমে হ্যান্ডেল করলাম।

```js
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
```

উপরে **nonExistentFunction()** ফাংশনটি ডিক্লেয়ার করা হয়নি ,এখানে রেফারেন্স ইরর দিবে কিন্তু আমরা try/catch এর মাধ্যমে এই ইরর হ্যান্ডেল করতে পারি।

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
      console.log("Failed to load Data");
    }
  } catch (error) {
    console.log("Server Error", error);
  }
}

getData();
```

যখন কোন Api ইউজ করা হয় তখন বিভিন্ন ধরণের ইরর আসতে পারে যেমন authentication , server error এই ইররের জন্য এপলিকেশন destroy হয়ে যেতে পারে । try/catch ব্লক ব্যবহার করে আমরা বিভিন্ন ধরনের এরর এর জন্য আমাদের প্রোগ্রাম কিরকম আচরণ করবে সেটা বলে দিতে পারি।

```js
try {
  console.log("success");
} catch (error) {
  console.log("There is a error");
} finally {
  console.log("Always calling");
}
```

Finally সবসময়ই কল হবে এটি এরর হোক আর সাক্সেস হোক।যদি আমাদের এমন কোন কাজ থাকে যে কাজটি প্রতিবারই এক্সিকিউশন হবে সেক্ষেত্রে আমরা finally ইউজ করবো। 
