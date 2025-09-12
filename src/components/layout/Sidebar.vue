<template>
  <button
    @click="toggleSidebar"
    class="md:hidden fixed z-40 top-4 left-4 p-2 rounded-md text-gray-700 bg-white shadow"
  >
    <svg
      v-if="!isSidebarOpen"
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
    <svg
      v-else
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </button>

  <aside
    :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }"
    class="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 space-y-6 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:flex md:flex-col md:w-64 z-30"
  >
    <div class="text-2xl font-semibold text-center text-indigo-400">
      Capacitaciones
    </div>

    <nav class="flex-1">
      <RouterLink
        to="/"
        class="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
        active-class="bg-indigo-600 text-white"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        <span>Home</span>
      </RouterLink>

      <RouterLink
        to="/capacitaciones"
        class="mt-2 flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
        active-class="bg-indigo-600 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        <span>Capacitaciones</span>
      </RouterLink>

      <RouterLink
        to="/usuarios"
        class="mt-2 flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
        active-class="bg-indigo-600 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <span>Usuarios</span>
      </RouterLink>
      <RouterLink
        to="/reportes"
        class="mt-2 flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
        active-class="bg-indigo-600 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/></svg>
        <span>Reportes</span>
      </RouterLink>
      </nav>

    <div class="text-xs text-gray-400 text-center">
      Sistema de Capacitaciones
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
