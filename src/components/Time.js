import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time, setTime] = useState(new Date().toISOString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toISOString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <time>Time : {time}</time>
    )
}

export default Time