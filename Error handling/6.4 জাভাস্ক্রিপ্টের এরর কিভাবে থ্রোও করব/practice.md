- **Question 1**
 একটি ফাংশন প্যারামিটার হিসেবে একটি integer নেয় , এবং
    - যদি খালি প্যারামিটার হয় তবে ইরর দিবে **is Empty**
    - যদি Not a Number হয় তবে ইরর দিবে **not a number** ,
    - যদি ১০ এর থেকে বড় হয় তবে ইরর দিবে **too high**
    - যদি ৫ এর নিচে হয় তবে এরর দিবে **too low**
    - যদি ৫-১০ এর মধ্যে হয় তবে return দিবে **Perfect match**

- **Answer**

  ```js
  function params(x) {
    if (x == "") throw "is Empty";
    if (isNaN(x)) throw "not a number";
    if (x > 10) throw "too high";
    if (x < 5) throw "too low";
    if (x >= 5 && x <= 10) return "Perfect match";
  }

  try {
    console.log(params(7));
  } catch (error) {
    console.log(error);
  }
  ```

- **Question 2**
 একটি API কল করতে হবে যদি success হয় তবে success ম্যাসেজ দেখাতে হবে আর যদি success না হয় তবে **Failed to load data** দেখাতে হবে এবং যদি success হয় কিন্তু কোন ডাটা না থাকে তবে **Empty Data** দেখাতে হবে।

- **Answer**
  ```js
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.status === 200) {
        const result = await response.json();
        if (!result.length) {
          throw new Error("Empty Data");
        } else {
          console.log(result);
        }
      } else {
        throw new Error("Failed to load data");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  getData();
  ```
