
import { BrowserRouter } from 'react-router-dom';
import Banner from "./components/atoms/Banner/Banner";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-merriweather">
        <Banner />
      </div>
    </BrowserRouter>
  )
}

export default App