import type { NextPage } from "next";
import styles from "./listing-item1.module.css";

export type ListingItem1Type = {
  className?: string;
  image?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
};

const ListingItem1: NextPage<ListingItem1Type> = ({
  className = "",
  image,
  listingTitle,
  listingSubtitle,
  rating,
  price,
}) => {
  return (
    <div className={[styles.listingItem, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img className={styles.heartIcon} alt="" src="/heart-icon-1.svg" />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle}>{listingTitle}</div>
            <div className={styles.listingSubtitle}>{listingSubtitle}</div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img className={styles.starIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.price}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          <div className={styles.bestTime}>
            <img className={styles.trendIcon} alt="" src="/trend-icon-1.svg" />
            <div className={styles.priceChart}>Price chart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem1;
