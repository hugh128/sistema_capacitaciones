<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">Exámenes</h3>

    </div>

    <table class="min-w-full text-xls">
      <thead>
        <tr class="text-left text-gray-500 text-xls">
          <th class="py-2">Examen</th>
          <th class="py-2">Fecha</th>
          <th class="py-2">Nota</th>
          <th class="py-2">Estado</th>
          <th class="py-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in examenes" :key="e.nombre" class="border-none hover:bg-blue-100 leading-5 font-semibold rounded-full bg-white-100 text-black-800">
          <td class="py-2">{{ e.nombre }}</td>
          <td class="py-2">{{ e.fecha }}</td>
          <td class="py-2">{{ e.nota ?? '-' }}</td>
          <td class="py-2">
            <span :class="e.aprobado ? 'text-green-600' : 'text-red-500'">{{ e.aprobado ? 'Aprobado' : 'Reprobado' }}</span>
          </td>
          <td class="py-2">
            <button @click="() => view(e)" class="px-2 py-1 bg-gray-100 rounded">Detalle</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- modal simple -->
    <div v-if="showAdd" class="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h4 class="font-semibold mb-3">Agregar Examen</h4>
        <input v-model="form.nombre" placeholder="Nombre del examen" class="w-full p-2 border rounded mb-2" />
        <input v-model="form.fecha" type="date" class="w-full p-2 border rounded mb-2" />
        <input v-model.number="form.nota" type="number" placeholder="Nota (0-100)" class="w-full p-2 border rounded mb-2" />
        <div class="flex gap-2 justify-end">
          <button @click="closeAdd" class="px-3 py-1">Cancelar</button>
          <button @click="add" class="px-3 py-1 bg-indigo-600 text-white rounded">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type Examen = { nombre: string; fecha: string; nota?: number; aprobado?: boolean }

const examenes = ref<Examen[]>([
  { nombre: 'Evaluación Inicial', fecha: '2023-01-10', nota: 75, aprobado: true },
  { nombre: 'Reevaluación Seguridad', fecha: '2023-08-05', nota: 58, aprobado: false }
])

const showAdd = ref(false)
const form = ref({ nombre: '', fecha: '', nota: null as number | null })

const view = (e: Examen) => { console.log('Ver examen', e) }
</script>