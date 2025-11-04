import { remember, recall } from "../memory/memory.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { creator, message, personality } = req.body;

  remember({ creator, message });
  const context = recall();

  const reply = `Hello ${creator}, you said: "${message}". I remember: ${context.join(" | ")}`;
  res.status(200).json({ reply });
}
