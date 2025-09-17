<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">Capacitaciones</h3>
<!--       <button @click="openAdd" class="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Agregar</button>   
      <div>
        <button @click="openAdd" class="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Agregar Capacitación</button>
      </div>
      -->
    </div>

    <div v-if="capacitaciones.length === 0" class="text-gray-500">No hay capacitaciones registradas.</div>

    <ul class="space-y-3">
      <li v-for="c in capacitaciones" :key="c.titulo" class=" rounded p-3 flex items-center justify-between bg-[#DDEAFB] text-[#071C50] px-5 font-bold rounded-lg">
        <div>
          <div class="font-medium">{{ c.titulo }}</div>
          <div class="text-sm text-gray-500">Fecha: {{ c.fecha }} • Nota: {{ c.nota ?? '-' }}</div>
        </div>
        <div class="flex items-center gap-3">
          <span :class="c.completado ? 'text-green-600' : 'text-red-500'">
            {{ c.completado ? 'Completado' : 'Pendiente' }}
          </span>
          <button @click="() => markComplete(c)" class="text-sm px-2 py-1 border rounded hover:bg-gray-50">Marcar</button>
          <button @click="() => view(c)" class="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">Ver</button>
        </div>
      </li>
    </ul>

    <!-- simple modal / formulario simulado -->
    <div v-if="showAdd" class="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h4 class="font-semibold mb-3">Agregar Capacitación</h4>
        <input v-model="form.titulo" placeholder="Título" class="w-full p-2 border rounded mb-2" />
        <input v-model="form.fecha" type="date" class="w-full p-2 border rounded mb-2" />
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

type Cap = { titulo: string; fecha: string; nota?: number; completado?: boolean }

const props = defineProps<{ initial?: Cap[] }>()
const emit = defineEmits<{}>()

const capacitaciones = ref<Cap[]>(props.initial ?? [
  { titulo: 'ISO 9001 Actualización', fecha: '2023-06-01', nota: 85, completado: true },
  { titulo: 'Seguridad Industrial', fecha: '2023-02-15', nota: 90, completado: true }
])

const showAdd = ref(false)
const form = ref({ titulo: '', fecha: '' })

const openAdd = () => { form.value = { titulo: '', fecha: '' }; showAdd.value = true }
const closeAdd = () => { showAdd.value = false }

const add = () => {
  if (!form.value.titulo || !form.value.fecha) return
  capacitaciones.value.push({ titulo: form.value.titulo, fecha: form.value.fecha, completado: false })
  closeAdd()
}

const markComplete = (c: Cap) => { c.completado = true }
const view = (c: Cap) => { console.log('Ver capacitación', c) }
</script>
