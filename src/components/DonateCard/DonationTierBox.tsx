import React from "react";
import "./DonationTierBox.css";
import CheckImage from "../../images/Donate/Check.png";
type DonationTierBoxProps = {
  price: string;
  title: string;
  description: string;
  highlight?: boolean;
  listItems?: string[];
};

export function DonationTierBox({
  price,
  title,
  highlight,
  description,
  listItems,
}: DonationTierBoxProps) {
  const itemList = listItems
    ? listItems.map((item, index) => (
        <div key={index} className="donationTierli">
          <img src={CheckImage} className="donationTierCheck" />
          <span>{item}</span>
        </div>
      ))
    : null;

  return (
    <div className="donationTier">
      <div className="donationTierPrice">{price}</div>
      <div className="donationTierTitle">{title}</div>
      <div className="donationTierDescription">{description}</div>
      <div className="donationTierlu">{itemList}</div>
      <button className="donationTierButton ">Donate</button>
    </div>
  );
}
