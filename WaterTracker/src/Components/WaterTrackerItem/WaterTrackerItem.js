import { useContext } from "react";
import Card from "../../UI/Card/Card";
import classes from "./WaterTrackerItem.module.css";
import WaterTrackerContext from "../../Store/WaterTrackerContex";

const WaterTrackerItem = (props) => {
  const ctx = useContext(WaterTrackerContext)
  return (
 
    <Card className={classes["water-tracker-item"]}>
      <div className={classes["water-tracker__name"]}>
        <h1>{ctx.name} consumed {ctx.amount} milliliters</h1>
      </div>
    </Card>
  );
};

export default WaterTrackerItem;
