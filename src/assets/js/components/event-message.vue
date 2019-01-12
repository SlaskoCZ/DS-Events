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
        <!-- Transform to grid-y on medium up -->
        <div class="cell shrink">
          <div class="grid-y"> 
            <div 
              v-if="showSubject"
              class="cell shrink subject"
            >
              {{ message.subject + " - " + message.name }}
            </div>
            <div class="cell auto">
              <EventMessageInfo :message="message" />
            </div>
          </div>
        </div>
        <div class="cell auto">
          <p class="message">
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
        changeRead: function(){
            this.message.isNew = !this.message.isNew;
        }
    }
};
</script>

<style>
    
</style>
