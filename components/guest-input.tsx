import type { NextPage } from "next";
import styles from "./guest-input.module.css";

export type GuestInputType = {
  className?: string;
  label?: string;
};

const GuestInput: NextPage<GuestInputType> = ({ className = "", label }) => {
  return (
    <div className={[styles.guestInput, className].join(" ")}>
      <div className={styles.label}>{label}</div>
      <div className={styles.icon}>
        <img
          className={styles.calendartodayfilledIcon}
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

export default GuestInput;
