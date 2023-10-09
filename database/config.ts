import mongoose from "mongoose";

export const dbConnect = async (): Promise<void> => {
  try {
    const dbURL =
      "mongodb+srv://lucasnahuel2000silva:A7TuVXpeTLrAbrta@cluster0.ipihgbn.mongodb.net/";
    if (!dbURL) {
      throw new Error("URL no especificada en variables de entorno");
    }
    await mongoose.connect(dbURL);
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar DB");
  }
};
