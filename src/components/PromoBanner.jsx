import React from "react";
import Link from "./Link";

/**
 * Настраиваемый компонент для баннера
 * @param {*} props
 * @returns
 */

const PromoBanner = (props) => {
  return (
    <div className={props.bannerClasses}>
      <Link className={props.linkClasses} href={props.href}>
        <img
          className={props.imageClasses}
          src={props.inageURL}
          alt="promo banner"
        />
      </Link>
    </div>
  );
};
export default PromoBanner;