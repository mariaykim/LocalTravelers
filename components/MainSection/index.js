import React from "react"
import mainStyles from "../../styles/main.module.css"
import Image from "next/image"

const MainSection = () => {
  return (
    <div className={mainStyles.container}>
      <div className={mainStyles.text}>
        PLEEEEEEASE
      </div>
      <div className={'image-container'}>
        <Image
          src={'/images/unsplash1.jpg'}
          alt="background"
          layout="fill"
          className={'image'}
        />
      </div>
    </div>
  )
}

export default MainSection;