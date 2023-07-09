import { Fragment, useState } from "react";
import "./styles.css";
import Header from "./Layout/Header";
import NewWaterTracker from "./Components/NewWaterTracker/NewWaterTracker";
import WaterSummary from "./Components/WaterTrackers/WaterSummary";

import WaterTrackerContext from "./Store/WaterTrackerContex";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <Fragment>
<Header/>
<WaterSummary/>
<NewWaterTracker/>

    </Fragment>
  );
}
