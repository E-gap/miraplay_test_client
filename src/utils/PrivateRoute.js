import { useSelector } from 'react-redux';
import { selectIsLogin } from '../redux/selectors';
import { selectIsUserLoading } from '../redux/selectors';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);
  const isLoading = useSelector(selectIsUserLoading);
  const shouldRedirect = !isLogin && !isLoading;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
