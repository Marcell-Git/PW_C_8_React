import useAxios from '.';

export const pesanTiket = async (bookingData) => {
    const token = sessionStorage.getItem("token");
    
    try {
        const response = await useAxios.post('/tiket', bookingData, {
            headers: {
                "Content-Type": "application/json", 
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; 
    } catch (error) {
        throw error.response.data; 
    }
};

export const getNewestTiket = async () => {
    const token = sessionStorage.getItem("token");

    try {
        const response = await useAxios.get('/newestTiket', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        throw error.response.data;
    }
}
