import React from "react";
import AppointmentItem from "@/components/AppointmentItem";
import appointments from "@/data/appointments.json";
import Image from "next/image";
import Appointment from "@/types/appointment";

const colors = ["blue", "pink", "yellow"];
export default function Appointments() {
  return (
    <main>
      {/* <Image src={""} alt="Logo" width={300} height={200} /> */}
      <h1>Vos rendez-vous</h1>
      {appointments.map((appointment: Appointment, i: number) => (
        <AppointmentItem
          key={i}
          color={colors[i % colors.length]}
          {...appointment}
        />
      ))}
    </main>
  );
}
