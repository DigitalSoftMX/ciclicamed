import { Sidebar } from "@interface/General/Sidebar.interface";

export const ImagenologiaSidebarConfig: Sidebar[] = [
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
        icon: '/svg/imagenologia.svg',
        name: 'Estudios de imagenología',
        url: '/app/estudios'
    },
    {
        icon: '/svg/profile.svg',
        name: 'Perfil',
        url: '/app/perfil'
    }
];