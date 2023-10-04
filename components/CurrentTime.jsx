import React, { useState, useEffect } from 'react';

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setCurrentTime(date.toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>{currentTime}</>
    );
}

export default CurrentTime;