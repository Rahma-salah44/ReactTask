import classes from './WaterTrackers.module.css'
import Card from '../../UI/Card/Card'
import WaterTrackerItem from '../WaterTrackerItem/WaterTrackerItem'


const WaterTrackers = ()=>{
    return (
            <div className={classes['water-trackers-list']}>
               <WaterTrackerItem/>
           </div>      
    )
}

export default WaterTrackers