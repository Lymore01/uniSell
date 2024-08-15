import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider.tsx";
import CategoryProvider from "./contexts/CategoryContext.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <CategoryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CategoryProvider>
 
);
