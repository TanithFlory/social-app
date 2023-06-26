import Registration from "./Components/Registration/Registration";
import styled from "styled-components";
import Home from "./Pages/Home";
import { LoginContext } from "./Contexts/LoginContext";
import { useEffect, useState } from "react";
const RegistrationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

function App() {
  const [loggedIn, setLoggedIn] = useState({
    isLogged: false,
    _id: "",
  });
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") as string;
    if (accessToken) {
      const jwtObject = JSON.parse(atob(accessToken?.split(".")[1]));
      setLoggedIn({
        isLogged: true,
        _id: jwtObject._id,
      });
    }
  }, []);
  return (
    <>
      {loggedIn.isLogged ? (
        <LoginContext.Provider value={loggedIn}>
          <Home />
        </LoginContext.Provider>
      ) : (
        <RegistrationWrapper>
          <Registration />
        </RegistrationWrapper>
      )}
    </>
  );
}

export default App;
