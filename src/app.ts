import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";

const app: Express = express();

app.use(cors);
app.use(routes);

const uri : string =
    `mongodb+srv://
    ${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}
    @${process.env.MONGO_SERVER}/${process.env.MONGO_DB}
    ?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => {
        const PORT: string | number = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}.`);
        })
    })
    .catch(error => {
        throw error;
    });