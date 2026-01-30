import React from "react";
import { useIntl } from "react-intl";
import { useState } from "react";
import PaypalButton from "./PaypalButton";
import { ImpactSection } from "../../components/Donation/ImpactSection";
import { DetailBox } from "../../components/Donation/ImpactDetailBox";
import { ImpactDetail } from "../../components/Donation/ImpactDetails";
import "./Donate.css";

export default function Donate() {
  const intl = useIntl();
  const cashAmounts = ["$10", "$20", "$50", "$100", "$250", "$500"];
  const [donateAmount, updateDonateAmount] = useState("");

  const handleInputChange = (event) => {
    updateDonateAmount(event.target.value);
  };

  return (
    <div>
      {/* <h1>
				{intl.formatMessage({ id: "empowerYoungMongolians" }).toUpperCase()}
			</h1>
			<h2>
				{intl.formatMessage({ id: "donateConnectMNG" }).toUpperCase()}
			</h2>
			<h3>
				{intl.formatMessage({ id: "onetimeDonation" }).toUpperCase()}
			</h3>
			<div className={"moneyButtonContainer"}>
				{cashAmounts.map((amount, index) =>
					<MoneyButton key={index} text={amount} onClick={() => updateDonateAmount(amount)} />
				)}
			</div>
			<input className={"donateInput"}
				placeholder={intl.formatMessage({ id: "customAmount" })}
				onChange={handleInputChange}
				value={donateAmount}
			/>
			{<PaypalButton donateAmount={donateAmount} />} */}
      <ImpactSection
        title="Where your donation goes"
        description="100% of your donation directly supports our programs and community. We're an all-volunteer organization with zero administrative overhead."
      />
      <ImpactDetail/>
    </div>
  );
}

function MoneyButton({ text, onClick }) {
  return (
    <button className={"moneyButton"} onClick={onClick}>
      {text}
    </button>
  );
}
