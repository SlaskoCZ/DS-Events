import $ from 'jquery';
import 'what-input';
import AsyncComputed from 'vue-async-computed';
import Vue from 'vue';
import EventComponent from './components/event-component.vue';
import messagesFile from '../../data/messages.json';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';

$(document).foundation();
Vue.use(AsyncComputed);

new Vue({
    el: '#eventContent',
    components: {
        EventComponent,
    },
    methods: {
        getData(filter) {
            return getDataAsync(filter);
        }
    }
});


function getDataAsync(filter) {
    if (!filter)
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

function setMaxHeight() {
    var content = $('.event-component');
    var topBar = $('.top-bar');

    var maxHeight = $(window).height() - removePx(content.css('margin-top')) - removePx(content.css('margin-bottom')) - removePx(topBar.css('height'));
    content.css('max-height', maxHeight + 'px');
}

function removePx(number) {
    return number.replace('px', '');
}

$(function () {
    setMaxHeight();

    $(window).resize(function () {
        setMaxHeight();
    });
});