import SLogoutModal from "./LogoutModal.styles";
interface IProps {
  closeModal(): void;
}
const LogoutModal = (props: IProps) => {
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return (
    <SLogoutModal>
      <div>
        <h3>Are you sure?</h3>
        <div>
          <div onClick={logoutHandler}>Yes</div>
          <div onClick={() => props.closeModal()}>Cancel</div>
        </div>
      </div>
    </SLogoutModal>
  );
};

export default LogoutModal;
