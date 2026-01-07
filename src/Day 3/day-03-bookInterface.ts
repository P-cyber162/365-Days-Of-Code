interface Book {
    title: string;
    author: string;
    pages: number;
};

const reader: Book = {
    title: 'Peter Pan',
    author: 'Anaxy',
    pages: 456,
}
const printBookInfo = (val: Book) => {
    return val
}

console.log(printBookInfo(reader));