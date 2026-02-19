import "./config/env.js";
import express from "express";
import cors from "cors";
import { Message } from "./model.js";
import { dbConnect } from "./db.js";

const app = express();

// ✅ Middleware first
app.use(
  cors({
    origin: "*", // ok for now; lock to your Vercel domain later
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Health check (very useful on Render)
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// ✅ Your POST route
app.post("/", async (req, res) => {
  try {
    const { id1, id2 } = req.body;
    console.log("BODY:", req.body);

    if (!id1 || !id2) {
      return res.status(400).json({ message: "id1 and id2 are required" });
    }

    const message = await Message.create({ id1, id2 });

    return res.status(201).json({ success: true, data: message });
  } catch (error) {
    console.error("❌ Save error:", error);
    return res.status(500).json({ message: "Failed to save message" });
  }
});

// ✅ Start server only after DB connects
const PORT = process.env.PORT || 3000;

await dbConnect();

app.listen(PORT, () => {
  console.log("server started on port", PORT);
});
