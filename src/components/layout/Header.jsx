import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const Header = () => {
  return (
    <header className="top-0 z-50 sticky bg-background/80 slide-in-from-top-full backdrop-blur-md p-0.5 sm:px-12 border-b animate-in duration-slow fade-in">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold text-foreground">
            OnlyShare Community
          </h1>
        </Link>
        <NavigationMenu className="space-x-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>ToS & Privacy</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[150px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/tos">Terms of Service</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dmca">DMCA</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/removal">REMOVAL</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
