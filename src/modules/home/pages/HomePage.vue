<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <!-- Tarjeta de Colaboradores -->
      <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105">
        <div class="flex items-center space-x-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span class="text-sm font-medium text-gray-500">Total Colaboradores</span>
        </div>
        <div class="text-4xl font-bold text-gray-900">{{ users.length }}</div>
      </div>

      <!-- Tarjeta de Capacitaciones -->
      <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105">
        <div class="flex items-center space-x-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <span class="text-sm font-medium text-gray-500">Capacitaciones Activas</span>
        </div>
        <div class="text-4xl font-bold text-gray-900">{{ trainingsByStatus('En Proceso') }}</div>
      </div>
      
      <!-- Tarjeta de Capacitaciones Vencidas -->
      <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105">
        <div class="flex items-center space-x-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6zm1-13v4h-2V5h2z"/></svg>
          <span class="text-sm font-medium text-gray-500">Capacitaciones Vencidas</span>
        </div>
        <div class="text-4xl font-bold text-gray-900">{{ trainingsByStatus('Vencida') }}</div>
      </div>
    </div>
    
    <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 class="text-xl font-bold mb-4">Próximas Capacitaciones</h2>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Capacitador
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="training in upcomingTrainings" :key="training.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ training.name }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ training.type }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span 
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                :class="{
                  'bg-green-100 text-green-800': training.status === 'Validada',
                  'bg-yellow-100 text-yellow-800': training.status === 'En Proceso',
                  'bg-blue-100 text-blue-800': training.status === 'Pendiente',
                  'bg-red-100 text-red-800': training.status === 'Vencida'
                }"
              >
                {{ training.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ training.trainer || 'Sin asignar' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed, provide, ref } from 'vue';
import type { User, Training } from '../../../types/types.ts';


// Mock data for the dashboard
const users = ref<User[]>([
  { id: 1, name: 'Carlos Gomez', role: 'Jefe de Departamento', dept: 'Ventas', joinDate: '2023-01-15' },
  { id: 2, name: 'Ana Rodriguez', role: 'Empleado', dept: 'Marketing', joinDate: '2022-05-20' },
  { id: 3, name: 'Maria Lopez', role: 'Empleado', dept: 'Ventas', joinDate: '2023-03-10' },
  { id: 4, name: 'Juan Perez', role: 'Empleado', dept: 'Finanzas', joinDate: '2021-11-01' },
  { id: 5, name: 'Sofia Hernandez', role: 'Empleado', dept: 'Recursos Humanos', joinDate: '2023-07-25' },
  { id: 6, name: 'Luis Torres', role: 'Empleado', dept: 'Tecnología', joinDate: '2022-02-14' },
  { id: 7, name: 'Elena Vargas', role: 'Empleado', dept: 'Ventas', joinDate: '2023-09-05' },
  { id: 8, name: 'Javier Castillo', role: 'Empleado', dept: 'Recursos Humanos', joinDate: '2023-04-30' },
  { id: 9, name: 'Laura Mendoza', role: 'Jefe de Departamento', dept: 'Tecnología', joinDate: '2021-08-10' },
  { id: 10, name: 'Roberto Diaz', role: 'Empleado', dept: 'Finanzas', joinDate: '2023-01-20' },
]);

const mockTrainings = ref<Training[]>([
  { id: 101, name: 'Inducción de Seguridad', type: 'Inductiva', status: 'Validada', trainer: 'Juan Perez' },
  { id: 102, name: 'Técnicas de Venta Avanzadas', type: 'Continua', status: 'En Proceso', trainer: 'Carlos Gomez' },
  { id: 103, name: 'Liderazgo para Jefes', type: 'Específica', status: 'Pendiente', trainer: null },
  { id: 104, name: 'Protección de Datos', type: 'Anual', status: 'Vencida', trainer: 'Maria Lopez' },
  { id: 105, name: 'Gestión de Proyectos Ágiles', type: 'Continua', status: 'Validada', trainer: 'Laura Mendoza' },
  { id: 106, name: 'Atención al Cliente', type: 'Continua', status: 'En Proceso', trainer: 'Ana Rodriguez' },
  { id: 107, name: 'Comunicación Efectiva', type: 'Específica', status: 'Pendiente', trainer: null },
  { id: 108, name: 'Primeros Auxilios', type: 'Inductiva', status: 'Validada', trainer: 'Luis Torres' },
]);

// Computed properties
const trainingsByStatus = (status: string) => {
  return computed(() => mockTrainings.value.filter(t => t.status === status).length).value;
};

const upcomingTrainings = computed(() => {
  return mockTrainings.value.filter(t => t.status !== 'Validada' && t.status !== 'Vencida');
});


</script>
