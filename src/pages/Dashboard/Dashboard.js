import React from 'react';
import './DashboardLayout.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import Navbar from '../../components/Navbar/Navbar';
import LeagueActions from '../../components/LeagueActions/LeagueActions';
import CurrentLeagues from '../../components/CurrentLeagues/CurrentLeagues';
import RecentActivity from '../../components/RecentActivity/RecentActivity';
import NotificationsAndUpdates from '../../components/NotificationsAndUpdates/NotificationsAndUpdates';

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <WelcomeSection />
      <LeagueActions />
      <div className="dashboard-content">
        <CurrentLeagues />
        <RecentActivity />
        <NotificationsAndUpdates />
      </div>
    </div>
  );
}

export default Dashboard;
