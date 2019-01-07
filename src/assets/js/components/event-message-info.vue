<template>
    <div class="grid-x grid-padding-x align-left text-center">
        <div class="cell shrink"><i class="circle flex-center" /> {{ message.name }}</div>
        <div class="cell shrink"><i class="circle flex-center" /> {{ niceDate }} </div>
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
}
</script>

<style>

</style>
