import AuthForm from './AuthForm/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logOutThunk, refreshThunk } from 'redux/user-thunk';
import { selectToken } from 'redux/user-selector';
import { Button } from 'react-bootstrap';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return token ? (
    <Button type="button" onClick={() => dispatch(logOutThunk())}>
      Log Out
    </Button>
  ) : (
    <AuthForm />
  );
};
