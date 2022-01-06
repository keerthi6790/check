import "./App.css";
import data from "./Data/data.json";
import DataTable from "./component/DataTable";
import Signin from './component/Signin';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import SignUp from "./component/Signup";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route index element={<SignUp/>}/>
         <Route path="/signin" element={<Signin/>}/>
         <Route path="/table" element={<DataTable/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
