<template>
  <div
    class="event-message"
    :class="{new: message.isNew}"
    @click="changeRead"
  >
    <div
      :src="message.image"
      class="icon"
      :class="[message.type, {new: message.isNew}, {small: useSmallIcon}]" 
    >
      <div :class="message.type" />
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
      <p class="message">
        {{ message.message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        message: {type: Object, default: undefined },
        showSubject: {type: Boolean, default: true},
        useSmallIcon: {type: Boolean, default: false},
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
