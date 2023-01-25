import App from './App';
import Lection2 from './Lectures/Lection2';
import Lection3 from './Lectures/Lection3';
import Lection4 from './Lectures/Lection4';
import { Route, Routes} from 'react-router-dom';

export const PATH = {
  MAIN_PAGE: "/",
  LECTION_2PAGE: "/2slss4734gliasssdfsfkol9ioq7msddds7lfd9soo",
  LECTION_3PAGE: "/3rerdsfkljghf5jhsdhni45efj04933hof8iac08on",
  LECTION_4PAGE: "/4umh4238fzj82nesdasf455gdgrjk3445621034fcuj",
}

function AppWrapp() {

  return (
    <>
      <Routes>
        <Route path={PATH.MAIN_PAGE} element={<App />} />
        <Route path={PATH.LECTION_2PAGE} element={<Lection2 />} />
        <Route path={PATH.LECTION_3PAGE} element={<Lection3 />} />
        <Route path={PATH.LECTION_4PAGE} element={<Lection4 />} />
      </Routes>
    </>
  );
}

export default AppWrapp;