import { BiSolidWalletAlt } from "react-icons/bi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { formatCurrency } from "../libs/utils";

const BalanceCards = () => {
  // const colorMap = {
  //   "blue-100": "bg-blue-100",
  //   "blue-500": "text-blue-500",
  //   "green-100": "bg-green-100",
  //   "green-500": "text-green-500",
  //   "red-100": "bg-red-100",
  //   "red-500": "text-red-500",
  // };

  const data = [
    {
      title: "Total balance",
      date_range: "2 July - 24 September 2024",
      balance: 982000,
      percentage: "+16% Last Year",
      icon: BiSolidWalletAlt,
      light_color: "blue-100",
      deep_color: "blue-500",
    },
    {
      title: "Total Income",
      date_range: "9 July - 24 September 2024",
      balance: 854348,
      percentage: "+12% Last Year",
      icon: RiMoneyDollarCircleFill,
      light_color: "green-100",
      deep_color: "green-500",
    },
    {
      title: "Total Spending",
      date_range: "24 July - 24 September 2024",
      balance: 982000,
      percentage: "-10% Last Year",
      icon: FaMoneyBill1Wave,
      light_color: "red-100",
      deep_color: "red-500",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item, i) => (
        <div
          key={i}
          className="p-5 rounded-xl flex flex-col gap-8 bg-white shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl">{item.title}</h1>
              <p className="text-gray-400 text-xs">{item.date_range}</p>
            </div>
            <div className={`bg-${item.light_color} p-3 rounded-xl`}>
              <item.icon size={20} className={`text-${item.deep_color}`} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-xl">
                {formatCurrency("USD", item.balance)}
              </h1>
              <p className={`text-${item.deep_color} text-xs`}>
                {item.percentage}
              </p>
            </div>
            <div className="w-[5rem] h-[5rem] rounded-lg">
              <img src="https://static1.squarespace.com/static/5ab3d6f89f877079e13aeac1/6012c218328a6367486e730a/60ec0456e370ac6322a82c6c/1693902713065/rule_18_social-01.png?format=1500w" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BalanceCards;
