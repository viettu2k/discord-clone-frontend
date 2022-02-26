import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";

export default function LoginPageFooter({ handleLogin, isFormValid }) {
  const history = useNavigate();

  const handlePushToRegisterPage = () => {
    history("/register");
  };

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="log in"
          additionalStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
}
