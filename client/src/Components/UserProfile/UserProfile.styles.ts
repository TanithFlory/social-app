import { styled } from "styled-components";

const SUserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 325px;
  width: 100%;
  height: 493px;
  box-sizing: border-box;
  background: var(--clr-gradient);
  border-radius: 36px;
  overflow: hidden;
  & > div:first-child {
    width: 100%;
    img {
      width: 100%;
      max-height: 200px;
    }
  }
  & > div:last-child {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & > div:last-child {
      border-top: 2px solid #362f75;
      color: var(--clr-secondary);
      width: 90%;
      text-align: center;
      padding-top: 15px;
    }
  }
  h3,
  h5 {
    margin: 0;
  }
  .profile-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 2px solid #362f75;
      padding-inline: 15px;
    }
  }
`;

export default SUserProfile;
