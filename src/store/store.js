import Store from "electron-store";

const schema = {
  theme: {
    type: "string",
    default: "light",
  },
  userData: {
    type: "object",
    default: {},
  },
};

const store = new Store({ schema });

export default store;
