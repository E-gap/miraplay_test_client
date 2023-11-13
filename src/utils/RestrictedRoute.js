import { useSelector } from 'react-redux';
import { selectIsLogin } from '../redux/selectors';

import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};
