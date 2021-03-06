import Vue from "vue";

export const store = Vue.observable({
    isProfileOpen: false
});

export const mutations = {
    toggleProfile() {
        store.isProfileOpen = !store.isProfileOpen
    }
};