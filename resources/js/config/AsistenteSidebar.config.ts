import { Sidebar } from "@interface/General/Sidebar.interface";

export const AsistenteSidebarConfig: Sidebar[] = [
    {
        icon: '/svg/schedule.svg',
        name: 'Agenda',
        url: '/app/inicio'
    },
    {
        icon: '/svg/productos.svg',
        name: 'Productos',
        url: '/app/productos'
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