import type { NextPage } from "next";
import { useCallback } from "react";
import Header from "../components/header";
import SocialMediaLogin from "../components/social-media-login";
import { useRouter } from "next/router";
import styles from "./sign-up-page.module.css";

const SignUpPage: NextPage = () => {
  const router = useRouter();

  const onIAlreadyHaveClick = useCallback(() => {
    router.push("/sign-in-page");
  }, [router]);

  return (
    <div className={styles.signUpPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className={styles.loginSections}>
        <div className={styles.loginFormContainer}>
          <div className={styles.form}>
            <div className={styles.formText}>
              <h2 className={styles.createAccount}>Create Account</h2>
            </div>
            <div className={styles.inputFieldsContainer}>
              <form className={styles.form1}>
                <div className={styles.formFields}>
                  <div className={styles.email}>
                    <input
                      className={styles.emailAddress}
                      placeholder="Email address"
                      type="text"
                    />
                    <img
                      className={styles.iconaccount}
                      alt=""
                      src="/iconaccount.svg"
                    />
                  </div>
                  <div className={styles.password}>
                    <input
                      className={styles.password1}
                      placeholder="Password"
                      type="text"
                    />
                    <img
                      className={styles.iconpassword}
                      alt=""
                      src="/iconpassword.svg"
                    />
                  </div>
                  <div className={styles.confirmPassword}>
                    <input
                      className={styles.confirmPassword1}
                      placeholder="Confirm password"
                      type="text"
                    />
                    <img
                      className={styles.iconpassword1}
                      alt=""
                      src="/iconpassword.svg"
                    />
                  </div>
                </div>
                <button className={styles.searchFlightsButton}>
                  <div className={styles.button}>Sign up</div>
                </button>
              </form>
              <div className={styles.inputFieldsContainerChild} />
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image="/image@2x.png"
                image1="/image-15@2x.png"
                image2="/image-21@2x.png"
              />
              <div
                className={styles.iAlreadyHaveContainer}
                onClick={onIAlreadyHaveClick}
              >
                <span>{`I already have an account. `}</span>
                <span className={styles.login}>Login</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.footerContentContainer}>
          <div className={styles.copyrightAndLinksContainer}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
