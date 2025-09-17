<template >
  <div class="p-6 bg-[#E5EDF9]">
    <!-- Header -->
    <div class="flex items-center justify-between bg-[#F3F8FF] rounded-lg pb-4 px-7 pt-4" >
      <div class="flex items-center space-x-4">
        <div class="bg-gray-300 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold">JP</div>
        <div>
          <h2 class="text-2xl font-semibold">Juan Pérez</h2>
          <p class="text-gray-500">juanperez@gmail.com</p>
          <p class="text-gray-500">+502 6768-6525</p>
        </div>
      </div>
      <div class="text-right px-7 space-y-2 w-1/6">
        <p class="flex items-center text-[#071C50] font-bold justify-between">Estado actual</p>
        <p class="flex items-center text-gray-500 justify-between" >Puesto <span class="bg-[#DDEAFB] text-[#071C50] p-1 px-5 font-bold rounded-lg">{{ colaborador.puesto }}</span></p>
        <p class="flex items-center text-gray-500 justify-between ">Jefe Inm.: 
          <img src="https://avatar.iran.liara.run/public" alt="Avatar de Usuario" class="w-6 h-6 rounded-full border-2 border-indigo-400 bg-[#DDEAFB]"/> 
          <span class="bg-[#DDEAFB] text-[#071C50] font-bold px-2 rounded-lg">Alex Gómez</span>
        </p>
        <p class="flex items-center text-gray-500 justify-between">Ingreso: <span>2021-11-01</span></p>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex space-x-6 mt-6 bg-[#F3F8FF] rounded-t-lg p-5 ">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="pb-2 font-semibold"
        :class="activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600 cursor-pointer' : 'text-gray-500 hover:text-blue-600 cursor-pointer '">
        {{ tab }}
      </button>
    </div>

    <div class="grid grid-cols-3 gap-6 mt-1 bg-[#F3F8FF] rounded-b-lg p-5">

      <div class="col-span-2 space-y-6 ">
        <div v-if="activeTab === 'General'">

          <div>
            <h3 class="text-lg font-semibold mb-2">Archivos Colaborador</h3>
            <div class="flex space-x-2 ">
              <span class="px-3 py-1 bg-blue-100 text-blue-600 border-2 border-[#E5EDF9] rounded-lg p-4 shadow transform hover:scale-105 cursor-pointer">{{ colaborador.archivos[0] }}</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-600 border-2 border-[#E5EDF9] rounded-lg p-4 shadow transform hover:scale-105 cursor-pointer">{{ colaborador.archivos[1] }}</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-600 border-2 border-[#E5EDF9] rounded-lg p-4 shadow transform hover:scale-105 cursor-pointer">{{ colaborador.archivos[2] }}</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-600 border-2 border-[#E5EDF9] rounded-lg p-4 shadow transform hover:scale-105 cursor-pointer">{{ colaborador.archivos[3] }}</span>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Experiencia</h3>
            <p class="font-medium">{{ colaborador.puesto }}</p>
            <ul class="list-decimal list-inside text-gray-600 mt-2 space-y-1">
              <li>{{ colaborador.experiencia[0] }}</li>
              <li>{{ colaborador.experiencia[1] }}</li>
              <li>{{ colaborador.experiencia[2] }}</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Últimas Capacitaciones</h3>
            <ul class="text-gray-600 space-y-1">
              <li>{{ colaborador.capacitaciones[0].titulo }} - {{ colaborador.capacitaciones[0].fecha }} - {{ colaborador.capacitaciones[0].nota }}</li>
              <li>{{ colaborador.capacitaciones[1].titulo }} - {{ colaborador.capacitaciones[1].fecha }} - {{ colaborador.capacitaciones[1].nota }}</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Certificaciones Obtenidas</h3>
            <p class="text-gray-600">{{ colaborador.certificaciones[0].titulo }} - {{ colaborador.certificaciones[0].estado }}</p>
            <h3 class="text-lg font-semibold mt-4 mb-2">Certificaciones Obtenidas</h3>
            <p class="text-gray-600">{{ colaborador.certificaciones[1].titulo }} - {{ colaborador.certificaciones[1].estado }}</p>
          </div>
        </div>

        <CapacitacionesTab v-else-if="activeTab === 'Capacitaciones'"/>
        <ExamenesTab v-else-if="activeTab === 'Exámenes'"/>
        <DocumentosTab v-else-if="activeTab === 'Documentos'"/>
        <HistoricoTab v-else-if="activeTab === 'Histórico'"/>

      </div>

      <div class="col-span-1">
        <div class="border-2 border-[#E5EDF9] rounded-lg p-4 shadow">
          <h3 class="text-lg font-bold mb-4">Resumen del Estado de Capacitación</h3>
          <div class="flex flex-col items-center justify-center mb-4">
            <div class="w-20 h-20 rounded-full divide-hidden border-8 border-green-400 flex items-center justify-center text-xl font-bold text-green-600">
              80%
            </div>
            <p class="text-black font-bold mt-2">% de cumplimiento</p>
          </div>

          <ul class="space-y-1 text-gray-600">
            <li class="flex justify-between "><span class="font-medium">Cumplimiento obligatorio:</span> 80%</li>
            <li class="flex justify-between "><span class="font-medium">Última Capacitación:</span> ISO</li>
            <li class="flex justify-between "><span class="font-medium">Próxima Capacitación:</span> Manejo de químicos</li>
          </ul>

          <div class="mt-4 space-y-1">
            <p class="flex items-center justify-between">Inducción <span class="text-red-500">✘</span></p>
            <p class="flex items-center justify-between">Seguridad Industrial <span class="text-green-500 font-bold">&check;</span></p>
            <p class="flex items-center justify-between">ISO <span class="text-green-500 font-bold" >&check;</span></p>
            <p class="flex items-center justify-between">Buenas Prácticas <span class="text-green-500 font-bold">&check;</span></p>
            <p class="flex items-center justify-between">Manejo de Químicos <span class="text-red-500">✘</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CapacitacionesTab from '../components/CapacitacionesTab.vue'
import ExamenesTab from '../components/ExamenesTab.vue'
import DocumentosTab from '../components/DocumentosTab.vue'
import HistoricoTab from '../components/HistoricoTab.vue'


type Tab = 'General' | 'Capacitaciones' | 'Exámenes' | 'Documentos' | 'Histórico'

interface Colaborador {
  id: number
  nombre: string
  correo: string
  telefono: string
  puesto: string
  jefeInmediato: string
  ingreso: string // Fecha en formato YYYY-MM-DD
  archivos: string[]
  experiencia: string[]
  capacitaciones: { titulo: string; fecha: string; nota: number }[]
  certificaciones: { titulo: string; estado: string }[]
}

const tabs: Tab[] = ['General', 'Capacitaciones', 'Exámenes', 'Documentos', 'Histórico']
const activeTab = ref<Tab>('General')


const colaborador = ref<Colaborador>({
  id: 1,
  nombre: 'Juan Pérez',
  correo: 'juanperez@gmail.com',
  telefono: '+502 6768-6525',
  puesto: 'Finanzas',
  jefeInmediato: 'Alex Gómez',
  ingreso: '2021-07-10',
  archivos: ['🫯 induccion.pdf', '🫯 examen_seguri', '🫯 CertificadoSusta', '🫯 JuanPerez_cv'],
  experiencia: [
    'Análisis de Calidad: Realización de pruebas fisicoquímicas y microbiológicas...',
    'Desarrollo y Validación de Métodos: Participación en investigación...',
    'Cumplimiento Normativo: Mantenimiento de registros y documentación técnica...'
  ],
  capacitaciones: [
    { titulo: 'ISO 9001 Actualización', fecha: '2023-06-01', nota: 85 },
    { titulo: 'Seguridad Industrial', fecha: '2023-02-15', nota: 90 }
  ],
  certificaciones: [
    { titulo: 'Buenas Prácticas de Laboratorio', estado: 'Diploma 2022' },
    { titulo: 'Manejo de Sustancias Químicas', estado: 'Pendiente Revisión' }
  ]
})
</script>
