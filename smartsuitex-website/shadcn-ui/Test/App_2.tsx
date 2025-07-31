import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import SupportPage from './pages/SupportPage';
import HRManagementPage from './pages/products/HRManagementPage';
import NotFound from './pages/NotFound';

// Authentication Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Dashboard Pages
import DashboardPage from './pages/dashboard/DashboardPage';
import CRMManagementPage from './pages/dashboard/CRMManagementPage';
import ProjectManagementPage from './pages/dashboard/ProjectManagementPage';
import InventoryManagementPage from './pages/dashboard/InventoryManagementPage';
import AnalyticsPage from './pages/dashboard/AnalyticsPage';
import UserManagementPage from './pages/dashboard/UserManagementPage';
import SettingsPage from './pages/dashboard/SettingsPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/about" element={<Layout><AboutPage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
            <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
            <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
            <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
            <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
            <Route path="/support" element={<Layout><SupportPage /></Layout>} />
            <Route path="/help" element={<Layout><SupportPage /></Layout>} />
            <Route path="/hr-management" element={<Layout><HRManagementPage /></Layout>} />
            
            {/* Authentication Routes */}
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/crm" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CRMManagementPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/projects" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ProjectManagementPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard/inventory" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <InventoryManagementPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
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
            <Route path="/dashboard/hr" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <HRManagementPage />
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
            <Route path="/dashboard/profile" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SettingsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;