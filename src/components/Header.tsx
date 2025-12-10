import { Search, ShoppingCart, Heart, Menu, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navItems = [
  { name: "Savouries", hasDropdown: true },
  { name: "Mithai", hasDropdown: true },
  { name: "Bakery Cookies and Chocolates", hasDropdown: true },
  { name: "Ready To Eat And Frozen", hasDropdown: true },
  { name: "Trail Mixes and Dry Fruits", hasDropdown: true },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="block">
            <div className="w-20 h-16 bg-haldiram-red rounded-b-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-primary-foreground text-xs font-bold">HR</div>
                <div className="text-secondary text-[10px] font-bold italic">Haldiram's</div>
              </div>
            </div>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button 
            variant="default" 
            className="hidden md:flex bg-haldiram-red hover:bg-haldiram-red-dark text-primary-foreground font-semibold px-6"
          >
            CORPORATE
          </Button>
          
          {/* Search */}
          <div className="hidden md:flex items-center bg-muted rounded-full overflow-hidden">
            <Button size="icon" className="bg-haldiram-red hover:bg-haldiram-red-dark rounded-full">
              <Search className="h-4 w-4 text-primary-foreground" />
            </Button>
            <Input 
              placeholder="Search 200+ products" 
              className="border-0 bg-transparent w-48 focus-visible:ring-0"
            />
          </div>

          <Button variant="ghost" size="icon" className="text-foreground">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden md:flex text-foreground">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center justify-center gap-8 py-3 border-t border-border">
        {navItems.map((item) => (
          <button
            key={item.name}
            className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-haldiram-red transition-colors"
          >
            {item.name}
            {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
          </button>
        ))}
        
        <div className="flex items-center gap-4 ml-8">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
