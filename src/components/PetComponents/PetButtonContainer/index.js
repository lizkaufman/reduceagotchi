import React from "react";
import css from "./petButtonContainer.module.css";

import PetButton from "../PetButton";

const PetButtonContainer = () => {
  return (
    <div className={css.petButtonContainer}>
      <PetButton />
      <PetButton />
      <PetButton />
      <PetButton />
      <PetButton />
    </div>
  );
};

export default PetButtonContainer;
