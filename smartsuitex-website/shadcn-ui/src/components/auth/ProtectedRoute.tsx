import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

// Mock authentication check - replace with actual auth logic
const isAuthenticated = () => {
  // Check if user is logged in (e.g., check localStorage, cookies, or auth context)
  const token = localStorage.getItem('authToken');
  return !!token;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to register page with the return url
    return <Navigate to="/register" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 