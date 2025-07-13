<script setup>
import {useRoute} from '#imports'
import { IconChevronRight } from "@tabler/icons-vue";
const route=useRoute()
const props=defineProps({
    backLink:{
        type:String,
        default:'/'
    },
    currentLink:{
        type:String,
        default:'/contact'
    }
})

</script>
<template>
    <div class="font-medium font-poppins">
       <div class="flex justify-center gap-3 text-center mt-7">
        <div class="flex items-center gap-2 text-sm ">
          <NuxtLink
            :to="backLink"
            :class="
              route.path === backLink ? 'text-neutral-900' : 'text-[#605F5F]'
            "
          >
          <slot name="backRoute"/>
          </NuxtLink>
          <IconChevronRight
            :stroke="2"
            width="12"
            height="12"
            color="#605F5F"
          />
        </div> 
           <NuxtLink
          class="text-sm"
          :to="currentLink"
          :class="
            route.path === currentLink ? 'text-neutral-900' : 'text-[#605F5F]'
          "
        >
         <slot name="currentRoute"/>
        </NuxtLink> 
        </div>  
    </div>
</template>