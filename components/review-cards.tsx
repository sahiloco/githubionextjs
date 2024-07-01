import type { NextPage } from "next";
import ReviewerInfo from "./reviewer-info";
import styles from "./review-cards.module.css";

export type ReviewCardsType = {
  className?: string;
};

const ReviewCards: NextPage<ReviewCardsType> = ({ className = "" }) => {
  return (
    <div className={[styles.reviewCards, className].join(" ")}>
      <div className={styles.reviewcard}>
        <div className={styles.reviewCardWrapper}>
          <ReviewerInfo ellipse12="/ellipse-12@2x.png" june2023="June 2023" />
          <div className={styles.reviewContent}>
            <div className={styles.johnnyCashParent}>
              <div className={styles.johnnyCash}>Johnny Cash</div>
              <div className={styles.rating}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.michellesPlaceWas}>
          Michelle’s place was so great and definitely the perfect place for our
          long weekend. The lake is amazing!
        </div>
      </div>
      <div className={styles.reviewcard1}>
        <div className={styles.frameParent}>
          <ReviewerInfo
            ellipse12="/ellipse-12-1@2x.png"
            june2023="May 2023"
            propWidth="194px"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.wrapper}>
              <div className={styles.div}>4.5</div>
            </div>
          </div>
        </div>
        <div className={styles.theLocationIs}>
          The location is perfect. I love the lake so much!!! This is one of the
          best stays we had for a while. Definitely recommended.
        </div>
      </div>
      <div className={styles.imageCarousel}>
        <div className={styles.reviewRating}>
          <div className={styles.div1}>5.0</div>
        </div>
        <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
      </div>
      <div className={styles.reviewcard2}>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/ellipse-12-2@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.shaneWillisParent}>
                <div className={styles.shaneWillis}>Shane Willis</div>
                <div className={styles.december2022}>December 2022</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.container}>
              <div className={styles.div2}>4.8</div>
            </div>
          </div>
        </div>
        <div className={styles.aGreatPlace}>
          A great place overall. One of the nicest place in town for sure. I
          will come back in the next few months with my family :)
        </div>
      </div>
      <div className={styles.hostInfo}>
        <div className={styles.yutaWatanabe}>Yuta Watanabe</div>
        <div className={styles.hostBadge}>
          <img className={styles.vectorIcon2} alt="" src="/vector-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
