<script >
import jobData from "/data.json"
import { searchVar } from '/store.js'
import { showBox } from '/store.js'
export default {
  data() {
    return {
      jobs: jobData,
      searchVar,
      showBox
      
    };
  },
  methods:{
      roleFunc(e){
          if(!this.searchVar.role){
              this.showBox.count++
          }
          this.searchVar.role = e
      },
      levelFunc(e){
          if(!this.searchVar.level){
              this.showBox.count++
          }
          this.searchVar.level = e
          
      },
      langFunc(e){
          let hasAlready = this.searchVar.lang.includes(e)
          if(!hasAlready){
              this.searchVar.lang.push(e)
              this.showBox.count++
          }
          
      },
      toolFunc(e){
          let hasAlready = this.searchVar.tool.includes(e)
          if(!hasAlready){
              this.searchVar.tool.push(e)
              this.showBox.count++
          }
          
      }
  },
  computed:{
      filteredSearch() {
    let jobsNew = this.jobs
    
      if (this.searchVar.role)
      jobsNew = jobsNew.filter((item) => {
        return (item.role.includes(this.searchVar.role))
      })

      if (this.searchVar.level)
      jobsNew = jobsNew.filter((item) => {
        return (item.level.includes(this.searchVar.level))
      })

      if (this.searchVar.lang.length > 0)
        for(let i = 0; i < this.searchVar.lang.length; i++){
            jobsNew = jobsNew.filter((item) => {
                return (item.languages.includes(this.searchVar.lang[i]))
            })
              }

      if (this.searchVar.tool.length > 0)
        for(let i = 0; i < this.searchVar.tool.length; i++){
             jobsNew = jobsNew.filter((item) => {
            return (item.tools.includes(this.searchVar.tool[i]))
        })
        }
       

      return jobsNew
}
  
}
}

</script>




 <template>
 <div class="cardDicv mt-40 md:mt-20 mb-40 pb-40" >
    <div v-for="job in filteredSearch" :key="job.id" :class="{ ' border-my-cyan border-l-4 xl:border-l-0 ' : job.featured }" class="container mx-auto h-72 sm:h-60 xl:h-40 w-11/12 sm:w-9/12 rounded-md bg-300 flex flex-col xl:flex-row shadow-xl bg-my-white mt-14 sm:mt-5">
            <div class="bg-my-cyan w-1.5 h-100 rounded-l-md flex   " v-if="job.featured"></div>
                <div class="xl:basis-1/2 mt-10 sm:mt-7  xl:my-auto relative flex ml-5 mr-5 xs:ml-10 xs:mr-10  xl:ml-0  border-stone-300  border-b xl:border-0 pb-7 xl:pb-0">
                    <img class="absolute -mt-20 sm:m-0 sm:relative w-16 h-auto md:w-24 lg:w-24 xl:w-24  align-middle   rounded-full" :src="job.logo" alt="">
            
                    <div class="container flex flex-col space-y-2 sm:space-y-0">
                        <div class="basis-full basis-1/2 container h-fit flex flex-row space-x-4 sm:ml-8 ">
                            <p class="font-bold text-base text-my-cyan h-fit">{{job.company}}</p>
                            <p class="rounded-full py-1 px-2 bg-my-cyan h-fit text-my-white cardFont text-xs font-bold" v-if="job.new">NEW!</p>
                            <p class="rounded-full py-1 px-2 bg-dark-tag h-fit text-my-white cardFont text-xs font-bold" v-if="job.featured">FEATURED</p>
                        </div>
                    
                        <div><h2 class="font-extrabold text-md sm:text-lg text-dark-tag text-left sm:ml-8 cardFont hover:text-my-cyan cursor-pointer">{{job.position}}</h2></div>
                        <div class="basis-1/2 container h-fit flex flex-row space-x-4 sm:ml-8 mt-1">
                            <p class=" text-sm font-semibold text-my-cyan h-fit text-light-tag my-auto">{{job.postedAt}}</p>
                            <span class="text-light-tag text-xs my-auto">&#9679;</span>
                            <p class="h-fit   text-sm font-semibold text-light-tag my-auto">{{job.contract}}</p>
                            <span class="text-light-tag text-xs my-auto">&#9679;</span>
                            <p class="h-fit   text-sm font-semibold text-light-tag my-auto ">{{job.location}}</p>
                        </div>


                    </div>
            

            </div>

            <div class="xl:basis-1/2 flex sm:space-x-4  my-auto flex-wrap justify-start xl:justify-end ml-5 xs:ml-10  xl:mr-10">
         
                <p class=" bg-tag-color p-2 rounded-md text-my-cyan h-fit font-semibold text-sm cardFont hover:bg-my-cyan    hover:text-my-white cursor-pointer my-auto mr-3 mt-2 sm:mt-0 sm:mr-0  " @click="roleFunc(job.role)">{{job.role}}</p>
                <p class="level bg-tag-color p-2 rounded-md text-my-cyan h-fit  font-semibold text-sm cardFont hover:bg-my-cyan   hover:text-my-white cursor-pointer my-auto mr-3 mt-2 sm:mt-0 sm:mr-0" @click="levelFunc(job.level)">{{job.level}}</p>
                <template v-for="lang in job.languages">
                    <p class="languages bg-tag-color p-2 rounded-md text-my-cyan h-fit font-semibold text-sm cardFont hover:bg-my-cyan   hover:text-my-white cursor-pointer my-auto mr-3 mt-2 sm:mt-0 sm:mr-0" @click="langFunc(lang)">{{lang}}</p>
                </template>
                <template v-for="tool in job.tools">
                    <p class="languages bg-tag-color p-2 rounded-md text-my-cyan h-fit  font-semibold text-sm cardFont hover:bg-my-cyan   hover:text-my-white cursor-pointer my-auto mr-3 mt-2 sm:mt-0 sm:mr-0" @click="toolFunc(tool)">{{tool}}</p>
                </template>
            </div>
    </div>
 </div>

</template>

<style scoped>
.cardFont{
    font-family: 'League Spartan', sans-serif;
   
}

</style>
