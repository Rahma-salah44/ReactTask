import Input from "../../UI/Input/Input";
import WaterTank from "./WaterTank";
import classes from "./WaterTrackerForm.module.css";
import React, { useState, useRef } from "react";

const WaterTrackerForm = (props, ref) => {
  const nameInputRef = useRef();
  const tankRef = useRef();
  const [validData,setValidData] = useState(true);
  const userInput = {
    name: "",
    amount: 0,
  };

  const onSaveWaterAmountHandler = (enteredUserAmount) => {
    userInput.amount = Number(enteredUserAmount).toFixed(2);
  };
const formDataValid =()=>{
    if (!userInput ||!userInput.name || userInput.amount ===0){
        setValidData(false)
    }
    else {
        setValidData(true)
    }
}
  const submitFormHandler = (event) => {
    event.preventDefault();
    userInput.name = nameInputRef.current.value;
    formDataValid();
    props.addNewWaterTrackerRecord(userInput);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={classes["new-water-tracker__controls"]}>
        <div className={classes["new-water-tracker__control"]}>
          <label>Name</label>
          <Input input={{ type: "text" }} ref={nameInputRef} />
        </div>
        <div className={classes["new-water-tracker__control"]}>
          <WaterTank
            onSaveWaterAmount={onSaveWaterAmountHandler}
            ref={tankRef}
          />
        </div>
        <div className={classes["new-water-tracker__actions"]}>
          <div className={classes["new-water-tracker__action"]}>
            <button type="submit">Submit</button>
          </div>
          <div className={classes["new-water-tracker__action"]}>
            <button onClick={() => tankRef.current.restTank()}>Reset</button>
          </div>
          {!validData &&<p className={classes.invalid}>
            Make sure you enter your name and the amount of water you have drunk
         </p>  }
        </div>
      </div>
    </form>
  );
};

export default WaterTrackerForm;
