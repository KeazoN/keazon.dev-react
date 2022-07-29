import { useState, useEffect } from 'react'

export default function Loading() {
    const [loading, setLoading] = useState(false);
    return (
        useEffect(() => {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000);

            return () => clearTimeout(timer);
        }, []);
    )
}