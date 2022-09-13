import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md'
import './styles.css'

const Card: React.FC = () => {
  return (
    <>
      <div className="card">
        <div className="card_left">
          <div className="card_title">Leanne Graham</div>
          <div className="card_subtitle">incere@april.biz</div>
        </div>
        <div className="card_right">
          <div className="address_container">
            <MdLocationOn size={30} />
            <div className="address">
              <span>Kulas Light</span>
              <span>Apt. 556</span>
              <span>Gwenborough</span>
            </div>
          </div>
          <div className="address_container">
            <MdPhone size={30} />
            <div className="address">1-770-736-8031 x56442</div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Card;