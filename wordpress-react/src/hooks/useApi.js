import { useEffect, useState } from "react";

export const useApi = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    console.log(url);
    useEffect(() => {
        setLoading(true);
        
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((e) => setError("Error al leer los datos"))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};