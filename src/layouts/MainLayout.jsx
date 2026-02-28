import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MaintenanceWidget from '../components/common/MaintenanceWidget';
import WhatsAppWidget from '../components/common/WhatsAppWidget';
import ScrollToTop from '../components/common/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
      <MaintenanceWidget />
    </div>
  );
};

export default MainLayout;
