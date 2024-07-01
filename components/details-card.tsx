import type { NextPage } from "next";
import styles from "./details-card.module.css";

export type DetailsCardType = {
  className?: string;
  cardRow?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;
};

const DetailsCard: NextPage<DetailsCardType> = ({
  className = "",
  cardRow,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div className={[styles.detailscard, className].join(" ")}>
      <img className={styles.cardRowIcon} loading="lazy" alt="" src={cardRow} />
      <div className={styles.cardDetails}>
        <div className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</div>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
