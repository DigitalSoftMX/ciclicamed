import { Sidebar } from "@interface/General/Sidebar.interface";

export const DoctorSidebarConfig: Sidebar[] = [
    {
        icon: '/svg/followUp.svg',
        name: 'Consulta',
        url: '/app/consulta'
    },
    {
        icon: '/svg/schedule.svg',
        name: 'Agenda',
        url: '/app/inicio'
    },
    {
        icon: '/svg/profile.svg',
        name: 'Perfil',
        url: '/app/perfil'
    }
];