import MessageAccordion from "@/app/(site)/dashboard/dashboard-component/contact-message-accordion";
import Empty from "@/app/Components/data-not-found";
import React from "react";

export const metadata = {
  title:"Admin | Dashboard - contact-information",
  description : "Admin | contact information of all logged in user who wants to contact to vicky"
}

async function ContactInfo() {
  let message = await fetchMessage();
  return (
    <div className="main-container flex flex-col gap-4">
      {message?.messages?.length == 0 || !message ? (
        <Empty />
      ) : (
        message?.messages?.map((m) => (
          <MessageAccordion
            name={m.name}
            email={m.email}
            interest={m.interest}
            budget={m.budget}
            message={m.message}
            id={m._id}
          />
        ))
      )}
    </div>
  );
}

const fetchMessage = async () => {
  let data = await fetch("http://localhost:3000/api/contact", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  data = await data.json();
  return data;
};
const fetchSearchMessage = async (searchData) => {
  let data = await fetch(
    `http://localhost:3000/api/contact?email=${searchData}`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  data = await data.json();
  return data;
};

export default ContactInfo;
