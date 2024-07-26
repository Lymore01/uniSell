import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import CategoryProvider from "./contexts/CategoryContext.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/shop">
    <CategoryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CategoryProvider>
  </ClerkProvider>
);
