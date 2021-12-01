// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arrayOfClasses = [];
let recClassGatherer = (startElement) => {
    if (startElement.children.length) {
        for (const child of startElement.children) {
            for (const element of child.classList) {
                arrayOfClasses.push(element);
            }
            recClassGatherer(child);
        }
    }
}
recClassGatherer(document.body);
console.log(arrayOfClasses);