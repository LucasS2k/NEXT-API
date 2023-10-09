import express, { Express } from "express";
import cors from "cors";
import authRoutes from "../routes/auth";
import { dbConnect } from "../database/config";
import bodyParser from "body-parser";
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
  }
  routes(): void {
    this.app.use(this.authPath, authRoutes);
  }
  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on port ${this.port} 🚀`);
    });
  }
}
