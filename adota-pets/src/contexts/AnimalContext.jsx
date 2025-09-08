import {  createContext, useState } from "react";
import {pets} from "../data";
import { IPet } from "../types/pet";

export const AnimalContext = createContext();

export const AnimalStorage = ({ children }) => {
  const [listPets, setListPets] = useState<IPet>[](pets);
  return <AnimalContext.Provider value={{listPets, setListPets}}>{children}</AnimalContext.Provider>;
};
