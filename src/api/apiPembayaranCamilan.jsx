import useAxios from ".";

export const postPembayaranCamilan = async (data) => {
    const token = sessionStorage.getItem("token");
    console.log("Token:", token);
    
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