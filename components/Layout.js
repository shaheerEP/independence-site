// components/Layout.js
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      {/* Fixed navbar background */}
      <div className="navbar-background">
        <Navbar />
      </div>
      
      {/* Main content */}
      <main className="main-content">
        {children}
      </main>
      
      <style jsx>{`
        .layout-container {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        .navbar-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: -1;
          opacity: 0.1; /* Make it subtle */
          pointer-events: none; /* Prevent interaction */
        }
        
        .main-content {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          /* Keep your existing background styles */
          background: 
            var(--animated-gradient),
            url('/india.jpg');
          background-size: 400% 400%, cover;
          background-position: center, center;
          background-repeat: no-repeat, no-repeat;
          background-attachment: fixed, fixed;
          animation: patrioticFlow 15s ease infinite;
        }
      `}</style>
    </div>
  );
}