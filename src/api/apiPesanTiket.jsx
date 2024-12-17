import useAxios from '.';

// Function to book a ticket
export const pesanTiket = async (bookingData) => {
    const token = sessionStorage.getItem("token");
    
    try {
        const response = await useAxios.post('/tiket', bookingData, {
            headers: {
                "Content-Type": "application/json", // Ensure the content type is set correctly
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Return the response data
    } catch (error) {
        throw error.response.data; // Throw the error response for handling in the component
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
