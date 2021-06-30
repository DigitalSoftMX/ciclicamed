<template>
    <header class="header-top">
        <nav class="navbar navbar-light">
            <div class="navbar-left">
                <a class="sidebar-toggle" role="button" @click="menuSelected">
                    <img src="/svg/menu.svg" alt="Menu">
                </a>
                <h6 class="navbar-brand">{{title}}</h6>
            </div>
            <div class="navbar-right">
                <ul class="navbar-right__menu">
                    <li class="nav-author">
                        <div class="dropdown-custom">
                            <a href="javascript:;" class="nav-item-toggle">
                                <img :src="profilePhoto" alt="Perfil" class="rounded-circle">
                            </a>
                            <div class="dropdown-wrapper">
                                <div class="nav-author__info">
                                    <div class="author-img">
                                        <img :src="profilePhoto" alt="Perfil" class="rounded-circle">
                                    </div>
                                    <div>
                                        <h6>{{fullName}}</h6>
                                        <span>{{userCategory}}</span>
                                    </div>
                                </div>
                                <div class="nav-author__options">
                                    <a class="nav-author__signout" role="button">
                                        Cerrar sesión
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script lang="ts" src="./NavbarComponent.ts"></script>
