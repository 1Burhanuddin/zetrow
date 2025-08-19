import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'




const clearCacheAndStorage = () => {
  localStorage.clear();
  
  sessionStorage.clear();
  
  
};

clearCacheAndStorage();

createRoot(document.getElementById("root")!).render(<App />);
