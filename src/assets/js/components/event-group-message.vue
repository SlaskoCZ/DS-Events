<template>
  <div
    class="event-message group"
    :class="{new: message.isNew}"
  >
    <div @click="toggleChildren">
      <div
        :src="message.image"
        class="icon group"
        :class="[{new: message.isNew}]" 
      >
        <div class="icon-group-number">
          {{ message.subMessages.length }}
        </div>
      </div>
      <div class="info">
        <div class="subject">
          {{ message.subject + " - " + message.name }}
        </div>
      </div>
    </div>
    <div
      v-if="showChildren"
      :key="'d' + message.index"
      class="childrens"
    >
      <template v-for="subMessage in message.subMessages">
        <EventMessage
          :key="subMessage.index"
          :message="subMessage"
          :show-subject="false"
        />
      </template>
    </div>      
  </div>
</template>

<script>
import EventMessage from './event-message.vue';

export default {
    components:{
        EventMessage
    },
    props: {
        message: {type: Object, default: undefined } 
    },
    data(){
        return{
            showChildren: false
        };
    },
    methods: {
        toggleChildren() {
            this.showChildren = !this.showChildren;
        }
    }
};
</script>

<style>

</style>
