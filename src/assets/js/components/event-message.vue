<template>
  <div
    class="event-message"
    :class="{new: message.isNew}"
  >
    <div
      :src="message.image"
      class="icon"
      :class="[message.type, {new: message.isNew}]" 
    />
    <div class="info">
      <div class="subject">
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
        message: {type: Object, default: undefined } 
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
