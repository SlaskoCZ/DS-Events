<template>
  <div 
    v-if="view != undefined" 
    class="event-container"
  >
    <h4 :class="textClass">
      {{ text }}
    </h4>
    <template v-for="message in view">
      <EventMessage
        v-if="message.subMessages == undefined || message.subMessages.length <= 1"
        :key="message.index"
        :message="message"
      />
      <EventGroupMessage
        v-if="message.subMessages != undefined && message.subMessages.length > 1"
        :key="message.index"
        :message="message"
      />
    </template>
    <div 
      v-if="view.length == 0"
      class="text-center"
      :class="textClass"
    >
      Hurá, nemáte žádné {{ text }}.
    </div>
    <div class="navigation-panel sticky-bottom">
      <button
        v-if="showPages < maxPages"
        class="button navigation-button"
        @click="showPages = showPages + 1"
      >
        Načíst další
      </button>
    </div>
  </div>
</template>

<script>
import EventMessage from './event-message.vue';
import EventGroupMessage from './event-group-message.vue';

export default {
    components:{
        EventMessage,
        EventGroupMessage
    },
    props: {
        text: {type: String, default: '' }, 
        textClass: {type: String, default: '' }, 
        messages: {type: Array, default: undefined }, 
        pageLimit: {type: Number, default: undefined }},
    data(){
        return{
            showPages: 1
        };
    },
    computed:{
        pages: function(){
            var pages = [];
            var index = 0;
            if (this.messages == undefined)
                return undefined;

            var messages = this.messages;

            if(this.pageLimit == undefined){
                pages.push({index, messages});
                return pages;
            }

            for (index = 0; index < this.messages.length / this.pageLimit; index++) {
                var start = index * (this.pageLimit);
                messages = this.messages.slice(start, start + this.pageLimit);
                pages.push({index, messages});
            }
            
            return pages;
        },
        maxPages: function(){
            if (this.messages == undefined)
                return undefined;
            return this.pages.length;
        },
        view: function(){
            if (this.messages == undefined)
                return undefined;

            var result = [];
            
            for (let index = 0; index < this.showPages; index++) {
                for (let index2 = 0; index2 < this.pages[index].messages.length; index2++) {
                    result.push(this.pages[index].messages[index2]);
                }
            }

            return result;
        }
    }
};
</script>

// TODO Mark All as Read
// TODO Make date to nice date conversion



