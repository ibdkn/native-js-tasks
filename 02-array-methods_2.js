// 1) slice()

// 1.1 Напишите функцию, которая получает подстроку из строки, начиная с определенного индекса
// Пример:

let str = 'Hello, world!';
let startIndex = 7;

const getSubStr = (str, index) => {
    return str.slice(index);
}

console.log(getSubStr(str, startIndex)); // "world!"


// 1.2 Напишите функцию, которая возвращает последние n элементов массива.

const getLastElements = (array, num) => {
    return array.slice(-num);
}

console.log(getLastElements([1, 2, 3, 4, 5], 3)); // [3, 4, 5]


// 1.3 Создайте функцию, которая извлекает часть пути URL-адреса, начиная с указанного индекса.

const extractPath = (str, index) => {
    return str.slice(index);
}

console.log(extractPath('https://example.com/blog/article', 19)); // "/blog/article"


// 2) splice()

// 2.1 Напишите функцию, которая принимает массив и индекс элемента для удаления, а затем удаляет этот элемент из
// массива, модифицируя его

const removeElement = (array, index) => {
    array.splice(index, 1);
    return array;
}

let numbers1 = [1, 2, 3, 4, 5];
console.log(removeElement(numbers1, 2)); // [1, 2, 4, 5]


// 2.2 Создайте функцию, которая принимает массив, индекс и новый элемент, а затем вставляет новый элемент в указанную
// позицию массива

const insertElement = (array, index, element) => {
    array.splice(index, 0, element);
    return array;
}

let numbers2 = [1, 2, 4, 5];
console.log(insertElement(numbers2, 2, 3)); // [1, 2, 3, 4, 5]


// 3. reduce()

// 3.1 Напишите функцию, которая принимает массив чисел и использует метод reduce, чтобы вернуть сумму всех элементов
// в массиве

const sumArray = (array) => {
    return array.reduce((acc, el) => acc + el);
}

let numbers3 = [1, 2, 3, 4, 5];
console.log(sumArray(numbers3)); // 15

// 3.2 Создайте функцию, которая принимает массив строк и возвращает сумму их длин, используя метод reduce

const sumStringLengths = (array) => {
    return array.reduce((acc, el) => acc + el.length, 0);
}
console.log(sumStringLengths(['apple', 'banana', 'cherry'])); // 17

// 3.3 Напишите функцию, которая принимает массив, содержащий вложенные массивы чисел, и возвращает сумму всех чисел в
// этих массивах

const sumNestedArrays = (array) => {
    return array.reduce((total, nestedArray) => {
        return total + nestedArray.reduce((acc, el) => acc + el, 0);
    }, 0)
}

console.log(
 sumNestedArrays([
   [1, 2],
   [3, 4, 5],
   [6, 7, 8, 9],
 ])
); // 45

// 3.4 Создайте функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные
// элементы, используя метод reduce.

const removeDuplicates = (array) => {
    return array.reduce((unique, el) => {
        if(!unique.includes(el)) {
            unique.push(el);
        }
        return unique;
    }, [])
}

const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5, 6]

// 3.5 Найдите дубликаты в массиве с помощью метода reduce и верните массив дублированных элементов

const findDuplicates = (array) => {
    return array.reduce((duplicates, el, index) => {
        if (array.indexOf(el, index + 1) !== -1 && duplicates.indexOf(el) === -1) {
            duplicates.push(el);
        }
        return duplicates;
    }, [])
}

const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicatesArray = findDuplicates(array);
console.log(duplicatesArray); // [2, 4, 5]

// 3.6 Напишите функцию, которая принимает массив строк и возвращает объект, в котором ключи - это уникальные строки,
// а значения - количество их вхождений в массив

const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];

const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(wordCount); // Output: { apple: 3, banana: 2, cherry: 1 }

// 3.7 Создайте функцию, которая принимает массив объектов и возвращает массив значений определенного свойства объектов

const getPropertyValues = (array, property) => {
    return array.reduce((acc, el) => {
        acc.push(el[property])
        return acc;
    }, [])
}

const people = [
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 30 },
 { name: 'Charlie', age: 22 },
];

const names = getPropertyValues(people, 'name');
console.log(names); // ['Alice', 'Bob', 'Charlie']