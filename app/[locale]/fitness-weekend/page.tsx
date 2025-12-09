import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Speakers from "@/components/speakers/Speakers";
import Agenda from "@/components/agenda/Agenda";
import Tickets from "@/components/tickets/Tickets";

export default function FitnessWeekendPage() {
  return (
    <main className="min-h-screen relative z-10 bg-[#050505]">
      <Navbar />
      <Hero />
      <Speakers />
      <Agenda />
      <Tickets />
    </main>
  );
}
