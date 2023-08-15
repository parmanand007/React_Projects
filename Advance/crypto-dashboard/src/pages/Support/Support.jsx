import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import {Stack} from "@chakra-ui/react"

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <Stack spacing="5rem" >
      <SupportCard
        icon={IoMdMail}
        leftComponent={<ContactCard />}
        title="Contact Us"
        text="Have a question or just want to know more ? Feel Frree to react out to
          us."
      />

      <SupportCard 
        icon={AiTwotoneMessage}
        leftComponent={
          <InfoCard
          
          inverted={true}
            imgUrl="/images/Visual2.png"
            text="Learn more about Loans-keep your Bitcoin,access it's value without selling it"
            tagText="Loan"
          />
        }
        title="Live Chat"
        text="Don't have time to wait for the answer? Chat with us now."
      />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
