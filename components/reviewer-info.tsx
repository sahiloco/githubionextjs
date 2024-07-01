import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./reviewer-info.module.css";

export type ReviewerInfoType = {
  className?: string;
  ellipse12?: string;
  june2023?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const ReviewerInfo: NextPage<ReviewerInfoType> = ({
  className = "",
  ellipse12,
  june2023,
  propWidth,
}) => {
  const reviewerInfoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.reviewerInfo, className].join(" ")}
      style={reviewerInfoStyle}
    >
      <img className={styles.reviewerInfoChild} alt="" src={ellipse12} />
      <div className={styles.reviewerNameDate}>
        <div className={styles.reviewerNameDate1}>
          <div className={styles.june2023}>{june2023}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewerInfo;
