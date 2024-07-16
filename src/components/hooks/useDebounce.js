import { useEffect, useState } from 'react'

export const useDebounce = (initValue, delay) => {
    const [value, setValue] = useState(initValue);

    useEffect(() => {
        let timer;
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            setValue(initValue);
        }, delay)

        return () => clearTimeout(timer)
    }, [initValue, delay])

    return value


}
