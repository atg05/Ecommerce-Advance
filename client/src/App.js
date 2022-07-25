import "./App.css";
import Homepage from "./containers/homepage/Homepage";
import Navbar from "./containers/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn } from "./redux/slice/userSlice";
import LoginRegisterModal from "./containers/loginRegisterModal/LoginRegisterModal";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);

  return (
    <>
      <Navbar />
      <LoginRegisterModal />
      <Homepage />
    </>
  );
}

export default App;
