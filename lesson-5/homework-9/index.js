const litmir = [
    {
        author: 'Хэленка',
        title: 'Улетела сказка',
    },
    {
        author: 'Коул Кресли',
        title: 'Восстание Аркан',
    },
    {
        author: 'Райчел Мид',
        title: 'Золотая лилия',
    },
];

const sortByKey = (array, key) => {
    let res = array.sort((a, b) => (a[key] > b[key]) ? 1 : (a[key] === b[key] ? 0 : -1));
    return res.map((item) => item[key]).join(', ');
};

const result1 = sortByKey(litmir, 'title');
console.log(result1);

const result2 = sortByKey(litmir, 'author');
console.log(result2);
