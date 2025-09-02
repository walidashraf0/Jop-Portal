import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container px-8 mx-auto">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made by &copy; <span className="text-blue-400">John Doe</span> 2025
      </div>
    </div>
  );
};

export default AppLayout;
