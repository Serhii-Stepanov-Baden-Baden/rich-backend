import { remember, recall } from "../memory/memory.js";

export default async function handler(req, res) {
  const method = req.method;
  const { creator = "Гость", message = "Нет сообщения", personality = "default" } = req.body || {};

  // Обработка разных методов
  switch (method) {
    case "POST":
      remember({ creator, message });
      const context = recall();
      return res.status(200).json({
        reply: `Привет, ${creator}! Ты сказал: "${message}". Я помню: ${context.join(" | ")}`
      });

    case "GET":
      return res.status(200).json({
        status: "RICH активен",
        usage: "Отправь POST-запрос с полями creator, message, personality"
      });

    case "PUT":
      return res.status(200).json({ message: "PUT-запрос принят, но пока не обрабатывается." });

    case "DELETE":
      return res.status(200).json({ message: "DELETE-запрос принят, но пока не обрабатывается." });

    default:
      return res.status(200).json({ message: `Метод ${method} принят, но не имеет логики.` });
  }
}
