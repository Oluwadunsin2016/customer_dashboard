
import BalanceCards from '../components/BalanceCards'
import BalanceChart from '../components/BalanceChart'
// import AllSpendings from '../components/AllSpendings'
import TransactionHistory from '../components/TransactionHistory'
import TransferForm from '../components/TransferForm'
import { useState } from 'react'
import Drawer from '../components/Drawer'
import Header from '../components/Header';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    console.log('something');
    
    setIsDrawerOpen(true)
  };
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div>
      <Header openDrawer={openDrawer}/>
      <BalanceCards />
        <BalanceChart />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
        <AllSpendings />
      </div> */}
        <TransactionHistory />

        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          <TransferForm/>
        </Drawer>
    </div>
  )
}

export default Dashboard
