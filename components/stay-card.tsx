import type { NextPage } from "next";
import styles from "./stay-card.module.css";

export type StayCardType = {
  className?: string;
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;
};

const StayCard: NextPage<StayCardType> = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
}) => {
  return (
    <div className={[styles.staycard, className].join(" ")}>
      <div className={styles.stayCardHeader}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.stayDetails}>
        <div className={styles.stayTitleLocation}>
          <div className={styles.stayNameLocation}>
            <div className={styles.brightwoodsEstate}>{brightwoodsEstate}</div>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.stayRating}>
            <div className={styles.div}>4.8</div>
            <img className={styles.vectorIcon1} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.stayPriceGuests}>
          <div className={styles.stayPrice}>
            <div className={styles.div1}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
