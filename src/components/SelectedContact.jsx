import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact(id) {
      try {
        const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("here is your data ", data);
        setContact(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContact(selectedContactId);
  }, []);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>Company: {contact.company.name}</p>
      <p>Catch Phrase: {contact.company.catchPhrase}</p>
      <p>Address: {contact.address.street}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      <button
        type="button"
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Go back
      </button>
    </div>
  );
}
