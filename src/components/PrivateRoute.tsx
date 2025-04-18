import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.ts';
import { JSX } from 'react';

interface Props {
  children: JSX.Element;
  redirectTo: string;
}

function PrivateRoute({ children, redirectTo }: Props) {
  const { user, loading } = useAuth();

  if (loading) return null;

  return user ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
