<template>
  <div
    class="grid-x"
    :class="{new: message.isNew}"
    @click="changeRead"
  >
    <div class="cell shrink">
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
    </div>
    <div 
      class="cell auto"
      :class="{small: useSmallIcon}" 
    >
      <div class="grid-y">
        <div class="cell shrink">
          <div class="grid-x small-up-1 medium-up-2 grid-margin-x h2-small-small"> 
            <div 
              v-if="showSubject"
              class="cell auto-important-medium subject"
            >
              <strong> {{ message.subject }}</strong>
            </div>
            <div class="cell auto-important-medium">
              <EventMessageInfo :message="message" />
            </div>
          </div>
        </div>
        <div class="cell">
          <p class="message text-small-small text-limit text-limit-disable-large width-90 width-75-large margin-0">
            {{ message.message }}
          </p>
        </div>
      </div>
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
        changeRead: function(e){
            e.stopPropagation();
            this.message.isNew = !this.message.isNew;
        }
    }
};
</script>

<style>
    
</style>
