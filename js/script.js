const { createApp } = Vue;

createApp({
  data() {
    return {
        // prova: 'ah',
    }
  },

  methods: {
    pescaPunti() {
        axios.get('./server.php').then(response => {
            console.log(response.data);
        });
    }
  }
}).mount('#app')