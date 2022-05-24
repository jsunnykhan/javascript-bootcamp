- **Question 1**
 finally কি সবসময়ই কল হয় ?
- **Answer**
  > হ্যা।
- **Question 2**
 শুধু কি try লেখা যায় catch/finally ছাড়া ?

- **Answer**
  > না try এরসাথে অবশ্যই catch অথবা finally লিখতে হবে ।

- **Question 3**

 একটি asynchronous ফাংশনে API কল করে ,যদি status Code ২০০ হয় তবে ডাটা কনসোলে দেখাতে হবে এবং তা try catch দিয়ে এরর হ্যান্ডেলিং করতে হবে
  > API Endpoint : https://jsonplaceholder.typicode.com/posts


- **Answer**
```js
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

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
