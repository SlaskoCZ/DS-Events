<template>
    <div class="event-container">
        <h4 v-bind:class="textClass">{{ text }}</h4>
        <template v-for="message in view">
            <event-message v-bind:key="message.index" v-bind:message="message"/>
        </template>
        <button v-if="showPages < maxPages" @click="showPages = showPages + 1">Načíst další</button>
        <button v-if="showPages > 1" @click="showPages = showPages - 1">Zpět</button>
    </div>
</template>

<script>
import EventMessage from './event-message.vue';

export default {
    props: ['text', 'textClass', 'messages', 'pageLimit'],
    data(){
        return{
            showPages: 1,
            maxPages: 0
        }
    },
    components:{
        EventMessage
    },
    computed:{
        pages: function(){
            var pages = [];
            var index = 0;
            var messages = this.messages;

            if(this.pageLimit == undefined){
                
                pages.push({index, messages});
                return pages;
            }

            for (index = 0; index < this.messages.length / this.pageLimit; index++) {
                var start = index * (this.pageLimit);
                messages = this.messages.slice(start, start + this.pageLimit)
                pages.push({index, messages});
                this.maxPages++;
            }
            return pages;
        },
        view: function(){
            var result = [];
            
            for (let index = 0; index < this.showPages; index++) {
                for (let index2 = 0; index2 < this.pages[index].messages.length; index2++) {
                    result.push(this.pages[index].messages[index2]);
                }
            }

            return result;
        }
    }
}
</script>

// TODO Show only x items per page add load more
// TODO Mark All as Read
// TODO Make date to nice date conversion



