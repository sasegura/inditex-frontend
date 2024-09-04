import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoadingPage } from '../redux/slices/mainSlice';

const useSetIsLoadingPage = (isLoading: boolean) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoadingPage(isLoading));
  }, [isLoading,dispatch]);
};
export default useSetIsLoadingPage;
