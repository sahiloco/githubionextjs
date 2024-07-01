import type { NextPage } from "next";
import GuestInput from "./guest-input";
import styles from "./hero-container.module.css";

export type HeroContainerType = {
  className?: string;
};

const HeroContainer: NextPage<HeroContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.heroContainer, className].join(" ")}>
      <div className={styles.heroContainerInner}>
        <div className={styles.frameParent}>
          <div className={styles.findAHostForEveryJourneyParent}>
            <b className={styles.findAHostContainer}>
              <span>{`Find a `}</span>
              <span className={styles.host}>host</span>
              <span> for every journey</span>
            </b>
            <h3 className={styles.discoverTheBest}>
              Discover the best local rental properties that fits your every
              travel needs
            </h3>
          </div>
          <div className={styles.form}>
            <div className={styles.autocompletebasic}>
              <input
                className={styles.locationInput}
                placeholder="Accommodation"
                type="text"
              />
              <img className={styles.iconhome} alt="" src="/iconhome.svg" />
            </div>
            <div className={styles.grouped}>
              <GuestInput label="Check-in" />
              <GuestInput label="Check-out" />
              <div className={styles.guestInput}>
                <input
                  className={styles.label}
                  placeholder="Guest"
                  type="text"
                />
                <img className={styles.iconuser} alt="" src="/iconuser.svg" />
              </div>
            </div>
            <button className={styles.searchButton}>
              <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
              <div className={styles.button}>Search</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
