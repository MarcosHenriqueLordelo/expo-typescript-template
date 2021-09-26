import pt_br from "./pt-br";

const getStrings = (language: string): TypeStrings => {
  switch (language) {
    default:
      return pt_br;
  }
};

export default getStrings;
