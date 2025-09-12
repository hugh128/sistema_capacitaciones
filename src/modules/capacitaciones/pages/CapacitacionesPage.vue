<template>
  <div class="p-6 md:p-8">
    <h2 class="text-3xl font-bold mb-6 text-gray-800">Gestión de Capacitaciones</h2>
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-700">Crear y Asignar Capacitación</h3>
      <form @submit.prevent="handleCreateTraining" class="space-y-4">
        <input type="text" placeholder="Nombre de la Capacitación" v-model="newTraining.name" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" required />
        <select v-model="newTraining.type" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none">
          <option value="Inductiva">Inductiva</option>
          <option value="Continua">Continua</option>
          <option value="Específica">Específica</option>
          <option value="Anual">Anual</option>
        </select>
        <input type="text" placeholder="Departamento o Colaborador (Simulado)" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
        <button type="submit" class="w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">
          Crear y Asignar
        </button>
      </form>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4 text-gray-700">Validación de Resultados</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="training in trainingsList" :key="training.id">
              <td class="px-6 py-4 whitespace-nowrap">{{ training.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ training.type }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="['px-2 inline-flex text-xs leading-5 font-semibold rounded-full', {
                  'bg-green-100 text-green-800': training.status === 'Validada',
                  'bg-yellow-100 text-yellow-800': training.status === 'En Proceso',
                  'bg-red-100 text-red-800': training.status === 'Pendiente' || training.status === 'Vencida'
                }]">
                  {{ training.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button v-if="training.status === 'En Proceso'" @click="() => console.log('Validando capacitación ' + training.name)" class="text-indigo-600 hover:text-indigo-900 transition-colors">
                  Validar
                </button>
              </td>
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
import type { Training } from '../../../types/types.ts';

const trainingsKey: InjectionKey<Ref<Training[]>> = Symbol('trainings');
const mockTrainings = inject(trainingsKey) as Ref<Training[]>;
const newTraining = reactive({ name: '', type: 'Inductiva', department: '' });

const handleCreateTraining = (e: Event) => {
  e.preventDefault();
  mockTrainings.value.push({ id: mockTrainings.value.length + 101, name: newTraining.name, type: newTraining.type, status: 'Pendiente', trainer: null });
  newTraining.name = '';
  newTraining.type = 'Inductiva';
  newTraining.department = '';
  console.log('Capacitación creada y asignada. (Simulado)');
};

const trainingsList = mockTrainings;
</script>