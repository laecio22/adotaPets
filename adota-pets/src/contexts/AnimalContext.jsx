import { createContext, useState } from "react";
import {pets} from "../data";

export const AnimalContext = createContext([]);
export const AnimalStorage = ({children}) => {
  const [listPets, setListPets] = useState(pets);
  return (
    <AnimalContext.Provider value={{listPets, setListPets}}>
        {children}
    </AnimalContext.Provider>
  )
}