import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 5173
  // },
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1000, // Ajuste o limite conforme necessário
  },
  base: `/excluir-user-sirflor`,
});
