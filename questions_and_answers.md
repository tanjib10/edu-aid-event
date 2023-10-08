<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

A: {}
<i>Write your explanation here</i>

The answer will be "A" because we have declared greetign and set its value to `{}` .So "A" will be the output.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

C : "12"
<i>Write your explanation here</i>

The answer will be "12" because the argument of 'a' is a number but 'b' is a string,so it will be concatenated and return the output as "12".

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

A : `['🍕', '🍫', '🥑', '🍔']`
<i>Write your explanation here</i>

Because we only changed the value of object property, it won't change the array.So it will remain the same as it was.

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

B : `Hi there, undefined`
<i>Write your explanation here</i>
Because when we called the function we didn't give any arguments,without an argument it will give undefined.

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

C : 3
<i>Write your explanation here</i>

As per the condition, if num = true the value of count will be incremented.At first the loop will take 0 and it will not increment it because 0 is not truthy.then it will take 1,as 1 is truthy it will increment the count to (0+1) = 1.Then it will take 2 which is also a truthy so the value of count will be (1+1) = 2.At last the last index of the array which is 3 which is also truthy so it will increment the value of count again (2+1) = 3.So the final output will be 3.

</p>
</details>
