import styles from "./password-input.module.scss";

interface PasswordInputProps {
  password: string;
  handlePasswordChange: (event:any) => void;
}

const PasswordInput = ({
  password,
  handlePasswordChange,
}: PasswordInputProps) => {
  return (
    <div className={styles.passwordInputContainer}>
      <input
        className={styles.passwordInput}
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
    </div>
  );
};

export default PasswordInput;
