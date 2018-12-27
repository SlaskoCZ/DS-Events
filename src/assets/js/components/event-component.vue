<template>
  <div class="event-component">
    <EventContainer
      v-if="isSimple === true && isLoaded === true"
      :messages="messages"
      :page-limit="itemsShown"
    />
    <EventContainer
      v-if="isSimple === false && isLoaded === true"
      :text="newText"
      :text-class="newTextClass"
      :messages="unread"
    />
    <EventContainer
      v-if="isSimple === false && isLoaded === true"
      :text="readText"
      :text-class="readTextClass"
      :messages="read"
    />
    <p
      v-if="isFailed === true"
      class="text-center"
    >
      Something went wrong!
    </p>
    <p
      v-if="isFailed === false && isLoaded === false"
      class="text-center"
    >
      Loading, please wait
    </p>
  </div>
</template>

<script>
import EventContainer from './event-container.vue';
import messagesFile from '../../../data/messages.json';

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
        itemsShown: {type: Number, default: Number.MAX_VALUE}
    },
    data: function() {
        return{
            messages:  undefined
        };
    },
    computed:{
        read: function(){
            return this.messages.filter(function(x) { return x.isNew === false; }).slice(0, this.itemsShown);
        },
        unread: function(){
            return this.messages.filter(function(x) { return x.isNew === true; }).slice(0, this.itemsShown);
        },
        isLoaded: function(){
            if(this.isFailed)
                return false;

            if(Array.isArray(this.messages))
                return true;

            return false;
        },
        isFailed: function(){
            return false;
        }
    },
    mounted: function(){
        this.getData();
    },
    methods:{
        getData(){
            getDataAsync().then(data => this.messages = data );
        }
    },
};

function getDataAsync(filter) {
    if(!filter)
        filter = '';

    return new Promise((resolve) => {
        setTimeout(() => {
            const results = messagesFile.filter((element) => {
                return element.subject.toLowerCase().includes(filter.toLowerCase());
            });
            resolve(results);
        }, 1000);
    });
}
</script>

<style>

</style>
