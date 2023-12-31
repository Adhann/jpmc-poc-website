import React from "react";
import { JpmcHeader } from "jpmc-poc-components/dist/atoms";
import { JpmcLoginForm } from "jpmc-poc-components/dist/molecules";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  const onLogin = () => {
    router.push("./homepage");
  };

  const validatePassword = () => {
    const password = "jpmcphoton";

    const isAuthenticated = localStorage.getItem("is_authenticated");
    if (isAuthenticated) return;

    const inputPassword = window.prompt("Masukkan password:");
    if (inputPassword === password) {
      // @ts-ignore
      localStorage.setItem("is_authenticated", true);
    } else {
      window.location.reload();
    }
  };

  React.useEffect(() => {
    validatePassword();
  }, []);
  return (
    <div className={styles.loginPage}>
      <div className={styles.headerBackground}>
        <JpmcHeader />
      </div>
      <div className={styles.loginFormContainer}>
        <JpmcLoginForm onLogin={onLogin} />
        <Link href="#">{"Forgot username/password? ᐳ"}</Link>
        <Link href="#">{"Not Enrolled? Sign Up Now. ᐳ"}</Link>
      </div>
    </div>
  );
}
