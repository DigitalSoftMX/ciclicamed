<template>
    <header class="header-top">
        <nav class="navbar navbar-light">
            <div class="navbar-left">
                <a class="sidebar-toggle" role="button" @click="menuSelected">
                    <img-component url="/svg/menu.svg" alt="Menu"></img-component>
                </a>
                <h6 class="navbar-brand">{{title}}</h6>
            </div>
            <div class="navbar-right">
                <ul class="navbar-right__menu">
                    <li class="nav-author">
                        <div class="dropdown-custom">
                            <a href="javascript:;" class="nav-item-toggle">
                                <img-component :url="profilePhoto" errorImg="/svg/person.svg" alt="Perfil" cssClass="rounded-circle"></img-component>
                            </a>
                            <div class="dropdown-wrapper">
                                <div class="nav-author__info">
                                    <div class="author-img">
                                        <img-component :url="profilePhoto" errorImg="/svg/person.svg" alt="Perfil" cssClass="rounded-circle"></img-component>
                                    </div>
                                    <div>
                                        <h6>{{fullName}}</h6>
                                        <span>{{role}}</span>
                                    </div>
                                </div>
                                <div class="nav-author__options">
                                    <a :href="`${url}/logout`" class="nav-author__signout" role="button" @click="logout($event)">
                                        Cerrar sesión
                                    </a>
                                    <form id="ncLogout" :action="`${url}/logout`"
                                        method="POST" class="d-none">
                                        <input type="hidden" name="_token" :value="token">
                                    </form>
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
