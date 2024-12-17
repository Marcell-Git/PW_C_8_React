import useAxios from '.';

export const getUserAllProfile = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.get(`/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Assuming the response structure is { data: [...] }
    } catch (error) {
        console.error("Error fetching user profiles:", error);
        throw error.response ? error.response.data : error;
    }
};

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

export const createUserProfile = async (userData) => {
    const token = sessionStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.post('/register', userData, {
            headers: {
                "Content-Type": "multipart/form-data", // Use multipart/form-data for file uploads
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Adjust according to your backend response structure
    } catch (error) {
        console.error("Error creating user profile:", error);
        throw error.response ? error.response.data : error;
    }
};

// New function to update multiple user profiles
export const updateUserAllProfile = async (users) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.put('/user/update-all', { users }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Adjust according to your backend response structure
    } catch (error) {
        console.error("Error updating user profiles:", error);
        throw error.response ? error.response.data : error;
    }
};

// Add this function to your apiContent.jsx file
export const deleteUserProfiles = async (userIds) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await useAxios.delete('/user/delete-all', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            data: {
                user_ids: userIds, // Send the array of user IDs in the request body
            },
        });
        return response.data; // Adjust according to your backend response structure
    } catch (error) {
        console.error("Error deleting user profiles:", error);
        throw error.response ? error.response.data : error;
    }
};


