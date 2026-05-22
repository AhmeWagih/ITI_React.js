import { Link, NavLink } from "react-router";
import { useThemeStore } from "src/store/useThemeStore";
import { useSelector } from "react-redux";
import type { RootState } from "src/store/store";
import { useLanguage } from "src/context/LanguageContext";
import { Button } from "src/components/ui/button";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const cartCount = useSelector(
    (state: RootState) => state.cart.cartItems.length
  );
  const { language, toggleLanguage } = useLanguage();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-foreground/80 hover:bg-muted hover:text-foreground",
    ].join(" ");

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <h1 className="text-2xl font-bold">Product Gallary</h1>
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
            Cart ({cartCount})
          </NavLink>
          <NavLink to="/register" className={navLinkClass}>
            Register
          </NavLink>
          <Button variant="outline" size="lg" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
          <Button variant="outline" size="lg" onClick={toggleLanguage}>
            {language === "en" ? "عربي" : "English"}
          </Button>
          <span className="text-sm text-muted-foreground">
            {language === "en" ? "Welcome" : "مرحبا"}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
