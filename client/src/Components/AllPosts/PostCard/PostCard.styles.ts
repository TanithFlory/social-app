import { styled } from "styled-components";
const SPostCard = styled.div`
  padding: 40px;
  background: var(--clr-gradient);
  border-radius: 36px;
  max-width: 600px;
  color: #c2b3b3;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  p {
    font-size: var(--fs-300);
    text-align: justify;
  }
  h4 {
    margin: 1rem 0 0;
    font-size: var(--fs-400);
  }
  .post-interactions {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      transform: scale(1.5);
    }
    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .post-user__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 5px;
    & > div:first-child {
      display: flex;
      gap: 15px;
    }
    svg {
      transform: scale(2);
    }
  }
  .liked {
    fill: var(--clr-secondary);
  }
  @media screen and (max-width: 650px) {
    padding: 40px 15px;
    margin: 5px;
  }
`;
export default SPostCard;
