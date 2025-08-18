import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered for cache clearing');
    })
    .catch(error => {
      console.log('Service Worker registration failed:', error);
    });
}


const clearCacheAndStorage = () => {
  localStorage.clear();
  
  sessionStorage.clear();
  
  
};

clearCacheAndStorage();

createRoot(document.getElementById("root")!).render(<App />);
