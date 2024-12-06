import BackIcon from 'assets/svg/arrow-left-icon.svg?react';
import {useNavigate} from 'react-router-dom';

export default function HeaderBack() {
  const navigate = useNavigate();

  const BackHandler = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  return (
    <button type={'button'} onClick={BackHandler}>
      <BackIcon/>
    </button>
  );
}
