import express, { Express } from "express";
import cors from "cors";
import authRoutes from "../routes/auth";
import { dbConnect } from "../database/config";
import productsRouter from "../routes/products";
import orderRouter from "../routes/orders";
export class Server {
  app: Express;
  port: string | number | undefined;
  authPath: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/auth";

    this.connectToDB();
    this.middlewares();
    this.routes();
  }

  async connectToDB(): Promise<void> {
    await dbConnect();
  }
  middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(
      cors({
        origin: "https://next-clthng.vercel.app/",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        optionsSuccessStatus: 204,
      })
    );
  }
  routes(): void {
    this.app.use(this.authPath, authRoutes);
    this.app.use("/products", productsRouter);
    this.app.use("/orders", orderRouter);
  }
  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on port ${this.port} 🚀`);
    });
  }
}
