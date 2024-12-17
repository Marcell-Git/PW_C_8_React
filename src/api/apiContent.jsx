import useAxios from '.';

export const getUserProfile = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.get(`/user/show`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const UpdateProfile = async (id, values) => {
    try {
        const response = await useAxios.put(`/user/update/${id}`, values, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
        return response.data.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateProfilePicture = async (formData) => {
    const token = sessionStorage.getItem("token");
    try {
        const response = await useAxios.post('/user/update-profile-picture', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getProfilePictureProfil = (profilePicture) => {
    const BASE_URL = "http://127.0.0.1:8000";
    return `${BASE_URL}/storage/profile-picture/${profilePicture}`;
};
