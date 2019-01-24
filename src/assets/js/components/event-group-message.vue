<template>
  <div
    class="grid-x"
    :class="{new: message.isNew, 'shadow-light': showChildren}"
  >
    <div
      :src="message.image"
      class="cell shrink"
    >
      <div class="icon group">
        <div class="icon-group-number">
          {{ message.subMessages.length }}
        </div>
      </div>
    </div>
    <div class="cell auto">
      <div 
        class="grid-y"
        @click="toggleChildren"
      >
        <div class="info-box h2-small-small">
          <div class="subject bold">
            <strong> {{ message.subject }} </strong>
          </div>
          <p class="message text-small-small margin-0">
            {{ groupMessage }} 
            <i 
              class="arrow" 
              :class="{up: showChildren, down: !showChildren}"
            />
          </p>
        </div>
        <div
          v-if="showChildren"
          :key="'d' + message.index"
          class="childrens"
        >
          <template v-for="subMessage in subMessages">
            <EventMessage
              :key="subMessage.index"
              :message="subMessage"
              :show-subject="false"
              :use-small-icon="true"
              class="padding-top-18 padding-bottom-4"
            />
          </template>
        </div>
      </div>    
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
    computed:{
        subMessages(){
            return this.message.subMessages;
        },
        groupMessage(){
            return this.message.isNew ? 'Máte nová oznámení' : 'Skupina oznámení';
        }
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
