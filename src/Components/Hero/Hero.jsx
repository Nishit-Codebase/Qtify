import React from "react";
import styles from "./Hero.module.css";
import HeroImage from '../../assets/Hero.png';

console.log(HeroImage)

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img className={styles.img}
          src={(HeroImage)}
          width={412}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
