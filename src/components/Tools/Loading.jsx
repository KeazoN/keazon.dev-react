import { useState, useEffect } from 'react'

function Loading() {
    const [loading, setLoading] = useState(false);
    return (
        useEffect(() => {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 5000);

            return () => clearTimeout(timer);
        }, []);
    )
}