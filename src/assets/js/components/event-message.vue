<template>
    <div class="event-message" v-bind:class="{new: message.isNew}">
        <img :src="message.image" class="image"/> 
        <div class="info">
            <div class="subject">{{ message.subject + " - " + message.name }}</div>
            <p class="message">{{ message.message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style>

</style>
