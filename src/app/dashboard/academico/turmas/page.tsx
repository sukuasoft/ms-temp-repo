import Nav from "@/components/nav/nav";
import GenericCard from "@/components/dashboard/academic/dept/cardWelcome";
import TableTurmas from "@/components/dashboard/academic/turmas/tableTurmas";
import { User, GraduationCap, School } from "lucide-react";

export default async function Departamentos() {
  const departmentData = {
    title: "Gestão de Turmas",
    description:
      "Planeie, organize e acompanhe as turmas de forma prática e eficaz.",
    imageUrl: "/bg_dp.jpeg",
    iconUrl:
      "https://scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/348317224_2443130649195579_3173088235776457879_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=M_VyJUjbu9oQ7kNvgFDnDDl&_nc_oc=AdiUOQiaPkeU385oz5_2_Fu26lAVeexyHcnoqlaqLuYpLP6YK7kGcXxwvnZMDvj6Y9E&_nc_zt=23&_nc_ht=scontent.flad1-1.fna&_nc_gid=Apy9bKIguS2ik6CBhVY90AW&oh=00_AYAJMfuuO5Yn6PPglZuezEp4fJ_n5tIjTfzlLPRBGktptA&oe=67B6A74F",
    summary: [
      { icon: <School size={18} />, label: "30 Turmas Activas" },
      { icon: <User size={18} />, label: "15 Docentes Distribuídos" },
      {
        icon: <GraduationCap size={18} />,
        label: "340 Estudantes Matriculados",
      },
    ],
    buttonText: "Ver Relatórios",
    buttonLink: "/turmas/relatorios",
  };
  return (
    <Nav>
      <div className="@container my-5">
        <GenericCard {...departmentData} />
        {/* </div> */}
        <div className="my-10">
          <TableTurmas />
        </div>
      </div>
    </Nav>
  );
}
