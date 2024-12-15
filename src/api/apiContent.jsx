import useAxios from '.'; // Pastikan path impor sesuai dengan struktur project Anda

export const getUserProfile = async (id) => {
    const token = sessionStorage.getItem("token");
    console.log("Token:", token); // Tambahkan log ini

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.get(`/user/show/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error.response ? error.response.data : error;
    }
};

