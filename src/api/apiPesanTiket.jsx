import useAxios from '.'; // Adjust the path as necessary

// Function to book a ticket

export const pesanTiket = async ()=> {
    const token = sessionStorage.getItem("token");

    try {
        const response = await useAxios.post("/tiket", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching studio:", error);
        throw error.response ? error.response.data : error;
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
};
