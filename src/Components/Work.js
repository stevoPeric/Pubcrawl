import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
    const workInfoData = [
        {
          image: PickMeals,
          title: "Quality Assurance",
          text: "We do our best, so you can have a great time! And so far we are doing an awesome job and hope to continue it!",
        },
        {
          image: ChooseMeals,
          title: "Need any Info!",
          text: "We are here for you for any information needed. Feal free to contact us at any time, we are here for you!",
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
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Work</h1>
            <p className='primary-text'>
            We understand the importance of good service. Our friendly staff is here to ensure you have a pleasant experience from start to finish.
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