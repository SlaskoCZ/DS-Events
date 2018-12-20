<template>
    <div class="event-container">
        <h4>{{ text }}</h4>
        <template v-for="message in messages">
            <event-message v-bind:key="message.index" v-bind:message="message"/>
        </template>
    </div>
</template>

<script>
import EventMessage from './event-message.vue';

export default {
    props: ['text'],
    data(){
        return{
            messages: getData()
        }
    },
    components:{
        EventMessage
    }
}

 function getData(url){
    return [
        { message: "this is message! This is Reaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaly long message", subject: "subject", name: "Test User", index: 0, isNew: true }, 
        { message: "this is message!", subject: "subject",  name: "Test User", index: 1, isNew: true }, 
        { message: "this is message!", subject: "subject",  name: "Test User", index: 2, isNew: true }, 
        { message: "this is message!", subject: "subject",  name: "Test User with long name", index: 3, isNew: true }, 
        { message: "this is message!", subject: "subject",  name: "Test User", index: 4, isNew: true }, 
        { message: "this is message!", subject: "subject0", name: "Test User", index: 11, isNew: false },
        { message: "this is message!", subject: "subject1", name: "Test User", index: 12, isNew: false },
        { message: "this is message!", subject: "subject2", name: "Test User", index: 13, isNew: false },
        { message: "this is message!", subject: "subject3", name: "Test User", index: 14, isNew: false }
        ];
 }
</script>
