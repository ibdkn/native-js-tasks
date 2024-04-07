// 1) push():
// Добавьте один или несколько элементов в конец массива

let fruits = ['apple', 'banana', 'orange'];

fruits.push('pineapple', 'lemon');
console.log(fruits); // ['apple', 'banana', 'orange', 'pineapple', 'lemon']

// 2) pop():
// Удалите последний элемент в массиве и верните этот элемент

const users1 = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: false,
    },
];

let lastUser = users1.pop();

console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }
console.log(users1); // [ { id: 1, name: 'Bob', isStudent: true },  { id: 2, name: 'Alex', isStudent: true },{ id: 3, name: 'Ann', isStudent: true }]

// 3) shift():
// Удалите первого юзера и верните его

const users2 = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: false,
    },
];

let firstUser = users2.shift();

console.log(firstUser); // { id: 1, name: 'Bob', isStudent: true }
console.log(users2); // [{ id: 2, name: 'Alex', isStudent: true },  { id: 3, name: 'Ann', isStudent: true },  { id: 4, name: 'Donald', isStudent: false }]

// 4) unshift():
// Добавьте один и более элементов в начало массива

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: false,
    },
];

users.unshift({id: 0, name: 'TestName', isStudent: false});

console.log(users); //[
//     { id: 0, name: 'TestName', isStudent: false },
//     { id: 1, name: 'Bob', isStudent: true },
//     { id: 2, name: 'Alex', isStudent: true },
//     { id: 3, name: 'Ann', isStudent: true },
//     { id: 4, name: 'Donald', isStudent: false }
//   ]

// 5) reverse(), join(), split():
// Сделать reverse слова

const str = 'JavaScript is awesome';
let res = str.split(' ').reverse().join(' ');
console.log(res); // awesome is JavaScript

// 6) concat():
// Напишите функцию mergeArrays, которая принимает на вход два массива и возвращает новый массив, содержащий все элементы из обоих массивов.

const mergeArrays = (array1, array2) => {
    return array1.concat(array2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]

// 7) flat():
// Напишите функцию JavaScript, которая сглаживает вложенный массив любой глубины

const flattenArray = (array1) => {
    return array1.flat(Infinity);
}

console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]

// 8) forEach():
// Напишите функцию JavaScript, которая вычисляет квадрат каждого элемента массива и выводит результат.

const calculateSquare = (array) => {
    return array.forEach(elem => console.log(`${elem} squared is ${elem * elem}`));
}

calculateSquare([1, 2, 3, 4, 5]);

// 9) find():
// Необходимо написать функцию findFirstElement, которая принимает на вход массив и функцию условия и возвращает первый
// элемент в массиве, удовлетворяющий условию.

const findFirstElement = (array, callback) => {
    return array.find(callback);
}

const numbers = [10, 20, 30, 40, 50];
const fruitsArr = ["яблоко", "банан", "апельсин", "киви"];

let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
console.log(firstNumberGreaterThan25); // Output: 30

let firstFruitStartingWithO = findFirstElement(fruitsArr, (fruit) => fruit.startsWith('а'));
console.log(firstFruitStartingWithO); // Output: "апельсин"

// 10) includes():
// Необходимо написать функцию checkElement, которая принимает на вход массив и элемент и возвращает true, если элемент
// присутствует в массиве, и false в противном случае.

const checkElement = (array, elem) => {
    return array.includes(elem);
}

let numbersArr = [1, 2, 3, 4, 5];
let fruitsArr2 = ['apple', 'banana', 'orange', 'kiwi'];

console.log(checkElement(numbersArr, 3)); // true
console.log(checkElement(fruitsArr2, 'grape')); // false

// 11) filter():
// Необходимо написать функцию filterGreaterThan, которая принимает на вход массив чисел и значение и возвращает новый
// массив, содержащий только элементы, превышающие указанное значение.

const filterGreaterThan = (array, num) => {
    return array.filter(elem => elem > num)
}

let numbers1 = [10, 20, 30, 40, 50];
let numbers2 = [5, 15, 25, 35, 45];

console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]

// 12) sort():
// Напишите функцию JavaScript, которая сортирует массив объектов в алфавитном порядке на основе заданного свойства.

const sortAlphabeticallyByProperty = (array, prop) => {
    return array.sort((a, b) => a[prop].localeCompare(b[prop]));
}

let people = [
 { name: 'John', age: 30 },
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 35 },
];

console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]

// 13) sort():
// Напишите функцию JavaScript, которая сортирует массив чисел в порядке убывания

const sortDescending = (array) => {
    return array.sort((a, b) => b - a);
}

let numbers3 = [5, 2, 8, 1, 4];

console.log(sortDescending(numbers3)); // [8, 5, 4, 2, 1]

// 14) map():
// Отформатируйте data в массив объектов

let data = [
 { value: 1, name: 'Option 1' },
 { value: 2, name: 'Option 2' },
 { value: 3, name: 'Option 3' },
];

let formattedData = data.map(elem => {
    return {
        value: elem.value,
        label: elem.name
    }
})

console.log(formattedData); // [
//   { value: 1, label: 'Option 1' },
// { value: 2, label: 'Option 2' },
// { value: 3, label: 'Option 3' }
// ]

// 14) map():
// У вас есть массив объектов, и вы хотите добавить к каждому объекту новое свойство на основе существующих данных.
// Этим свойством будет discountPrice, где значение будет вычисляться таким образом price * 0.9

let products = [
 { id: 1, name: 'Apple', price: 1.99 },
 { id: 2, name: 'Banana', price: 0.99 },
 { id: 3, name: 'Orange', price: 2.49 },
];

let productsWithDiscount = products.map(product => {
    return {
        ...product,
        discountedPrice: product.price * 0.9
    }
})

console.log(productsWithDiscount); // [
//   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
//   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
//   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// ]
