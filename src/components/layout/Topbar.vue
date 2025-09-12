<template>
  <header class="bg-white shadow-sm p-4 flex justify-between items-center z-20">
    <div class="text-xl font-bold text-gray-800 md:hidden">
      Capacitaciones
    </div>

    <div class="flex-1 flex justify-center md:justify-start">
      <input
        type="text"
        placeholder="Buscar..."
        class="hidden md:block w-72 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="relative">
      <button @click="toggleUserMenu" class="flex items-center space-x-2 focus:outline-none">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Avatar de Usuario"
          class="w-9 h-9 rounded-full border-2 border-indigo-400"
        />
        <span class="text-gray-800 font-medium hidden md:block">Juan Pérez</span>
        <svg
          class="w-4 h-4 text-gray-600 hidden md:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        v-if="userMenuOpen"
        @click.outside="userMenuOpen = false"
        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
      >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >Perfil</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >Configuración</a
        >
        <hr class="my-1" />
        <a
          href="#"
          class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >Cerrar Sesión</a
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userMenuOpen = ref(false);

const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value;
};
</script>
