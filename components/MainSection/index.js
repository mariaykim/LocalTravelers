import React from "react"
import mainStyles from "../../styles/main.module.css"
import Image from "next/image"

const MainSection = () => {
  return (
    <div className={mainStyles.container}>
      <img className={mainStyles.image} src="/images/unsplash2.png"></img>
      <div className={mainStyles.centered}> PLEASEEEEE!!! </div>
        {/* <Image
          src={'/images/unsplash1.jpg'}
          alt="background"
          layout="responsive"
          height="700"
          width="1180"
          className={mainStyles.image}

        /> */}
    </div>
  )
}

export default MainSection;