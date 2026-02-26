import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for order form
  app.post("/api/quote", (req, res) => {
    const { name, email, phone, service, message } = req.body;
    
    console.log("--- NEW QUOTE REQUEST ---");
    console.log(`To: cbrprints22@gmail.com`);
    console.log(`From: ${name} (${email})`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);
    console.log("-------------------------");

    // In a real production app, you would use nodemailer or a service like SendGrid here.
    // For this environment, we simulate the success.
    res.json({ 
      success: true, 
      message: "Quote request received! We will get back to you shortly." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
