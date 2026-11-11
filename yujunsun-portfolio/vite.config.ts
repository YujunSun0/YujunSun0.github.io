import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // tsconfig.path.json의 paths(@/*, @assets/*, @components/*, @pages/*)를 그대로 사용
    tsconfigPaths: true,
  },
});
