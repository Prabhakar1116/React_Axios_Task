// importing Components
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';
import Create from './Components/Create';
import Footer from './Components/Footer';

const App = () => {
  // setting useState
  const [userId, setUserId] = useState(0);

  return (
    // Using Browser Router
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users setUserId={setUserId} />} />
          <Route path="/edit/:id" element={<Edit userId={userId} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
