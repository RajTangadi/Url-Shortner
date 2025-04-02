import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
// import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LinkShortener from "./pages/LinkShortener";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<LinkShortener />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;

// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Toaster } from '@/components/ui/toaster';
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import Dashboard from './pages/Dashboard';
// import Stats from './pages/Stats';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-slate-50">
//         <Navbar />
//         <main className="container mx-auto px-4 py-8">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/stats/:shortUrl" element={<Stats />} />
//           </Routes>
//         </main>
//         <Toaster />
//       </div>
//     </Router>
//   );
// }

// export default App;
