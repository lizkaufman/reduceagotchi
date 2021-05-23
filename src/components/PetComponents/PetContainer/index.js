import React from "react";
import css from "./petContainer.module.css";

import Screen from "../Screen";
import PetButtonContainer from "../PetButtonContainer";

const PetContainer = () => {
  return (
    <div className={css.petContainer}>
      <Screen />
      <PetButtonContainer />
    </div>
  );
};

export default PetContainer;
