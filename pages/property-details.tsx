import type { NextPage } from "next";
import Header from "../components/header";
import PageBody from "../components/page-body";
import ListingDetailsSection from "../components/listing-details-section";
import ReviewCards from "../components/review-cards";
import SimilarStaysSection from "../components/similar-stays-section";
import Footer from "../components/footer";
import styles from "./property-details.module.css";

const PropertyDetails: NextPage = () => {
  return (
    <div className={styles.propertyDetails}>
      <main className={styles.mainLayout}>
        <Header
          notifications="/notifications@2x.png"
          avatar="/avatar@2x.png"
          showLoginSection
        />
        <section className={styles.pageBody}>
          <PageBody />
          <ListingDetailsSection />
          <div className={styles.reviewSection}>
            <div className={styles.reviewHeader}>
              <h3 className={styles.reviews}>Reviews</h3>
              <a className={styles.button}>View all</a>
            </div>
            <div className={styles.reviewList} />
          </div>
          <ReviewCards />
          <SimilarStaysSection />
        </section>
      </main>
      <Footer propPadding="unset" />
      <div className={styles.band}>
        <div className={styles.copyrightContent}>
          <div className={styles.copyrightDetails}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
