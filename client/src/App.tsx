import Registration from "./Components/Registration/Registration";
import styled from "styled-components";
import Home from "./Pages/Home";
const RegistrationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

function App() {
  return (
    // <RegistrationWrapper>
    //   <Registration />
    // </RegistrationWrapper>
    <Home />
  );
}

export default App;
