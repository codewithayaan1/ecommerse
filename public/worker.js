// worker.js
self.addEventListener('message', (event) => {
    const data = event.data;
    const result = biggerLoop(data.number);
    self.postMessage(result);
});

function biggerLoop(number) {
    let result = 0;
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    return result;
}
