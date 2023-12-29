import MotionMain from './MotionMain';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <MotionMain>
      <Outlet />
    </MotionMain>
  );
}

export default AppLayout;
