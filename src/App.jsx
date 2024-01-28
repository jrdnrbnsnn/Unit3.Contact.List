import "./App.css";
import React from "react";
import ContactList from "./components/ContactList";
import dummyContacts from "./components/ContactList";
import { useState } from "react";

function App() {
  return (
    <>
      <ContactList />
    </>
  );
}

export default App;
