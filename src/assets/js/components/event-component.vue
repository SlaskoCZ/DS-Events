<template>
  <div class="grid-y shadow shadow-light">
    <EventContainer
      v-if="isSimple === true"
      :messages="messages"
      :page-limit="itemsShown"
    />
    <EventContainer
      v-if="isSimple === false"
      :text="newText"
      :text-class="newTextClass"
      :messages="unread"
      :read-all="true"
    />
    <EventContainer
      v-if="isSimple === false"
      :text="readText"
      :text-class="readTextClass"
      :messages="read"
    />
    <p
      v-if="isLoaded === false"
      class="text-center"
    >
      Loading, please wait
    </p>
  </div>
</template>

<script>
import EventContainer from './event-container.vue';

export default {
    components:{
        EventContainer
    },
    props: {
        isSimple: Boolean,
        newText: {type: String, default: 'Nová oznámení' },
        newTextClass: {type: String, default: 'new' },
        readText: {type: String, default: 'Přečtené' },
        readTextClass: {type: String, default: '' },
        itemsShown: {type: Number, default: Number.MAX_VALUE},
        getMessages: {type: Function, default: undefined }
    },
    computed:{
        read: function(){
            if (!this.isLoaded)
                return this.messages;

            var view = [];
            for (let index = 0; index < this.messages.length; index++) {
                var message = this.messages[index];
                if(message.isNew == true)
                    continue;
                
                if (view.filter(x=> x.subject == message.subject).length > 0)
                    continue;

                message.subMessages = this.getGroup(message.subject, message.isNew);
                view.push(message);
                if(view.length >= this.itemsShown)
                    break;
            }

            return view;
        },
        unread: function(){
            if (!this.isLoaded)
                return this.messages;

            var view = [];
            for (let index = 0; index < this.messages.length; index++) {
                var message = this.messages[index];
                if(message.isNew == false)
                    continue;

                if (view.filter(x=> x.subject == message.subject).length > 0)
                    continue;

                message.subMessages = this.getGroup(message.subject, message.isNew);
                view.push(message);
                if(view.length >= this.itemsShown)
                    break;
            }

            return view;
        },
        isLoaded(){         
            return this.messages != undefined && this.messages.length > 0;
        }
    },
    methods:{
        getGroup(subject, isNew){
            return this.messages.filter(function(x) { return x.subject === subject && x.isNew == isNew; });
        }
    },
    asyncComputed:{
        messages() {
            return this.getMessages();
        }
    }
};
</script>

<style>

</style>
