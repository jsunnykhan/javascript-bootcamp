### Examples

- **Example 1**
```js
JSON.parse("<html></html>");
```

উপরের কোডটির আউটপুট কি আসবে?

> SyntaxError: Unexpected token < in JSON at position 0
 আসছে, কারণ আমরা যখন **JSON parse** করি তখন একটি valid JSON ডাটা দিতে হয়, html কোন valid JSON formate না।

- **Example 2**

```js
const value = 10;
value = 20;
```

আমরা অনেক সময় Constant ভ্যারিয়েবলের মধ্যে একাধিকবার ভ্যালু এসাইন করি ,যার জন্য **TypeError** দেখায়,আমরা Constant ভ্যারিয়েবলে একবার ভ্যালু এসাইন করতে পারি যদি একই ভ্যারিয়েবলে আবার ভ্যালু এসাইন করতে হয়,সেক্ষেত্রে আমরা const এর পরিবর্তে let ব্যাবহার করবো।

- **Example 3**

```js
const case = 20;
```

উপরের লাইনটি সিনট্যাক্স এরর এর একটি উদাহরণ। এখানে **case** হচ্ছে JavaScript এর নিজস্ব রিজার্ভ ওয়ার্ড,আমরা কখনোই রিজার্ভ ওয়ার্ডকে ভ্যারিয়েবল হিসেবে ব্যাবহার করতে পারবো না।

- **Example 4**

```js
while(1){
    console.log("object");
}
```

এখানে লজিক্যাল এরর হয়েছে , লুপটি অনন্তকালের জন্য চলবে কারণ এই লুপটি কখনই false হবে না।