import { useEffect } from 'react';
import { useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://whispering-tor-36819.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return { services };
};

export default useServices;