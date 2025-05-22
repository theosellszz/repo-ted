import React from 'react';

const Checkout = () => {
  const phoneNumber = '203-817-4168';

  return (
    <div className="page">
      <h2>Checkout</h2>
      <p>To complete your purchase, contact the seller:</p>
      <a href={`sms:${phoneNumber}`} className="btn">Text via iMessage</a>
      <br />
      <a href={`https://wa.me/1${phoneNumber}`} className="btn">Message on WhatsApp</a>
    </div>
  );
};

export default Checkout;
