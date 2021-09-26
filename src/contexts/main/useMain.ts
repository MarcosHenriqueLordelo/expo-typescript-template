import { useContext } from "react";
import MainContext from "./index";

const useMain = () => {
  const context = useContext(MainContext);
  return context;
};

export default useMain;
