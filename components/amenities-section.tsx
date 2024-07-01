import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./amenities-section.module.css";

export type AmenitiesSectionType = {
  className?: string;
  mdilake?: string;
  lakeside?: string;
  tablertoolsKitchen2?: string;
  kitchen?: string;
  materialSymbolsnestCamIqO?: string;
  securityCamerasOnProperty?: string;
  ionwifi?: string;
  wifi?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const AmenitiesSection: NextPage<AmenitiesSectionType> = ({
  className = "",
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propFlex,
}) => {
  const amenitiesSection1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={[styles.amenitiessection1, className].join(" ")}
      style={amenitiesSection1Style}
    >
      <div className={styles.amenityIcons}>
        <img
          className={styles.mdilakeIcon}
          loading="lazy"
          alt=""
          src={mdilake}
        />
        <div className={styles.lakeside}>{lakeside}</div>
      </div>
      <div className={styles.amenityIcons1}>
        <img
          className={styles.tablertoolsKitchen2Icon}
          loading="lazy"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className={styles.kitchen}>{kitchen}</div>
      </div>
      <div className={styles.amenityIcons2}>
        <img
          className={styles.materialSymbolsnestCamIqOIcon}
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className={styles.securityCamerasOn}>
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className={styles.amenityIcons3}>
        <img
          className={styles.ionwifiIcon}
          loading="lazy"
          alt=""
          src={ionwifi}
        />
        <div className={styles.wifi}>{wifi}</div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
