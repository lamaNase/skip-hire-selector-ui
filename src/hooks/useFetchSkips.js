import { useEffect, useState } from "react";

export default function useFetchSkips() {
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkips = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_SKIP_DATA);
                if (!response.ok) throw new Error("Failed to fetch skips");

                const data = await response.json();
                setSkips(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSkips();
    }, []);

    return { skips, loading, error };
}