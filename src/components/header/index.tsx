import HeaderMsg from './HeaderMessage';
import HeaderTitle from './HeaderTitle';

interface HeaderType {}

const Header: React.FunctionComponent<HeaderType> = (props) => {
  return (
    <>
      <HeaderTitle />
      <HeaderMsg />
    </>
  )
}

export default Header;