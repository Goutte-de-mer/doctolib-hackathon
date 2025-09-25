import React from "react";
import AppointmentItem from "@/components/AppointmentItem";
import appointments from "@/data/appointments.json";
import Image from "next/image";
import Appointment from "@/types/appointment";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const colors = ["blue", "pink", "yellow"];
export default function Appointments() {
  const now = new Date();

  const futureAppointments = appointments
    .filter((apt) => new Date(apt.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  4;

  const pastAppointments = appointments
    .filter((apt) => new Date(apt.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <main className="flex flex-col">
      {/* <Image src={""} alt="Logo" width={300} height={200} /> */}
      <h1 className="text-blue-dark text-3xl my-5 text-center font-bold">
        Vos rendez-vous
      </h1>

      <TabGroup as="div" className={"mx-auto space-y-5 w-full max-w-sm"}>
        <TabList
          className={"grid grid-cols-2 border-2 border-white rounded-xl mb-7"}
        >
          <Tab
            className={
              "py-3 text-white px-7 rounded-xl data-selected:bg-blue-dark focus-visible:outline-none data-selected:shadow-lg cursor-pointer"
            }
          >
            À venir
          </Tab>
          <Tab
            className={
              "py-3 text-white px-7 rounded-xl data-selected:bg-blue-dark focus-visible:outline-none data-selected:shadow-lg cursor-pointer"
            }
          >
            Passés
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={"space-y-5"}>
            {futureAppointments.map((appointment: Appointment, i: number) => (
              <AppointmentItem
                key={i}
                color={colors[i % colors.length]}
                {...appointment}
              />
            ))}
          </TabPanel>
          <TabPanel className="space-y-5">
            {pastAppointments.map((appointment: Appointment, i: number) => (
              <AppointmentItem
                key={i}
                color={colors[i % colors.length]}
                {...appointment}
              />
            ))}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
