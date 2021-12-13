import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const fs = require("fs");
const path = require("path");

const server = {
  host: "localhost",
  port: 8080,
  https: true,
  cert: fs.readFileSync(
    path.resolve(process.env.SSL_CERT_FILE || "localhost.pem")
  ),
  key: fs.readFileSync(
    path.resolve(process.env.SSL_KEY_FILE || "localhost-key.pem")
  ),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server,
});
