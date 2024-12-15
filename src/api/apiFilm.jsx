import useAxios from "./index";

export const getFilm = async ()=> {
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
}