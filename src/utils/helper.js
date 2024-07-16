export const makeSum = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

export const checkExecutionTime = async (fn, name) => {
    const start = performance.now()
    const res = await fn()
    const time = performance.now() - start
    console.log(`Execution time = ${name}`, time)
    return res
}

export const logger = (data) => console.log('Logger', data)


export const keysTill = (n) => {
    return [...Array(n).keys()].map((item => item))
}