import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },

  // base: "./",
  // resolve: {
  //   // 配置别名
  //   alias: [
  //     { find: "@", replacement: path.resolve(__dirname, "src") },
  //     // { find: "@api", replacement: path.resolve(__dirname, "src/api") },
  //   ],
  // },
});