import { useEffect, useState } from 'react';

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T[]> => {
    const [data, setData] = useState<Data<T[]>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        const controller = new AbortController(); // Para cancelar la petición si el componente se desmonta

        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(url, controller);

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.status}`);
                }

                const jsonData = await response.json();
                setData(jsonData.data || []); // <-- aquí extraes el array de la respuesta
                setError(null);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => {
            controller.abort(); // Cancela la petición si el componente se desmonta
        };

    }, [url]);

    return { data, loading, error };
}

