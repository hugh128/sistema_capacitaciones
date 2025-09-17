<template>
  <div class="space-y-4">
    <h3 class="text-lg font-semibold">Histórico</h3>

    <div v-if="events.length === 0" class="text-gray-500">No hay eventos registrados.</div>

    <ul class="space-y-3">
      <li v-for="ev in events" :key="ev.id" class="bg-[#DDEAFB] rounded-lg px-5 py-3">
        <div class="flex justify-between">
          <div>
            <div class="text-sm text-gray-600">{{ ev.date }}</div>
            <div class="font-medium">{{ ev.title }}</div>
            <div class="text-sm text-gray-500">{{ ev.desc }}</div>
          </div>
          <div class="text-xs text-gray-400">{{ ev.type }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type Ev = { id: number; date: string; title: string; desc: string; type: string }

const events = ref<Ev[]>([
  { id: 1, date: '2024-01-10', title: 'Documento subido', desc: 'Juan Pérez subió induccion.pdf', type: 'Documento' },
  { id: 2, date: '2024-03-05', title: 'Capacitación completada', desc: 'ISO 9001 completada con nota 85', type: 'Capacitación' }
])
</script>