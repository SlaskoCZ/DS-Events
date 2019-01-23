<template>
  <div class="grid-x grid-margin-x color-gray">
    <div class="cell shrink">
      <span>•</span> {{ message.name }}
    </div>
    <div class="cell shrink">
      <span>•</span> {{ niceDate }}
    </div>
    <div 
      v-if="message.isNew == true"
      class="cell auto show-for-small-only"
    >
      <svg class="icon-scale svg-i_check read-all float-right" />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        message: {type: Object, default: undefined },
    },
    computed: {
        niceDate() {
            return this.message.date;
        }
    }
};
</script>

<style>

</style>
