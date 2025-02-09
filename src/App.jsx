import { useState } from "react";
import SideNav from "./components/SideNav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MobileSideNav from "./components/MobileSideNav";
import Navbar from "./components/Navbar";

const App = () => {
  const [current, setCurrent] = useState('home');
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };




  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1 md:grid-cols-5 w-screen">
      {/* Header */}
      <SideNav current={current} setCurrent={setCurrent} />
      <MobileSideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} current={current} setCurrent={setCurrent} />

<div className="md:col-span-4 relative h-screen overflow-auto w-full">
  <div className="fixed w-full md:w-[calc(100%-20%)]">
      <Navbar toggleSideNav={toggleSideNav} />
  </div>

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-16 space-y-6 mt-[8rem] mb-10">
<Routes>
  <Route path="/" element={<Dashboard/>} />
  <Route path="*" element={ <div>Page not available</div> } />
</Routes>
        
      </main>

      {/* <Footer /> */}
</div>
    </div>
  );
};

export default App;