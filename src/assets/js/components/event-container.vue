<template>
  <div 
    v-if="view != undefined" 
    class="cell"
    :class="{new: isNew}"
  >
    <p 
      class="group-name"
      :class="textClass"
    >
      {{ text }}
      <svg 
        v-if="readAll"
        class="float-right svg-i_check-double icon-scale read-all"
        @click="readAllMessages"
      />
    </p>
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
    <div 
      v-if="showPages < maxPages"
      class="navigation-panel"
    >
      <button
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
        pageLimit: {type: Number, default: undefined },
        readAll: {type: Boolean, default: false }
    },
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
        isNew: function() {
            return this.messages.filter(function(x) { return x.isNew == false; }).length == 0;
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

    },        
    methods: {
        readAllMessages() {
            console.log('ReadAll');
            this.messages.forEach(element => {
                element.isNew = false;
                if (element.subMessages.length > 0) {
                    element.subMessages.forEach(subElement => {
                        subElement.isNew = false;
                    });
                }
            });
        }
    }
};
</script>

// TODO Mark All as Read
// TODO Make date to nice date conversion



