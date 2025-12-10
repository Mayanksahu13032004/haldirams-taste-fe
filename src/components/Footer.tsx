import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  quickLinks: [
    "About Us",
    "Contact Us",
    "Store Locator",
    "Blog",
    "Careers",
  ],
  categories: [
    "Savouries",
    "Mithai",
    "Bakery & Chocolates",
    "Ready To Eat",
    "Trail Mixes",
  ],
  support: [
    "FAQs",
    "Shipping Policy",
    "Return Policy",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-14 bg-haldiram-red rounded-b-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-primary-foreground text-xs font-bold">HR</div>
                  <div className="text-haldiram-yellow text-[8px] font-bold italic">Haldiram's</div>
                </div>
              </div>
              <span className="text-2xl font-bold">Haldiram's</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Serving India's favourite snacks and sweets since 1937. Experience the authentic taste of tradition with Haldiram's.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button className="bg-haldiram-red hover:bg-haldiram-red-dark">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-haldiram-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-haldiram-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-haldiram-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-wrap gap-8 justify-center text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-haldiram-red" />
              <span>Delhi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-haldiram-red" />
              <span>1800-XXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-haldiram-red" />
              <span>support@haldiram.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-foreground/50 py-4">
        <div className="container mx-auto px-4 text-center text-primary-foreground/50 text-sm">
          <p>© 2025 Haldiram's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
