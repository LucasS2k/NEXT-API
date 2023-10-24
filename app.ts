import dotenv from "dotenv";
import express from "express";
import { Server } from "./models/server";
dotenv.config();
const server = new Server();
server.listen();
