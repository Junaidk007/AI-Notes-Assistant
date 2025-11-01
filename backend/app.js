import express from "express";
import 'dotenv/config';
import cors from 'cors';
import getAPIResponse from "./utils/apiModel.js";
import mongoose from "mongoose";
import router from "./routes/chat.js";
const app = express();
const port = 8080;

main().catch((err) => console.error(err));
async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
  console.info("✅ Database connection successful.");
}

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);


app.listen(port, () => console.log(`Server is running on port ${port}`));







// app.post("/test", async (req, res) => {
//   let {message} = req.body;
//   console.log(message)
//   let response = await getAPIResponse(message);
//   // console.log(response)

//   res.send(response);

// })