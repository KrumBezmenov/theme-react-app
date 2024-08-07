import { Navigate, Outlet, useLocation } from "react-router-dom";

export const isAuthenticated = () => {
  return false;
};

export const PublicRoutes = () => {
  const location = useLocation();

  return isAuthenticated() ? (
    <Navigate to="/profile" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export const ProtectedRoutes = () => {
  const location = useLocation();

  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default function RouteGuard() {
  const isAuthenticated = () => {
    return false;
  };

  if (isAuthenticated) {
    return <Navigate to="/login" />;
  }
}
