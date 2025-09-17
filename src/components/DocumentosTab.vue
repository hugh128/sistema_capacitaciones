<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">Documentos</h3>
      <div class="flex gap-2">

        <label class="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded cursor-pointer hover:bg-blue-600 hover:text-white transition">
          <input type="file" @change="upload" class="hidden" ref="file" />
          <span class="text-ls text-black-500 hover:text-white-600 ">Subir</span>
        </label>
      </div>
    </div>

    <div v-if="filtered.length === 0" class="text-gray-500">No hay documentos.</div>

    <ul class="space-y-2">
      <li v-for="d in filtered" :key="d.name" class="flex items-center justify-between p-3 bg-[#DDEAFB] rounded-lg">
        <div>
          <div class="font-medium">{{ d.name }}</div>
          <div class="text-sm text-gray-500">Subido: {{ d.uploaded }}</div>
        </div>
        <div class="flex gap-2">
          <button @click="download(d)" class="px-2 py-1 bg-gray-100 rounded">Descargar</button>
          <button @click="remove(d)" class="px-2 py-1 text-red-600">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

type Doc = { name: string; uploaded: string }

const docs = ref<Doc[]>([
  { name: 'induccion.pdf', uploaded: '2023-01-10' },
  { name: 'cv_juanperez.pdf', uploaded: '2021-11-01' }
])

const query = ref('')
const filtered = computed(() => {
  return docs.value.filter(d => d.name.toLowerCase().includes(query.value.toLowerCase()))
})

const upload = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target.files || target.files.length === 0) return
  const f = target.files[0]
  docs.value.push({ name: f.name, uploaded: new Date().toISOString().slice(0, 10) })
}

const download = (d: Doc) => { console.log('Descargar', d) }
const remove = (d: Doc) => {
  docs.value = docs.value.filter(x => x !== d)
}
</script>