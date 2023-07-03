import { useState } from "react";
import PasswordInput from "../password-input";
import StrengthIndicator from "../strength-indicator";
import styles from "./strenght-block.module.scss";

const StrenghtBlock = () => {
  const [password, setPassword] = useState<string>("");
  const [colorsArray, setColorsArray] = useState<Array<string>>([
    "gray",
    "gray",
    "gray",
  ]);

  const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const checkPasswordStrength = (password: string) => {
    const passwordLength = password.length;

    if (passwordLength === 0) {
      setColorsArray(["gray", "gray", "gray"]);
    } else if (passwordLength < 8) {
      setColorsArray(["red", "red", "red"]);
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        setColorsArray(["green", "green", "green"]);
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        setColorsArray(["yellow", "yellow", "gray"]);
      } else {
        setColorsArray(["red", "gray", "gray"]);
      }
    }
  };

  return (
    <div className="container">
      <PasswordInput
        handlePasswordChange={handlePasswordChange}
        password={password}
      ></PasswordInput>
      <div className={styles.indicatorContainer}>
        {colorsArray.map((color, index) => (
          <StrengthIndicator key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default StrenghtBlock;