import ContactTable from "@/components/contact-table";
import Search from "@/components/search";
import { useState } from 'react';
import axios from "axios";

const Contacts = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5 ">
      <div className="flex items-center justify-between gap-1 mb-5">
        
      </div>
      <ContactTable />
    </div>
  )
}

export default Contacts;