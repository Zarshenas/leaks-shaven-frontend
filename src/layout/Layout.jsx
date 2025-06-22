import { Outlet } from "react-router";
import Header from "../components/layout/Header";

export default function Layout() {
  return (
    <div className="min-h-screen relative bg-background text-foreground">
        <Header />
      <div className="max-w-7xl mx-auto px-4 py-6 ">
        <Outlet />
      </div>
    </div>
  );
}
