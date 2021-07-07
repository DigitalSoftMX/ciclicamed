<template>
    <aside id="sbcSidebar" class="sidebar mCustomScrollbar _mCS_1 mCS-autoHide collapsed" style="overflow: visible;">
        <div id="mCSB_1" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" style="max-height: none;"
            tabindex="0">
            <div id="mCSB_1_container" class="mCSB_container" style="position: relative; left: 0px; top: 0px;"
                dir="ltr">
                <div class="sidebar__menu-group">
                    <ul class="sidebar_nav">
                        <li v-for="(item, index) in items" :key="index" class="mb-30 active">
                            <a :href="url + item.url">
                                <img-component :url="item.icon" :alt="item.name" cssClass="nav-icon"></img-component>
                                <span class="menu-text">{{item.name}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="mCSB_1_scrollbar_vertical"
            class="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
            style="display: block;">
            <div class="mCSB_draggerContainer">
                <div id="mCSB_1_dragger_vertical" class="mCSB_dragger"
                    style="position: absolute; min-height: 50px; display: block; height: 534px; max-height: 901px; top: 0px;">
                    <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                    <div class="mCSB_draggerRail"></div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts" src="./SidebarComponent.ts"></script>
