import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./listing-item.module.css";

export type ListingItemType = {
  className?: string;
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;

  /** Action props */
  onHomepageContainerClick?: () => void;
};

const ListingItem: NextPage<ListingItemType> = ({
  className = "",
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  onHomepageContainerClick,
}) => {
  const router = useRouter();

  const onListingItemContainerClick = useCallback(() => {
    router.push("/property-details");
  }, [router]);

  return (
    <div
      className={[styles.listingItem, className].join(" ")}
      onClick={onHomepageContainerClick}
    >
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle}>{listingTitle}</div>
            <div className={styles.listingSubtitle}>{listingSubtitle}</div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.price}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          <div className={styles.bestTime}>
            <img
              className={styles.trendIcon}
              loading="lazy"
              alt=""
              src="/trend-icon@2x.png"
            />
            <a className={styles.priceChart}>Price chart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
