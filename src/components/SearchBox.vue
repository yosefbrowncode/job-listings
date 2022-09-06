<script >
import { searchVar } from '/store.js'
export default {
  data() {
    return {
      searchVar,
    };
  },
  methods:{
    roleDelete(){
        searchVar.role = ""
    },
    levelDelete(){
        searchVar.level = ""
    },
    langDelete(e){
      searchVar.lang.splice(e,1)
      console.log(e)
      console.log(searchVar.lang)
    },
    toolDelete(e){
      searchVar.tool.splice(e,1)
    }
  },
}

</script>


<template>
  <div class="absolute top-24 inset-x-0 container mx-auto h-20 w-9/12 rounded-md bg-300 flex flex-row shadow-xl bg-my-white mt-5">
    <div class="basis-1/2 flex space-x-4 my-auto justify-start ml-10">
      <p v-if='searchVar.role' class=" bg-tag-color rounded-md text-my-cyan h-8   font-semibold text-sm cardFont flex  cursor-pointer" @click="roleDelete"><span class="my-auto px-2">{{searchVar.role}}</span><span class="h-100 w-8 bg-my-cyan rounded-r-md hover:bg-dark-tag"><img src="public/images/icon-remove.svg" class="mx-auto my-2"></span></p>
      <p v-if='searchVar.level' class=" bg-tag-color rounded-md text-my-cyan h-8   font-semibold text-sm cardFont flex  cursor-pointer" @click="levelDelete"><span class="my-auto px-2">{{searchVar.level}}</span><span class="h-100 w-8 bg-my-cyan rounded-r-md hover:bg-dark-tag"><img src="public/images/icon-remove.svg" class="mx-auto my-2"></span></p>
      <template v-for="(langs, index) in searchVar.lang" :key="langs.id">
        <p v-if='langs' class=" bg-tag-color rounded-md text-my-cyan h-8   font-semibold text-sm cardFont flex  cursor-pointer" @click="langDelete(index)"><span class="my-auto px-2">{{langs}}</span><span class="h-100 w-8 bg-my-cyan rounded-r-md hover:bg-dark-tag"><img src="public/images/icon-remove.svg" class="mx-auto my-2"></span></p>
      </template>
     <template v-for="(tools,index) in searchVar.tool" :key="tools.id">
        <p v-if='tools' class=" bg-tag-color rounded-md text-my-cyan h-8   font-semibold text-sm cardFont flex  cursor-pointer" @click="toolDelete(index)"><span class="my-auto px-2">{{tools}}</span><span class="h-100 w-8 bg-my-cyan rounded-r-md hover:bg-dark-tag"><img src="public/images/icon-remove.svg" class="mx-auto my-2"></span></p>
      </template>
    </div>  
  </div>
</template>


<style scoped>
.cardFont{
    font-family: 'League Spartan', sans-serif;
   
}

</style>
