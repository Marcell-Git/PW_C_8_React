import useAxios from ".";

export const postPembayaranCamilan = async (data) => {
    const token = sessionStorage.getItem("token");
    
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.post("/pembayaranCamilan", data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error posting snack:", error);
        throw error.response ? error.response.data : error;
    }
}

export const getPembayaranCamilanByUser = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.get("/showCamilanByUser", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching snack:", error);
        throw error.response ? error.response.data : error;
    }
}