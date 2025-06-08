import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';

const Loading = () => {
    const { navigate } = useAppContext();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const nextUrl = query.get('next') || '/my-orders';

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate(nextUrl); // Redirect to the specified nextUrl
        }, 3000); // Spinner duration set to 3 seconds

        return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, [nextUrl, navigate]);

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary"></div>
        </div>
    );
};

export default Loading;