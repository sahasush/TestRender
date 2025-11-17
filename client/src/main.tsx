import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { logApiConfig } from "./lib/api-config";

// Log API configuration for debugging in development
if (import.meta.env.DEV) {
  console.log('\n🔧 Frontend Environment:');
  console.log(`   Mode: ${import.meta.env.MODE}`);
  console.log(`   API URL: ${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'}`);
  logApiConfig();
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Root element not found");
}