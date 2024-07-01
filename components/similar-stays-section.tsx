import type { NextPage } from "next";
import StayCard from "./stay-card";
import styles from "./similar-stays-section.module.css";

export type SimilarStaysSectionType = {
  className?: string;
};

const SimilarStaysSection: NextPage<SimilarStaysSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.similarStaysSection, className].join(" ")}>
      <div className={styles.similarStaysHeader}>
        <h3 className={styles.similarStays}>Similar stays</h3>
        <a className={styles.button}>View all</a>
      </div>
      <div className={styles.stayCardList}>
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className={styles.staycard}>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <div className={styles.wrapperHeartIcon}>
              <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.urbanLoftParent}>
                <div className={styles.urbanLoft}>Urban Loft</div>
                <div className={styles.urbanLoft1}>Urban Loft</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>4.8</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.group}>
                <div className={styles.div1}>$502</div>
                <div className={styles.night}>/night</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
        />
      </div>
    </div>
  );
};

export default SimilarStaysSection;
