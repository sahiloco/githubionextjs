import type { NextPage } from "next";
import DetailsCard from "./details-card";
import AmenitiesSection from "./amenities-section";
import styles from "./listing-details-section.module.css";

export type ListingDetailsSectionType = {
  className?: string;
};

const ListingDetailsSection: NextPage<ListingDetailsSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.listingDetailsSection, className].join(" ")}>
      <div className={styles.listingDescription}>
        <h3 className={styles.aboutThisHome}>About this home</h3>
        <div className={styles.descriptionContent}>
          <div className={styles.readMore}>
            <div className={styles.welcomeToBrightwoodsContainer}>
              <p className={styles.welcomeToBrightwoods}>
                Welcome to Brightwoods Cabin, your idyllic retreat nestled in
                the heart of Bridlepath, Ontario! Our cozy cabin, surrounded by
                the tranquility of nature's embrace, is designed to provide the
                ultimate relaxing getaway.
              </p>
              <p className={styles.livingSpaceThisCharmingCa}>
                <b className={styles.livingSpace}>{`Living Space: `}</b>
                <span>
                  This charming cabin boasts a spacious living area adorned with
                  rustic decor and modern amenities. Enjoy the warmth of the
                  wood-burning fireplace, relax on the plush sofas, and make
                  yourself at home with our entertainment center featuring a
                  flat-screen TV, WiFi, and more.
                </span>
              </p>
              <p className={styles.bedroomsWith3BeautifullyA}>
                <b className={styles.bedrooms}>Bedrooms:</b>
                <span>
                  {" "}
                  With 3 beautifully appointed bedrooms, our cabin comfortably
                  accommodates up to [number of guests]. Each room is furnished
                  with luxurious bedding and unique woodland-inspired touches to
                  ensure a restful slumber.
                </span>
              </p>
              <p className={styles.kitchenDiningOurFullyEq}>
                <b className={styles.kitchenDining}>{`Kitchen & Dining:`}</b>
                <span>
                  {" "}
                  Our fully-equipped kitchen offers everything you need to
                  prepare delicious home-cooked meals. The open dining area
                  provides a welcoming space to enjoy meals with friends and
                  family.
                </span>
              </p>
              <p className={styles.bathrooms2ModernBathrooms}>
                <b className={styles.bathrooms}>Bathrooms:</b>
                <span>
                  {" "}
                  2 modern bathrooms stocked with fresh towels, toiletries, and
                  all essential amenities add to your convenience.
                </span>
              </p>
              <p className={styles.outdoorSpaceStepOutsideTo}>
                <b className={styles.outdoorSpace}>Outdoor Space:</b>
                <span>
                  {" "}
                  Step outside to a serene outdoor setting. Whether it's a
                  morning coffee on the porch, a BBQ in the yard, or a soothing
                  evening by the fire pit, the beauty of Bridlepath is at your
                  doorstep.
                </span>
              </p>
              <p className={styles.locationLocatedJustMinutes}>
                <b className={styles.location}>Location:</b>
                <span>
                  {" "}
                  Located just minutes from [local attractions, trails, dining,
                  shopping], our cabin offers the perfect base to explore the
                  best of the region or simply unwind in seclusion.
                </span>
              </p>
              <p className={styles.hostedWithLoveWeTakePrid}>
                <b className={styles.hostedWithLove}>Hosted with Love:</b>
                <span>
                  {" "}
                  We take pride in hosting our guests and are committed to
                  making your stay unforgettable. We're just a call or message
                  away should you need anything during your stay.
                </span>
              </p>
              <p className={styles.comeBeOur}>
                Come, be our guest at [Cabin Name], and experience a piece of
                woodland serenity right here in Bridlepath, Ontario. Book now
                and make yourself at home!
              </p>
            </div>
            <div className={styles.button}>Show more</div>
          </div>
          <div className={styles.detailsCards}>
            <DetailsCard
              cardRow="/frame-65.svg"
              dedicatedWorkspace="Dedicated workspace"
              aPrivateRoomEquippedWithW="A private room equipped with WiFi"
            />
            <DetailsCard
              cardRow="/frame-65-1.svg"
              dedicatedWorkspace="Self check-in"
              aPrivateRoomEquippedWithW="Check in with just your phone"
            />
            <DetailsCard
              cardRow="/frame-65-2.svg"
              dedicatedWorkspace="Free cancellation"
              aPrivateRoomEquippedWithW="Cancel anytime"
            />
          </div>
        </div>
      </div>
      <div className={styles.locationAmenities}>
        <div className={styles.amenitiesContainer}>
          <h3 className={styles.amenities}>Amenities</h3>
          <div className={styles.amenitiesContent}>
            <div className={styles.amenitiessection1Parent}>
              <AmenitiesSection
                mdilake="/mdilake.svg"
                lakeside="Lakeside"
                tablertoolsKitchen2="/tablertoolskitchen2.svg"
                kitchen="Kitchen"
                materialSymbolsnestCamIqO="/materialsymbolsnestcamiqoutdooroutline.svg"
                securityCamerasOnProperty="Security cameras on property"
                ionwifi="/ionwifi.svg"
                wifi="Wifi"
              />
              <AmenitiesSection
                mdilake="/phcar.svg"
                lakeside="Free parking"
                tablertoolsKitchen2="/cilshower.svg"
                kitchen="Outdoor shower"
                materialSymbolsnestCamIqO="/materialsymbolswatervocoutlinerounded.svg"
                securityCamerasOnProperty="Hot water"
                ionwifi="/covidpersonalhygienehandliquidsoap.svg"
                wifi="Shampoo"
                propFlex="0.6055"
              />
              <AmenitiesSection
                mdilake="/phfireextinguisher.svg"
                lakeside="Fire Extinguisher"
                tablertoolsKitchen2="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                kitchen="Freezer"
                materialSymbolsnestCamIqO="/materialsymbolscoffeemakeroutline.svg"
                securityCamerasOnProperty="Coffee Maker"
                ionwifi="/mdistove.svg"
                wifi="Glass stove"
                propFlex="0.6307"
              />
            </div>
            <button className={styles.searchFlightsButton}>
              <div className={styles.button1}>Show all amenities</div>
            </button>
          </div>
        </div>
        <div className={styles.location1}>
          <div className={styles.locationContainer}>
            <div className={styles.locationContent}>
              <div className={styles.locationDetails}>
                <h3 className={styles.whereYoullBe}>Where you’ll be</h3>
                <div className={styles.locationName}>
                  <img
                    className={styles.locationPinIcon}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <div className={styles.theBridlePath}>The Bridle Path</div>
                </div>
              </div>
              <div className={styles.weather}>
                <div className={styles.weatherInfo}>
                  <img
                    className={styles.suncloudIcon}
                    loading="lazy"
                    alt=""
                    src="/suncloud.svg"
                  />
                  <div className={styles.weatherInfo1}>
                    <div className={styles.temperature}>20°C</div>
                    <div className={styles.weatherDetail}>Broken clouds</div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.sunParent}>
                    <img className={styles.sunIcon} alt="" src="/sun.svg" />
                    <div className={styles.cWrapper}>
                      <b className={styles.c}>23°C</b>
                    </div>
                  </div>
                  <div className={styles.sunGroup}>
                    <div className={styles.sun}>Sun</div>
                    <div className={styles.aug}>27 Aug</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.suncloudParent}>
                    <img
                      className={styles.suncloudIcon1}
                      alt=""
                      src="/suncloud-1.svg"
                    />
                    <div className={styles.cContainer}>
                      <b className={styles.c1}>22°C</b>
                    </div>
                  </div>
                  <div className={styles.monParent}>
                    <div className={styles.mon}>Mon</div>
                    <div className={styles.aug1}>28 Aug</div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sunContainer}>
                    <img className={styles.sunIcon1} alt="" src="/sun.svg" />
                    <div className={styles.cFrame}>
                      <b className={styles.c2}>23°C</b>
                    </div>
                  </div>
                  <div className={styles.tueParent}>
                    <div className={styles.tue}>Tue</div>
                    <div className={styles.aug2}>29 Aug</div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.suncloudGroup}>
                    <img
                      className={styles.suncloudIcon2}
                      alt=""
                      src="/suncloud-1.svg"
                    />
                    <div className={styles.cWrapper1}>
                      <b className={styles.c3}>20°C</b>
                    </div>
                  </div>
                  <div className={styles.wedParent}>
                    <div className={styles.wed}>Wed</div>
                    <div className={styles.aug3}>30 Aug</div>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.suncloudContainer}>
                    <img
                      className={styles.suncloudIcon3}
                      alt=""
                      src="/suncloud-1.svg"
                    />
                    <div className={styles.cWrapper2}>
                      <b className={styles.c4}>19°C</b>
                    </div>
                  </div>
                  <div className={styles.thuParent}>
                    <div className={styles.thu}>Thu</div>
                    <div className={styles.aug4}>31 Aug</div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sunParent1}>
                    <img className={styles.sunIcon2} alt="" src="/sun.svg" />
                    <div className={styles.cWrapper3}>
                      <b className={styles.c5}>24°C</b>
                    </div>
                  </div>
                  <div className={styles.friParent}>
                    <div className={styles.fri}>Fri</div>
                    <div className={styles.sep}>1 Sep</div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.mapIcon} alt="" src="/map1@2x.png" />
            <img
              className={styles.mapPlaceholderIcon}
              loading="lazy"
              alt=""
              src="/frame-92.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsSection;
