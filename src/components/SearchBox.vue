<script >
import { searchVar } from '/store.js'
import { showBox } from '/store.js'
export default {
  data() {
    return {
      searchVar,
      showBox
    };
  },
  methods:{
    roleDelete(){
        searchVar.role = ""
        this.showBox.count--
    },
    levelDelete(){
        searchVar.level = ""
        this.showBox.count--
    },
    langDelete(e){
      searchVar.lang.splice(e,1)
      this.showBox.count--
    },
    toolDelete(e){
      searchVar.tool.splice(e,1)
      this.showBox.count--
    },
    clearAll(){
      searchVar.role = "",
      searchVar.level = "",
      searchVar.lang = [],
      searchVar.tool = [],
      this.showBox.count = 0
    }
  
  },
}

</script>


<template>
  <Transition>
    <div v-show="showBox.count > 0" class="absolute top-11 xs:top-20 md:top-24 inset-x-0 container mx-auto pb-4   h-fit  w-11/12 sm:w-9/12 rounded-md bg-300 flex flex-row shadow-xl bg-my-white mt-5">
      <div class="basis-3/4 flex flex-wrap md:space-x-4 my-auto justify-start ml-2 md:ml-10">
        <p v-if='searchVar.role' class=" bg-tag-color rounded-md text-my-cyan h-8   font-semibold text-sm cardFont flex mt-4  cursor-pointer mr-2" @click="roleDelete"><span class="my-auto px-2">{{searchVar.role}}</span><span class="h-100 w-8 bg-my-cyan rounded-r-md hover:bg-dark-tag"><img src="../assets/images/icon-remove.svg" class="mx-auto my-2"></span></p>
        <p v-if='searchVar.level' class=" bg-tag-color rounded-md text-my-cyan h-8   font-semibold text-sm cardFont flex mt-4   cursor-pointer mr-2" @click="levelDelete"><span class="my-auto px-2">{{searchVar.level}}</span><span class="h-100 w-8 bg-my-cyan rounded-r-md hover:bg-dark-tag"><img src="../assets/images/icon-remove.svg" class="mx-auto my-2"></span></p>
        <template v-for="(langs, index) in searchVar.lang" :key="langs.id">
          <p v-show='langs' class=" bg-tag-color rounded-md text-my-cyan h-8   font-semibold text-sm cardFont flex mt-4   cursor-pointer mr-2" @click="langDelete(index)"><span class="my-auto px-2">{{langs}}</span><span class="h-100 w-8 bg-my-cyan rounded-r-md hover:bg-dark-tag"><img src="../assets/images/icon-remove.svg" class="mx-auto my-2"></span></p>
        </template>
      <template v-for="(tools,index) in searchVar.tool" :key="tools.id">
          <p v-show='tools' class=" bg-tag-color rounded-md text-my-cyan h-8   font-semibold text-sm cardFont flex mt-4   cursor-pointer mr-2" @click="toolDelete(index)"><span class="my-auto px-2">{{tools}}</span><span class="h-100 w-8 bg-my-cyan rounded-r-md hover:bg-dark-tag"><img src="../assets/images/icon-remove.svg" class="mx-auto my-2"></span></p>
        </template>
      </div>  
      <div class="basis-1/4 flex md:space-x-4 my-auto justify-end mr-5 md:mr-10">
      <p class="font-semibold text-sm  cursor-pointer text-my-cyan hover:underline  hover:underline-offset-4 mt-4 " @click="clearAll">Clear</p>
      </div>
    </div>
  </Transition>
</template>


<style scoped>
.cardFont{
    font-family: 'League Spartan', sans-serif;
   
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
