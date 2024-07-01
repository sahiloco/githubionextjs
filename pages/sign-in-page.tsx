import type { NextPage } from "next";
import { useCallback } from "react";
import Header from "../components/header";
import SocialMediaLogin from "../components/social-media-login";
import { useRouter } from "next/router";
import styles from "./sign-in-page.module.css";

const SignInPage: NextPage = () => {
  const router = useRouter();

  const onDontHaveAnClick = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  return (
    <div className={styles.signInPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className={styles.loginSections}>
        <div className={styles.loginFormWrapper}>
          <div className={styles.form}>
            <div className={styles.formText}>
              <h2 className={styles.signIn}>Sign in</h2>
            </div>
            <div className={styles.formParent}>
              <div className={styles.form1}>
                <form className={styles.form2}>
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
                  </div>
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.button}>Sign in</div>
                  </button>
                </form>
              </div>
              <div className={styles.frameChild} />
              <SocialMediaLogin
                orSignUpWith="Or sign in with"
                image="/image1@2x.png"
                image1="/image-16@2x.png"
                image2="/image-22@2x.png"
              />
              <div
                className={styles.dontHaveAnContainer}
                onClick={onDontHaveAnClick}
              >
                <span>{`Don’t have an account yet? `}</span>
                <span className={styles.signUp}>Sign up</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.footerContentWrapper}>
          <div className={styles.footerContent}>
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

export default SignInPage;
