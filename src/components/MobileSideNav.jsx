/* eslint-disable react/prop-types */
// import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet, MdSettings } from "react-icons/md";
import { cn } from "@heroui/react";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";


const NavItem = ({ icon, title, current, setCurrent, name,toggleSideNav,href }) => {
    const handleSelect=(name)=>{
        setCurrent(name)
        toggleSideNav()
    }
    return (
      <NavLink
      to={href}
        onClick={() => handleSelect(name)}
        className={cn(
          'flex items-center px-5 py-2 rounded-3xl text-base cursor-pointer',
          current == name ? `bg-blue-500 text-white shadow font-semibold` : 'hover:bg-black/5 opacity-80'
        )}
      >
        <div className='mr-4'>{icon}</div>
         <span>{title}</span>
      </NavLink>
    );
  };



const MobileSideNav = ({ isOpen, toggleSideNav,current,setCurrent

 }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // Animation variants for the side nav
  const sideNavVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

   const navItems=[
      { label: 'Home', name: 'home', href:'/', icon: <FaHome size="20" /> },
      { label: 'Transactions', name: 'transactions', href:'/transactions', icon: <GrTransaction size="20" /> },
      { label: 'Wallets', name: 'wallets', href:'/wallets', icon: <MdAccountBalanceWallet size="20" /> },
      { label: 'Settings', name: 'settings', href:'/settings', icon: <MdSettings size="20" /> },
    ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sideNavVariants}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-full w-full z-50 py-8 px-5 bg-[#f4f5f6]"
        >
                       <button
  className="absolute top-5 right-5 bg-gray-300 hover:bg-slate-300 rounded-full p-2 transition-colors duration-300 ease-in-out"
  onClick={toggleSideNav}
>
  <IoCloseOutline className="text-gray-600 transition-transform duration-300 ease-in-out group-hover:rotate-90" size={24} />
</button>
                 <div className="h-full flex flex-col justify-between pt-12">
      <div className={cn('flex flex-col gap-4')}>
        {navItems?.map((item, i) => (
          <NavItem
            key={i}
            icon={item.icon}
            title={item.label}
            name={item.name}
            current={current}
            setCurrent={setCurrent}
            toggleSideNav={toggleSideNav}
            href={item.href}
          />
        ))}
      </div>

      <div className="border-t pt-2">
      {/* <User
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
className="cursor-pointer"
      classNames={{description:'text-xs text-gray-400', name:'text-lg font-semibold line-clamp-1'}}
      description="Product Designer"
      name="Jane Doe"
    /> */}

    <div className="flex items-center font-semibold gap-4 bg-black/5 px-5 py-2 rounded-full mt-2 cursor-pointer">
    <CiLogout className="font-extrabold" size={20} />
        <span>Log out</span>
    </div>
      </div>
    </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileSideNav;