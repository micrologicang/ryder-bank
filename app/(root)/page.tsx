import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggedIn = { firstName: 'Josh', lastName: 'Obaje', email: 'obaje.josh@gmail.com' };

  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
          <header className="flex flex-col justify-between gap-8">
              <HeaderBox 
                type="greeting"
                title="Welcome"
                user = { loggedIn?.firstName || 'Guest' } 
                subtext="Access and manage your account and transaction efficiently."
              />

              <TotalBalanceBox 
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance={1670.45}
              />
          </header>

          RECENT TRANSACTIONS
      </div>

      <RightSideBar
        user={loggedIn}
        transanctions={[]}
        banks={[{ currentBalance: 245.59 }, { currentBalance: 450.50 }]}
      />
    </section>
  )
}

export default Home