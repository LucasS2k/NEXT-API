import mongoose from "mongoose";

export const dbConnect = async (): Promise<void> => {
  try {
    const dbURL = process.env.DB_URL;
    if (!dbURL) {
      throw new Error("URL no especificada en variables de entorno");
    }
    await mongoose.connect(dbURL);
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar DB");
  }
};
