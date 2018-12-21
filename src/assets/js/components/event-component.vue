<template>
    <div class="event-component">
        <event-container v-bind:messages="messages" v-bind:pageLimit="itemsShownInt" v-if="isSimple === true"></event-container>
        <event-container v-bind:text="newTextInt" v-bind:textClass="newTextClassInt" v-bind:messages="unread" v-if="isSimple === false"></event-container>
        <event-container v-bind:text="readTextInt" v-bind:textClass="readTextClassInt" v-bind:messages="read" v-if="isSimple === false"></event-container>
    </div>
</template>

<script>
import EventContainer from './event-container.vue';
export default {
    props: {
        isSimple: Boolean,
        newText: String,
        newTextClass: String,
        readText: String,
        readTextClass: String,
        itemsShown: Number
    },
    data: function() {
        return{
            messages: getData(),
            newTextInt: this.newText ? this.newText : "Nová oznámení",
            newTextClassInt: this.newTextClass ? this.newTextClass : "new",
            readTextInt: this.readText ? this.readText : "Přečtené",
            readTextClassInt: this.readTextClass ? this.readTextClass : "",
            itemsShownInt: this.itemsShown ? this.itemsShown : Number.MAX_VALUE
        }
    },
     computed:{
        read: function(){
            return this.messages.filter(function(x) { return x.isNew === false }).slice(0, this.itemsShownInt);
        },
        unread: function(){
            return this.messages.filter(function(x) { return x.isNew === true }).slice(0, this.itemsShownInt);
        }
    },
    components:{
        EventContainer
    }
}

 function getData(url){
    return [
        { type: "message", message: "this is message! This is Reaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaly long message", subject: "subject", name: "Test User", index: 0, isNew: true }, 
        { type: "info", message: "this is message!", subject: "subject",  name: "Test User", index: 1, isNew: true }, 
        { type: "message", message: "this is message!", subject: "subject",  name: "Test User", index: 2, isNew: true }, 
        { type: "info", message: "this is message!", subject: "subject",  name: "Test User with long name", index: 3, isNew: true }, 
        { type: "info", message: "this is message!", subject: "subject",  name: "Test User", index: 4, isNew: true }, 
        { type: "info", message: "this is message!", subject: "subject0", name: "Test User", index: 11, isNew: false },
        { type: "info", message: "this is message!", subject: "subject1", name: "Test User", index: 12, isNew: false },
        { type: "info", message: "this is message!", subject: "subject2", name: "Test User", index: 13, isNew: false },
        { type: "info", message: "this is message!", subject: "subject3", name: "Test User", index: 14, isNew: false },
        { type: "info", message: "this is message!", subject: "subject4", name: "Test User", index: 15, isNew: false },
        { type: "info", message: "this is message!", subject: "subject5", name: "Test User", index: 16, isNew: false },
        { type: "info", message: "this is message!", subject: "subject6", name: "Test User", index: 17, isNew: false },
        { type: "info", message: "this is message!", subject: "subject7", name: "Test User", index: 18, isNew: false },
        { type: "info", message: "this is message!", subject: "subject8", name: "Test User", index: 24, isNew: false },
        { type: "info", message: "this is message!", subject: "subject9", name: "Test User", index: 25, isNew: false },
        { type: "info", message: "this is message!", subject: "subject10", name: "Test User", index: 26, isNew: false },
        { type: "info", message: "this is message!", subject: "subject11", name: "Test User", index: 27, isNew: false },
        { type: "info", message: "this is message!", subject: "subject12", name: "Test User", index: 28, isNew: false },
        { type: "info", message: "this is message!", subject: "subject13", name: "Test User", index: 29, isNew: false },
        { type: "info", message: "this is message!", subject: "subject14", name: "Test User", index: 34, isNew: false },
        { type: "info", message: "this is message!", subject: "subject15", name: "Test User", index: 35, isNew: false },
        { type: "info", message: "this is message!", subject: "subject16", name: "Test User", index: 36, isNew: false },
        { type: "info", message: "this is message!", subject: "subject17", name: "Test User", index: 37, isNew: false },
        { type: "info", message: "this is message!", subject: "subject18", name: "Test User", index: 38, isNew: false }
        ];
 }
</script>

<style>

</style>
