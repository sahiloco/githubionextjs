import type { NextPage } from "next";
import styles from "./page-body.module.css";

export type PageBodyType = {
  className?: string;
};

const PageBody: NextPage<PageBodyType> = ({ className = "" }) => {
  return (
    <div className={[styles.pageBody, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <img
          className={styles.leftSidebarIcon}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.listingGrid}>
          <img
            className={styles.listingRowIcon}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.listingRowIcon1}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.listingRowIcon2}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.listingRowIcon3}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.listingRow}>
            <img
              className={styles.listingPlaceholderIcon}
              alt=""
              src="/listing-placeholder@2x.png"
            />
            <img
              className={styles.listingSeparatorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.listingCard}>
        <div className={styles.infoContent}>
          <div className={styles.detailsContent}>
            <div className={styles.detailsContainer}>
              <div className={styles.cabinDetails}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.ratingDetails}>
              <div className={styles.rating}>
                <div className={styles.ratingValue}>5.0</div>
                <img
                  className={styles.ratingStarsIcon}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.reviewsCountContainer}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.booking}>
          <div className={styles.bookingDetails}>
            <div className={styles.bookingContainer}>
              <b className={styles.price}>$658</b>
              <div className={styles.nightlyRate}>
                <a className={styles.night}>/night</a>
              </div>
            </div>
            <div className={styles.bookingCta}>
              <div className={styles.ctaWrapper}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.trendBackground} />
                  </div>
                </div>
                <div className={styles.bookingLabel}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.searchFlightsButton}>
            <div className={styles.button}>Book this home</div>
          </button>
        </div>
        <div className={styles.hostedByParent}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.hostDetails}>
            <img
              className={styles.hostAvatarIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.hostName}>
              <div className={styles.michelleWard}>Michelle Ward</div>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.hostBadgeDetails}>
              <img className={styles.badgeIcon} alt="" src="/vector-2.svg" />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBody;
