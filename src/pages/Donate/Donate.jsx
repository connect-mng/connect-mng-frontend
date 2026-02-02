import React, { useState } from "react";
import { useIntl } from "react-intl";
import PaypalButton from "./PaypalButton";
import DonateCard from "../../components/PageCard/DonateCard";
import DonateImg from "../../images/PageCards/Donate.jpg";
import "./Donate.css";

export default function Donate() {
  const intl = useIntl();
  const cashAmounts = ["$10", "$20", "$50", "$100", "$250", "$500"];
  const [donateAmount, updateDonateAmount] = useState("");

  const handleInputChange = (event) => {
    updateDonateAmount(event.target.value);
  };

  return (
    <div className="donatePage">
      {/* Full-bleed hero like Home */}
      <div className="fullBleed fullBleedTop">
        <DonateCard
          className="fullBleedNoRadius"
          backgroundImage={DonateImg}
          pillText={intl.formatMessage({ id: "donatePillText" })}
          title={intl.formatMessage({ id: "donatePillText" })}
          body={intl.formatMessage({ id: "donateCardBody" })}
          buttons={[
            // Scroll to the form section
            { text: "Make a Donation", href: "#donate-form", variant: "primary", showArrow: true },
            { text: "Learn More", to: "/about/our-story", variant: "secondary", showArrow: false },
          ]}
          align="left"
          overlayOpacity={0.55}
        />
      </div>

      {/* Existing donate form content */}
      <div className="donateContainer" id="donate-form">
        <h1>{intl.formatMessage({ id: "empowerYoungMongolians" }).toUpperCase()}</h1>

        <h2>{intl.formatMessage({ id: "donateConnectMNG" }).toUpperCase()}</h2>

        <h3>{intl.formatMessage({ id: "onetimeDonation" }).toUpperCase()}</h3>

        <div className="moneyButtonContainer">
          {cashAmounts.map((amount, index) => (
            <MoneyButton key={index} text={amount} onClick={() => updateDonateAmount(amount)} />
          ))}
        </div>

        <input
          className="donateInput"
          placeholder={intl.formatMessage({ id: "customAmount" })}
          onChange={handleInputChange}
          value={donateAmount}
        />

        <PaypalButton donateAmount={donateAmount} />
      </div>
    </div>
  );
}

function MoneyButton({ text, onClick }) {
  return (
    <button className="moneyButton" onClick={onClick}>
      {text}
    </button>
  );
}
