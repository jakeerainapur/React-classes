import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



function App() {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);