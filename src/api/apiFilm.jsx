import useAxios from ".";

export const getFilm = async () => {
    const token = sessionStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.get("/film", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching film:", error);
        throw error.response ? error.response.data : error;
    }
};

export const createFilm = async (filmData) => {
    const token = sessionStorage.getItem("token");
    try {
        const response = await useAxios.post('http://127.0.0.1:8000/api/film', filmData, {
            headers: {
                'Content-Type': 'multipart/form-data', // This is usually not needed
                'Authorization': `Bearer ${token}`, // Include the token if required
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating film:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

// New function to update an existing film
export const updateFilm = async (id, updateData) => {
    const token = sessionStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.put(`/film/${id}`, updateData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Adjust according to your backend response structure
    } catch (error) {
        console.error("Error updating films:", error);
        throw error.response ? error.response.data : error;
    }
};

// New function to delete a film by ID
export const deleteFilm = async (id) => {
    const token = sessionStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.delete(`/film/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Adjust according to your backend response structure
    } catch (error) {
        console.error("Error deleting film:", error);
        throw error.response ? error.response.data : error;
    }
};
