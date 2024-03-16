import React from "react";

const Context = React.createContext(); // Tạo 1 global state

export const ContextProvider = Context.Provider;
export default Context;