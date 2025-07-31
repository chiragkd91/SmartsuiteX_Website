import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <span className="text-2xl font-bold text-blue-600">SmartsuiteX</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Complete Business Management Suite with HR, ERP, CRM & Business Intelligence
              in One Integrated Platform designed for the Indian Market.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/hr-management" className="text-sm text-gray-600 hover:text-blue-600">
                  HR Management
                </Link>
              </li>
              <li>
                <Link to="/erp-system" className="text-sm text-gray-600 hover:text-blue-600">
                  ERP System
                </Link>
              </li>
              <li>
                <Link to="/crm-platform" className="text-sm text-gray-600 hover:text-blue-600">
                  CRM Platform
                </Link>
              </li>
              <li>
                <Link to="/business-intelligence" className="text-sm text-gray-600 hover:text-blue-600">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/it-asset-management" className="text-sm text-gray-600 hover:text-blue-600">
                  IT Asset Management
                </Link>
              </li>
              <li>
                <Link to="/gst-compliance" className="text-sm text-gray-600 hover:text-blue-600">
                  GST Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/healthcare" className="text-sm text-gray-600 hover:text-blue-600">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing" className="text-sm text-gray-600 hover:text-blue-600">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/solutions/retail" className="text-sm text-gray-600 hover:text-blue-600">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link to="/solutions/financial" className="text-sm text-gray-600 hover:text-blue-600">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link to="/solutions/technology" className="text-sm text-gray-600 hover:text-blue-600">
                  IT & Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources and Support */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/docs" className="text-sm text-gray-600 hover:text-blue-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-gray-600 hover:text-blue-600">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-gray-600 hover:text-blue-600">
                  Support Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:flex space-x-4 mb-4 md:mb-0">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-gray-600 hover:text-blue-600">
              Cookie Policy
            </Link>
            <Link to="/gdpr" className="text-sm text-gray-600 hover:text-blue-600">
              GDPR
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SmartsuiteX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}