/* eslint-disable react/prop-types */
import { User } from "@heroui/react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';



const Navbar = ({toggleSideNav}) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const dropdownVariants = {
  //   hidden: { opacity: 0, y: -20 },
  //   visible: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: -20 },
  // };
  return (
    <header className="flex justify-between md:justify-end items-center bg-white py-3 border px-8 md:px-12">
    
<div className="md:hidden" onClick={toggleSideNav}>
<CgMenu size={20} />
</div>
      <div className="flex items-center space-x-6">
      <div className="flex-grow mx-4">
        <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-[25rem] p-3 rounded-full bg-slate-100 border focus:outline-none"
          
        />
<BiSearch className="text-lg text-default-400 pointer-events-none flex-shrink-0 absolute top-4 right-3" />
        </div>
        {/* <Input size="sm" label='Search...' variant="bordered" className="border rounded-full" endContent={<BiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
}/> */}
      </div>
        {/* Message Icon */}
        <button className="relative hover:text-gray-200">
          <span className="text-2xl">💬</span>
          <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
            3
          </span>
        </button>

        {/* Notification Icon */}
        <button className="relative hover:text-gray-200">
          <span className="text-2xl">🔔</span>
          <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
            5
          </span>
        </button>
          <User
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
      className="cursor-pointer"
      // description="Product Designer"
      // name="Jane Doe"
    />
{/* <div className="relative flex items-center" onClick={toggleDropdown}>
  <MdOutlineKeyboardArrowDown size={25} />

  <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                transition={{ duration: 0.2 }}
                className="absolute top-10 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-black"
              >
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
</div> */}
      </div>
    </header>
  );
};

export default Navbar;



// const Header = ({ toggleSideNav }) => {
//   return (
//     <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
//       {/* Left Section: Fintech Icon and Menu Button */}
//       <div className="flex items-center space-x-6">
//         {/* Menu Button */}
//         <button onClick={toggleSideNav} className="text-2xl hover:text-gray-200">
//           ☰
//         </button>

//         {/* Fintech Icon */}
//         <div className="text-2xl font-bold">💳</div>
//       </div>

//       {/* Middle Section: Search Input */}
//       <div className="flex-grow mx-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full max-w-md p-2 rounded-lg bg-white bg-opacity-20 placeholder-white focus:outline-none"
//         />
//       </div>

//       {/* Right Section: Icons */}
//       <div className="flex items-center space-x-6">
//         {/* Message Icon */}
//         <button className="relative hover:text-gray-200">
//           <span className="text-2xl">💬</span>
//           <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">
//             3
//           </span>
//         </button>

//         {/* Notification Icon */}
//         <button className="relative hover:text-gray-200">
//           <span className="text-2xl">🔔</span>
//           <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">
//             5
//           </span>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;