<template>
  <div
    class="event-message"
    :class="{new: message.isNew}"
  >
    <div
      :src="message.image"
      class="icon"
      :class="[message.type, {new: message.isNew}]" 
    >
      <div :class="message.type" />
    </div>
    <div class="info">
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
        showSubject: {type: Boolean, default: true}
    },
    methods: {
        markRead: function(){
            this.message.isNew = false;
        }
    }
};
</script>

<style>

</style>
