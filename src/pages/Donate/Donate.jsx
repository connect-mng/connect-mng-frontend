import React, { useState } from "react";
import { useIntl } from "react-intl";
import PaypalButton from "./PaypalButton";
/*import DonateCard from "../../components/PageCard/DonateCard/DonateCard";*/
import DonateImg from "../../images/PageCards/Donate.jpg";
import PageCard from "../../components/PageCard/PageCard";
import Pill from "../../components/Pill/Pill";
import Button from "../../components/Buttons/Button";
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
      <div className="PageHeader">
        <PageCard
          className="fullBleedNoRadius donateHeroCard"
          backgroundImage={DonateImg}
          title={
            <>
              <Pill
                text={intl.formatMessage({ id: "donatePillText" })}
                className="donateHeroPill"
                showDonateIcon={true}
              />
              <span className="donateHeroTitle">
                {intl.formatMessage({ id: "donateCardTitle" })}
              </span>
            </>
          }
          description={intl.formatMessage({ id: "donateCardBody" })}
        >
          <div className="donateHeroButtons">
            <Button
              text="Make a Donation"
              href="#donate-form"
              variant="primary"
              size="large"
              showArrow={false}
            />
            <Button
              text="Learn More"
              to="/about/our-story"
              variant="secondary"
              size="large"
              showArrow={false}
            />
          </div>
        </PageCard>
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
