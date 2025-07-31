import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingScreen } from '@/components/ui/loading-screen';
import { RouteLoading } from '@/components/ui/route-loading';

import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';

// Product Pages
import HRManagementPage from './pages/products/HRManagementPage';
import ERPSystemPage from './pages/products/ERPSystemPage';
import CRMPlatformPage from './pages/products/CRMPlatformPage';
import ITAssetManagementPage from './pages/products/ITAssetManagementPage';
import GSTCompliancePage from './pages/products/GSTCompliancePage';
import BusinessIntelligencePage from './pages/products/BusinessIntelligencePage';

// Authentication Pages
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Dashboard Pages
import AnalyticsPage from './pages/dashboard/AnalyticsPage';
import UserManagementPage from './pages/dashboard/UserManagementPage';
import BillingPage from './pages/dashboard/BillingPage';
import SettingsPage from './pages/dashboard/SettingsPage';

// Solution Pages
import HealthcarePage from './pages/solutions/HealthcarePage';
import ManufacturingPage from './pages/solutions/ManufacturingPage';
import RetailPage from './pages/solutions/RetailPage';
import FinancialPage from './pages/solutions/FinancialPage';
import TechnologyPage from './pages/solutions/TechnologyPage';
import SmallBusinessPage from './pages/solutions/SmallBusinessPage';
import MediumBusinessPage from './pages/solutions/MediumBusinessPage';
import EnterprisePage from './pages/solutions/EnterprisePage';
import StartupsPage from './pages/solutions/StartupsPage';

// Other Pages
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import SupportPage from './pages/SupportPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import DocumentationPage from './pages/DocumentationPage';
import ResourcesPage from './pages/ResourcesPage';
import CookiesPage from './pages/CookiesPage';
import GDPRPage from './pages/GDPRPage';
import DemoPage from './pages/DemoPage';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

    return (
    <>
      <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <TooltipProvider>
              <BrowserRouter>
                <RouteLoading />
                <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/about" element={<Layout><AboutPage /></Layout>} />
              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
              <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
              <Route path="/demo" element={<Layout><DemoPage /></Layout>} />
              <Route path="/lander" element={<Layout><HomePage /></Layout>} />
              <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
              <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
              <Route path="/support" element={<Layout><SupportPage /></Layout>} />
              <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
              <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
              <Route path="/docs" element={<Layout><DocumentationPage /></Layout>} />
              <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
              <Route path="/cookies" element={<Layout><CookiesPage /></Layout>} />
              <Route path="/gdpr" element={<Layout><GDPRPage /></Layout>} />

              {/* Product Pages */}
              <Route path="/hr-management" element={<Layout><HRManagementPage /></Layout>} />
              <Route path="/erp-system" element={<Layout><ERPSystemPage /></Layout>} />
              <Route path="/crm-platform" element={<Layout><CRMPlatformPage /></Layout>} />
              <Route path="/it-asset-management" element={<Layout><ITAssetManagementPage /></Layout>} />
              <Route path="/gst-compliance" element={<Layout><GSTCompliancePage /></Layout>} />
              <Route path="/business-intelligence" element={<Layout><BusinessIntelligencePage /></Layout>} />

              {/* Solution Pages */}
              <Route path="/solutions/healthcare" element={<Layout><HealthcarePage /></Layout>} />
              <Route path="/solutions/manufacturing" element={<Layout><ManufacturingPage /></Layout>} />
              <Route path="/solutions/retail" element={<Layout><RetailPage /></Layout>} />
              <Route path="/solutions/financial" element={<Layout><FinancialPage /></Layout>} />
              <Route path="/solutions/technology" element={<Layout><TechnologyPage /></Layout>} />
              <Route path="/solutions/small-business" element={<Layout><SmallBusinessPage /></Layout>} />
              <Route path="/solutions/medium-business" element={<Layout><MediumBusinessPage /></Layout>} />
              <Route path="/solutions/enterprise" element={<Layout><EnterprisePage /></Layout>} />
              <Route path="/solutions/startups" element={<Layout><StartupsPage /></Layout>} />

              {/* Authentication Routes */}
              <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
              <Route path="/forgot-password" element={<Layout><ForgotPasswordPage /></Layout>} />

              {/* Protected Dashboard Routes */}
              <Route path="/dashboard/analytics" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <AnalyticsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/dashboard/users" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <UserManagementPage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/dashboard/settings" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <SettingsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/dashboard/billing" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <BillingPage />
                  </DashboardLayout>
                </ProtectedRoute>
              } />

              {/* 404 Not Found */}
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
    </>
  );
};

export default App; 