<script >
import jobData from "/data.json"
export default {
  data() {
    return {
      jobs: jobData,
    };
  },
};

</script>




 <template>
 <div class="cardDicv" v-for="job in jobs" :key="job.id">
    <div class="container mx-auto h-40 w-9/12 rounded-md bg-300 flex flex-row shadow-xl bg-my-white mt-5">
            <div class="bg-my-cyan w-1.5 rounded-l-md" v-if="job.featured"></div>
            <div class="basis-1/2 my-auto flex flex-row">
            <img class="w-24 h-124 align-middle  ml-9 rounded-full" :src="job.logo" alt="">
     
            <div class="container flex flex-col">
                <div class="basis-1/2 container h-fit flex flex-row space-x-4 ml-8">
                    <p class="font-bold text-base text-my-cyan h-fit">{{job.company}}</p>
                    <p class="rounded-full py-1 px-1.5 bg-my-cyan h-fit text-my-white cardFont text-xs font-bold" v-if="job.new">NEW!</p>
                    <p class="rounded-full py-1 px-1.5 bg-dark-tag h-fit text-my-white cardFont text-xs font-bold" v-if="job.featured">FEATURED</p>
                </div>
            
                <div><h2 class="font-extrabold text-lg text-dark-tag text-left ml-8 cardFont">{{job.position}}</h2></div>
                <div class="basis-1/2 container h-fit flex flex-row space-x-4 ml-8 mt-1">
                    <p class=" text-sm font-medium text-my-cyan h-fit text-light-tag">{{job.postedAt}}</p>
                    <span class="text-light-tag">&#9679;</span>
                    <p class="h-fit   text-sm font-medium text-light-tag">{{job.contract}}</p>
                    <span class="text-light-tag">&#9679;</span>
                    <p class="h-fit   text-sm font-medium text-light-tag ">{{job.location}}</p>
                </div>


            </div>
            

            </div>

            <div class="basis-1/2 flex space-x-4 my-auto justify-end mr-10">
                <div class="position bg-tag-color p-2 rounded-md">
                    <p class="text-my-cyan  font-semibold text-sm cardFont">{{job.role}}</p>
                </div>
                <div class="level bg-tag-color p-2 rounded-md">
                    <p class="text-my-cyan  font-semibold text-sm cardFont">{{job.level}}</p>
                </div>
                <div v-for="lang in job.languages">
                    <div class="languages bg-tag-color p-2 rounded-md">
                    <p class="text-my-cyan  font-semibold text-sm cardFont">{{lang}}</p>
                    </div>
                </div>
                <div v-for="tool in job.tools">
                    <div class="languages bg-tag-color p-2 rounded-md">
                    <p class="text-my-cyan  font-semibold text-sm cardFont">{{tool}}</p>
                    </div>
                </div>
            </div>
    </div>
 </div>

</template>

<style scoped>
.cardFont{
    font-family: 'League Spartan', sans-serif;
   
}

</style>
