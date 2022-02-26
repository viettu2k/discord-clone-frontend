import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

export default function LoginPageFooter({ handleLogin, isFormValid }) {
  return (
    <>
      <CustomPrimaryButton
        label="log in"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </>
  );
}
