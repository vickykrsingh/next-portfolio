"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FiArrowDown, FiTrash } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function MessageAccordion({
  name,
  email,
  interest,
  budget,
  message,
  id,
}) {
  const router = useRouter();
  const deleteHandler = async (id) => {
    let resp = await fetch(`http://localhost:3000/api/contact?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    resp = await resp.json();
    if (resp.success) {
      toast.success("deleted successfully");
      router.refresh();
    } else {
      toast.error("something went wrong while deleting");
    }
  };
  return (
    <div>
      <Accordion className="bg-neutral-500 text-gray-100">
        <AccordionSummary
          expandIcon={<FiArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{email}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>Message : {message}</span>
          </Typography>
          <Typography className="flex gap-8 flex-wrap">
            <span>Client name : {name}</span>
            <span>Interested in : {interest}</span>
            <span>Her budget is {budget}</span>
          </Typography>
          <form
            action={() => {
              deleteHandler(id);
            }}
          >
            <button
              type="submit"
              className="p-1 bg-rose-400 hover:bg-rose-500 transition-all duration-200 text-red-200 rounded-md"
            >
              <FiTrash />
            </button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
