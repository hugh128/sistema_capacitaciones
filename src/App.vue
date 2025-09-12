<template>
  <div class="bg-gray-100 min-h-screen h-screen font-sans antialiased text-gray-800">
    <div class="flex flex-col lg:flex-row h-full">
      <!-- Sidebar Navigation -->
      <Sidebar :sidebarOpen="sidebarOpen" />

      <!-- Main Content -->
      <main class="flex-1 h-full overflow-y-auto">
        <Topbar />
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Sidebar from './components/layout/Sidebar.vue';
import Topbar from './components/layout/Topbar.vue';

const sidebarOpen = ref(false)

</script>
