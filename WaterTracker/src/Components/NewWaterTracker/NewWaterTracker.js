import classes from "./NewWaterTracker.module.css";
import WaterTrackerForm from "./WaterTrackerForm";
import WaterTrackerContext from "../../Store/WaterTrackerContex";
import WaterTrackers from "../WaterTrackers/WaterTrackers";
import { useState } from "react";
//add to api
const NewWaterTracker = () => {
    const [formData,setFormData]=useState({ name: "",
    amount: 0,})
 

  const onSaveDataHandler = (enteredUserInput) => {
    setFormData(
        {...enteredUserInput}
    )
  };

  return (
    <WaterTrackerContext.Provider value={{name:formData.name,amount:formData.amount}}>
      <div className={classes["new-water-tracker"]}>
        <WaterTrackerForm addNewWaterTrackerRecord={onSaveDataHandler} />
        <WaterTrackers/>
      </div>
    </WaterTrackerContext.Provider>
  );
};

export default NewWaterTracker;
