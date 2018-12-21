<template>
    <div class="event-message" v-bind:class="{new: message.isNew}">
        <div :src="message.image" class="icon" v-bind:class="[message.type, {new: message.isNew}]"></div>
        <div class="info">
            <div class="subject">{{ message.subject + " - " + message.name }}</div>
            <p class="message">{{ message.message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message'],
    methods: {
        markRead: function(event){
            this.message.isNew = false;
        }
    }
}
</script>

<style>

</style>
