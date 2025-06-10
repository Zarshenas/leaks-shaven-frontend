import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header or Navbar could go here */}
        <Outlet />
        {/* Footer could go here */}
      </div>
    </div>
  );
}