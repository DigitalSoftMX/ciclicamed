import { Sidebar } from "@interface/General/Sidebar.interface";

export const PatientSidebarConfig: Sidebar[] = [
    {
        icon: '/svg/schedule.svg',
        name: 'Agenda',
        url: '/app/inicio'
    },
    {
        icon: '/svg/farmacia.svg',
        name: 'Recetas médicas',
        url: '/app/recetas'
    },
    {
        icon: '/svg/medicalTest.svg',
        name: 'Estudios clínicos',
        url: '/app/estudios'
    },
    {
        icon: '/svg/profile.svg',
        name: 'Perfil',
        url: '/app/perfil'
    }
];