import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex justify-center my-9">
        <Image src="/assets/logo.png" width={500} height={500} alt="logo" />
      </div>
      <div className="lg:mx-24 lg:my-12 text-xl flex flex-col gap-6">
        <p>
          Benifexim stands as a premier international export company dedicated
          to delivering unparalleled quality across diverse sectors.
          Specializing in the export of premium food, vegetables, clothing, and
          pharmaceutical products, we prioritize excellence at every stage of
          our operations. Our commitment to sourcing the finest goods is matched
          only by our dedication to global standards and client satisfaction.
        </p>
        <p>
          With a foundation rooted in reliability and integrity, Benifexim
          operates as a trusted partner for businesses seeking superior products
          on the international stage. Our comprehensive approach encompasses
          meticulous quality control, ethical business practices, and a
          relentless pursuit of excellence, ensuring that every export under the
          Benifexim name embodies the highest standards.
        </p>
        <p>
          At Benifexim, we recognize the significance of each shipment in
          shaping global experiences. Whether it's nourishing lives with
          top-tier food products, adorning the world with fashionable clothing,
          or contributing to healthcare through pharmaceutical exports, our
          mission remains unwavering – to enrich lives globally by consistently
          delivering products of the utmost quality.
        </p>
        <p>
          Partner with Benifexim for a seamless and reliable export experience,
          where precision, professionalism, and a passion for excellence
          converge to redefine international trade standards.
        </p>
      </div>
    </div>
  );
}

export default page;
