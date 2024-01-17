import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#59486e',
                secondary: '#59486e',
                accent: '#59486e',
                info: '#59486e',
                success: '#2ada2b',
                error: '#f30070',
                warning: '#f30070',
            },
        },
    },
});
