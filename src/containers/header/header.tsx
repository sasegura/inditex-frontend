import HeaderSection from '../../components/headerSection/headerSection';
import { useSelector } from 'react-redux';
import { isLoadingPageSelector } from '../../redux/slices/mainSlice';

const Header = () => {
  const isLoadingPage = useSelector(isLoadingPageSelector);

  return <HeaderSection isLoading={isLoadingPage} />;
};

export default Header;
