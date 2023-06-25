import { styled } from "styled-components";

const SRegistration = styled.div`
  background-image: var(--clr-gradient);
  max-width: 1200px;
  display: flex;
  margin: 6rem auto;
  border-radius: 12px;
  width: 100%;
  .form-img {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .form-wrapper {
    flex-basis: 50%;
  }
  @media screen and (max-width: 856px) {
    .form-img {
      flex-basis: auto;
    }
    .form-wrapper {
      flex-basis: auto;
      width: 100%;
    }
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default SRegistration;
