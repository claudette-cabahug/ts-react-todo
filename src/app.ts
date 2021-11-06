import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";

const app: Express = express();

app.use(cors);
app.use(routes);

mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => {
        const PORT: string | number = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}.`);
        })
    })
    .catch(error => {
        throw error;
    });