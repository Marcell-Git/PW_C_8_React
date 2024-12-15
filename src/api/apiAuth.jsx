import useAxios from ".";

const SignUp = async (data) => {
  try {
    const response = await useAxios.post("/register", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Penanganan kesalahan berdasarkan status
      switch (error.response.status) {
        case 400:
          throw new Error("Input tidak valid. Silakan periksa data Anda.");
        case 409:
          throw new Error("Nama pengguna atau email sudah ada.");
        default:
          throw new Error("Terjadi kesalahan yang tidak terduga. Silakan coba lagi.");
      }
    } else {
      // Kesalahan jaringan atau tidak ada respons
      throw new Error("Kesalahan jaringan. Silakan periksa koneksi Anda.");
    }
  }
};

const SignIn = async (data) => {
  try {
    const response = await useAxios.post("/login", data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { SignUp, SignIn };
