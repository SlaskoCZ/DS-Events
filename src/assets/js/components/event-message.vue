<template>
  <div
    class="event-message flex align-items-center hover-shadow"
    :class="{new: message.isNew}"
    @click="changeRead"
  >
    <div
      :src="message.image"
      class="icon"
      :class="[message.type, {new: message.isNew}, {small: useSmallIcon}]" 
    >
      <svg 
        class="icon-scale" 
        :class="iconClass" 
      />
    </div>
    <div 
      class="info-box"
      :class="{small: useSmallIcon}" 
    >
      <div 
        v-if="showSubject"
        class="subject"
      >
        {{ message.subject + " - " + message.name }}
      </div>
      <EventMessageInfo :message="message" />
      <p class="message">
        {{ message.message }}
      </p>
    </div>
  </div>
</template>

<script>
import EventMessageInfo from './event-message-info.vue';

export default {
    components:{
        EventMessageInfo
    },
    props: {
        message: {type: Object, default: undefined },
        showSubject: {type: Boolean, default: true},
        useSmallIcon: {type: Boolean, default: false},
    },
    computed: {
        iconClass() {
            return 'svg-i_' + this.message.type;
        }
    },
    methods: {
        changeRead: function(){
            this.message.isNew = !this.message.isNew;
        }
    }
};
</script>

<style>
    
</style>
