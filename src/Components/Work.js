import React from 'react'
import ShotGlass from "../Assets/shot-glass.png";
import Smile from "../Assets/smile.svg";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
    const workInfoData = [
        {
          image: ShotGlass,
          title: "FREE WELCOME SHOTS",
          text: "Free welcome shot and ofcours its rakija!!!",
        },
        {
          image: Smile,
          title: "ALL YOU CAN DRINK",
          text: "All you can drink 60-minute all you can drink (Vodka, Beer).",
        },
        {
          image: DeliveryMeals,
          title: "No need for a car!",
          text: "The pubs are all in walking range and we design it so that we dont need any transportations!",
        },
      ];
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Acessories</p>
            <h1 className='primary-heading'>What You Get</h1>
            <p className='primary-text'>
                Free shots for everyone we all drink rakija, later we will try to remmeber what we did last night!!!!
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data)=>(
                <div className='work-section-info' key={data.title}>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=''/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work