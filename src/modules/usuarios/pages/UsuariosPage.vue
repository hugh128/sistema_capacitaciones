<template>
  <div class="p-6 md:p-8">
    <h2 class="text-3xl font-bold mb-6 text-gray-800">Gestión de Colaboradores</h2>
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-700">Alta de Nuevo Colaborador</h3>
      <form @submit.prevent="handleAddEmployee" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input type="text" placeholder="Nombre Completo" v-model="newEmployee.name" class="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" required />
        <input type="text" placeholder="Puesto" v-model="newEmployee.position" class="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" required />
        <input type="text" placeholder="Departamento" v-model="newEmployee.department" class="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" required />
        <div class="md:col-span-3 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button type="submit" class="flex-1 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
            Agregar Colaborador
          </button>
          <button type="button" @click="() => console.log('Carga masiva simulada. (Simulado)')" class="flex-1 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
            Carga Masiva (Excel/CSV)
          </button>
        </div>
      </form>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4 text-gray-700">Listado de Colaboradores</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puesto</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departamento</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Ingreso</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="emp in employeeList" :key="emp.id">
              <td class="px-6 py-4 whitespace-nowrap">{{ emp.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ emp.role }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ emp.dept }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ emp.joinDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, inject } from 'vue';
import type { Ref, InjectionKey } from 'vue';
import type { User } from '../../../types/types.ts';

const usersKey: InjectionKey<Ref<User[]>> = Symbol('users');
const users = inject(usersKey) as Ref<User[]>;
const newEmployee = reactive({ name: '', position: '', department: '' });

const handleAddEmployee = (e: Event) => {
  e.preventDefault();
  users.value.push({ id: users.value.length + 1, ...newEmployee, joinDate: new Date().toISOString().slice(0, 10), role: newEmployee.position, dept: newEmployee.department });
  newEmployee.name = '';
  newEmployee.position = '';
  newEmployee.department = '';
  console.log('Colaborador agregado. (Simulado)');
};

// Expose variables and functions to the template
const employeeList = users;
</script>
