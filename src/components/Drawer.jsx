/* eslint-disable react/prop-types */
import { Drawer as NextDrawer,  DrawerContent} from "@heroui/react"
import { IoCloseOutline } from "react-icons/io5";

const Drawer = ({isOpen,onClose,children}) => {
    console.log(isOpen);
    
  return (
        <NextDrawer isOpen={isOpen} hideCloseButton>
                      
        <DrawerContent>
            <div className="relative">       
                                <button
              className="absolute top-5 right-5 bg-gray-300 hover:bg-slate-300 rounded-full p-2 transition-colors duration-300 ease-in-out"
              onClick={onClose}
            >
              <IoCloseOutline className="text-gray-600 transition-transform duration-300 ease-in-out group-hover:rotate-90" size={24} />
            </button>
            </div>
            <div className="mt-10 px-6 py-4 ">
         {children}
            </div>
        </DrawerContent>
      </NextDrawer>
  )
}

export default Drawer
