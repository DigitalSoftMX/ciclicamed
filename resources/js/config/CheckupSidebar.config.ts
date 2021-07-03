import { Sidebar } from "@interface/General/Sidebar.interface";

export const CheckupSidebarConfig: Sidebar[] = [
    {
        icon: '/svg/schedule.svg',
        name: 'Agenda',
        url: '/app/inicio'
    },
    {
        icon: '/svg/users.svg',
        name: 'Checkups',
        url: '/app/checkup'
    },
    {
        icon: '/svg/profile.svg',
        name: 'Perfil',
        url: '/app/perfil'
    }
];