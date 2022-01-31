import "./App.css";
import Signin from './component/Signin';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import SignUp from "./component/Signup";
import Dashboard from "./Dashboard/Dashboard";
import Error from './component/Error'
function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route index element={<SignUp/>}/>
         <Route path="/signin" element={<Signin/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path='/networklogs' element={<Dashboard/>} />
         <Route path='/appendRule' element={<Dashboard/>}/>
         <Route path="/insertRule" element={<Dashboard/>}/>
         <Route path='/attack' element={<Dashboard/>}/>
         <Route path='/delete' element={<Dashboard/>}/>
         <Route path='/logindata' element={<Dashboard/>}/>
         <Route path='/logs' element={<Dashboard/>}/>
         <Route path="*" element={<Error/>}/>
       </Routes>
    </BrowserRouter>
  );
}
export default App;
