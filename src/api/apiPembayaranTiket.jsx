import useAxios from ".";

export const postPembayaranTiket = async (data) => {
    const token = sessionStorage.getItem("token");
    
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.post("/pembayaranTiket", data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error posting ticket:", error);
        throw error.response ? error.response.data : error;
    }
}

export const getPembayaranTiketByUser = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.get("/showTiketByUser", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching ticket:", error);
        throw error.response ? error.response.data : error;
    }
}