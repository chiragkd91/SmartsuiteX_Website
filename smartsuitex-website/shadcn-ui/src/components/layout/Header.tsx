import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, X } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use multiple methods for cross-browser compatibility
      const scrollTop = window.pageYOffset || 
                       document.documentElement.scrollTop || 
                       document.body.scrollTop || 
                       0;
      setIsScrolled(scrollTop > 10);
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also listen for touch events on mobile
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const productLinks = [
    { name: "HR Management", href: "/hr-management" },
    { name: "ERP System", href: "/erp-system" },
    { name: "CRM Platform", href: "/crm-platform" },
    { name: "IT Asset Management", href: "/it-asset-management" },
    { name: "GST Compliance", href: "/gst-compliance" },
    { name: "Business Intelligence", href: "/business-intelligence" },
  ];

  const solutionsLinks = [
    { name: "Healthcare", href: "/solutions/healthcare" },
    { name: "Manufacturing", href: "/solutions/manufacturing" },
    { name: "Retail", href: "/solutions/retail" },
    { name: "Financial", href: "/solutions/financial" },
    { name: "Technology", href: "/solutions/technology" },
    { name: "Small Business", href: "/solutions/small-business" },
    { name: "Medium Business", href: "/solutions/medium-business" },
    { name: "Enterprise", href: "/solutions/enterprise" },
    { name: "Startups", href: "/solutions/startups" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
    { name: "Documentation", href: "/docs" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="md" variant="blue" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {productLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="flex items-center space-x-2">
                      <span>{link.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {solutionsLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="flex items-center space-x-2">
                      <span>{link.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="flex items-center space-x-2">
                      <span>{link.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About */}
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>

            {/* Pricing */}
            <Link to="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>

            {/* Contact */}
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Demo Button */}
            <Link to="/demo">
              <Button variant="outline">Schedule Demo</Button>
            </Link>
            {/* Customer Inquiry */}
            <Link to="/register">
              <Button>Customer Inquiry</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Logo size="md" variant="blue" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex-1 space-y-4">
                  {/* Products */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Products</h3>
                    <div className="space-y-1">
                      {productLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solutions</h3>
                    <div className="space-y-1">
                      {solutionsLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
                    <div className="space-y-1">
                      {resourcesLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Other Links */}
                  <div className="space-y-1">
                    <Link
                      to="/about"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      to="/pricing"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 pt-6 border-t">
                  <Link to="/demo" className="block">
                    <Button variant="outline" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      Schedule Demo
                    </Button>
                  </Link>
                  <Link to="/register" className="block">
                    <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      Customer Inquiry
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}