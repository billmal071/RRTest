import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <main>
      <Header />
      <section className="max-w-screen-xl w-full mx-auto py-6 px-4">
        <Outlet />
        <Toaster />
      </section>
    </main>
  );
}
