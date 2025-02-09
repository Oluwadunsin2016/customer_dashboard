/* eslint-disable react/prop-types */
// import { useState } from "react";
import { cn } from "@heroui/react";
import { FaHome } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet, MdSettings } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const NavItem = ({ icon, title, current, setCurrent, name,href }) => {
    return (
      <NavLink
      to={href}
        onClick={() => setCurrent(name)}
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

const SideNav = ({ current, setCurrent }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const navItems=[
    { label: 'Home', name: 'home', href:'/', icon: <FaHome size="20" /> },
    { label: 'Transactions', name: 'transactions', href:'/transactions', icon: <GrTransaction size="20" /> },
    { label: 'Wallets', name: 'wallets', href:'/wallets', icon: <MdAccountBalanceWallet size="20" /> },
    { label: 'Settings', name: 'settings', href:'/settings', icon: <MdSettings size="20" /> },
  ]



  return (
    <div className="hidden md:block border-r border-default-200 py-8 px-5 h-full bg-[#f4f5f6] ">

          <div className="flex flex-col justify-between h-full pt-12">
      <div className={cn('flex flex-col gap-4')}>
        {navItems?.map((item, i) => (
          <NavItem
            key={i}
            icon={item.icon}
            title={item.label}
            name={item.name}
            current={current}
            setCurrent={setCurrent}
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

    </div>
  );
};

export default SideNav;