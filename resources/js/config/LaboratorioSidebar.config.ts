import { Sidebar } from "@interface/General/Sidebar.interface";

export const LaboratorioSidebarConfig: Sidebar[] = [
    // {
    //     icon: '/svg/followUp.svg',
    //     name: 'Consulta',
    //     url: '/app/consulta'
    // },
    {
        icon: '/svg/schedule.svg',
        name: 'Agenda',
        url: '/app/inicio'
    },
    {
        icon: '/svg/laboratorio.svg',
        name: 'Estudios de laboratorio',
        url: '/app/estudios'
    },
    {
        icon: '/svg/profile.svg',
        name: 'Perfil',
        url: '/app/perfil'
    }
];