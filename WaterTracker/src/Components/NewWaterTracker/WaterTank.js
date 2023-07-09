import "smart-webcomponents-react/source/styles/smart.default.css";
import React, {
  Fragment,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Tank } from "smart-webcomponents-react/tank";
import classes from "./WaterTank.module.css";
const WaterTank = forwardRef((props, ref) => {
  const [waterExceed, setwaterExceed] = useState(false);
  const [waterAmount, setWaterAmount] = useState(0);

  const waterAmountRef = useRef();

  useImperativeHandle(ref, () => ({
    restTank() {
      if (waterAmount === 0) {
        alert("Please enter water consumption before resting the tank");
      } else {
        setWaterAmount(0);
      }
    },
  }));

  const changeWaterAmountHandler = (event) => {
    const amount = Number(event.detail.value).toFixed(2);
    if (amount >= 2000) {
      setwaterExceed(true);
    } else {
      setwaterExceed(false);
    }
    setWaterAmount(amount);
    props.onSaveWaterAmount(amount);
  };

  return (
    <Fragment>
      <h2>Amount (milliliters)</h2>
      {waterExceed && (
        <Fragment>
          {" "}
          <Tank
            ref={waterAmountRef}
            id="tank"
            max="3000"
            value={waterAmount}
            onChange={changeWaterAmountHandler}
            interval="10"
          ></Tank>
          <p className={classes.exceed}>
            Watch out you exceed 2000 milliliters !!
          </p>{" "}
        </Fragment>
      )}

      {!waterExceed && (
        <Tank
          id="tank"
          max="3000"
          value={waterAmount}
          onChange={changeWaterAmountHandler}
          interval="10"
        ></Tank>
      )}
    </Fragment>
  );
});

export default WaterTank;
