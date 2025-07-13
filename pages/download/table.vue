<script setup>
import ContainerComponent from "../../../components/common/ContainerComponent.vue"
import ButtonComponent from "../../components/common/ButtonComponent.vue";
const DownloadData=Array.from({length:7},(value,id)=>({
    id:id+1,
    name:"Ajazz Ak820 Max Plus Driver",
    brand:"Ajazz",
    model:"Ak820",
    SoftwareCompatibility:"Windows/Mac",
    Links:"Download"
}))   
</script>

<template>
 
  <div class="font-poppins mt-9">

    <div  class="mb-6">
      <!-- Desktop Table -->
      <div class="hidden w-full overflow-x-auto md:block">
        <table class="w-full">
          <!-- Table Header -->
          <thead class="border-b border-neutral-100">
            <tr>
              <th
                class="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-neutral-04-100"
              >
               Name
              </th>
              <th
                class="px-6 py-3 text-xs font-medium tracking-wider text-center uppercase text-neutral-04-100"
              >
               Brand
              </th>
              <th
                class="px-6 py-3 text-xs font-medium tracking-wider text-center uppercase text-neutral-04-100"
              >
                Model
              </th>
              <th
                class="px-6 py-3 text-xs font-medium tracking-wider text-center uppercase text-neutral-04-100"
              >
               Software Compatibility 
              </th>
              <th
                class="px-6 py-3 text-xs font-medium tracking-wider text-center uppercase text-neutral-04-100"
              >
              Links
              </th>
             
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody class="divide-y divide-gray-200">
            <template  v-for="data in DownloadData" :key="data.id">
              <!-- Main Row -->
              <tr
              
                class="transition-colors duration-150 cursor-pointer hover:bg-gray-50"
              >
                <td
                  class="px-6 py-4 text-sm font-medium text-left text-neutral-07-100 whitespace-nowrap"
                >
                {{ data.name }}
                </td>
                <td class="px-6 py-4 text-sm font-medium text-center text-neutral-07-100 whitespace-nowrap">
                 {{ data.brand }}
                </td>
                <td class="px-6 py-4 text-sm font-medium text-center text-neutral-07-100 whitespace-nowrap">
                 {{ data.model }}
                </td>
                <td class="px-6 py-4 text-center whitespace-nowrap">
                  <span
                   
                    class="inline-flex px-2 py-1 text-sm font-medium text-center text-neutral-700"
                  >
                {{ data.SoftwareCompatibility }}
                  </span>
                </td>
                <td
                  class="text-sm font-semibold text-center whitespace-nowrap"
                >
                  <ButtonComponent 
              
                  padding="px-6 py-3">{{ data.Links }}</ButtonComponent>
                 
                </td>
              
              </tr>

            
            </template>
          </tbody>
        </table>
      </div>
    </div>
<!--mobileVersion-->
 <!-- Mobile Layout -->
      <div class="md:hidden">
        <div class="divide-y divide-gray-200">
          <div v-for="data in DownloadData" :key="data.id" class="px-2 py-3">
            <!-- Order Card -->
            <div >
              <!-- Order Header -->
              <div class="flex items-start justify-between mb-1">
                <!-- Left Column: All Titles -->
                <div class="!w-[60%]">
                  <div class="flex flex-col !space-y-2">
                    <span class="text-sm text-gray-500">Name</span>
                    <span class="text-sm text-gray-500">Brand</span>
                    <span class="text-sm text-gray-500">Model</span>
                    <span class="text-sm text-gray-500">  Software Compatibility </span>
                    <span class="text-sm text-gray-500">Links</span>
                  </div>
                </div>
                

                <!-- Right Column: Data and Icons -->
                <div class="flex flex-1 justify-between !space-x-2">
                  <!-- Data -->
                  <div class="!space-y-2">
                    <!-- Order ID Row -->
                    <div class="flex items-center">
                      <span class="font-medium text-neutral-07-100">{{
                        data.name
                      }}</span>
                    </div>

                   
                    <div class="flex items-center">
                      <span class="text-sm font-medium text-neutral-07-100">{{
                        data.brand
                      }}</span>
                    </div>

                    <div class="flex items-center gap-2">
                      <span class="text-sm font-medium text-neutral-07-100">{{
                        data.model
                      }}</span>
                    </div>

                    <!-- Status Row -->
                    <div class="flex items-center text-neutral-700">
                      <span
                        
                        class="inline-flex py-0 text-xs font-semibold "
                      >
                        {{ data.SoftwareCompatibility }}
                      </span>
                    </div>
                     
                    
                  <ButtonComponent
                  
                  padding="px-4 py-2">{{ data.Links }}</ButtonComponent>
                  
                 
                  </div>
                  
        
                </div>
              </div>
            
            </div>
    <!-- Empty State -->
     <div v-if="DownloadData.length === 0" class="py-12 text-center">
      <p class="text-gray-500">No orders found</p>
    </div> 
  </div> </div> </div> </div>
</template>