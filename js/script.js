const { createApp } = Vue;

createApp({
  data() {
    return {
        // prova: 'ah',
        punti: [],
        nuovoPunto: '',
    }
  },

  methods: {
    pescaPunti() {
      axios.get('./server.php').then(response => {
        // console.log('ldfuhvliegfvler')
        console.log(response.data);
        // this.log('ldfuhvliegfvler')
            this.punti = response.data;
        });
    },

    mettiPunto() {
        //this.nuovoPunto = '';
        let dati = {
            nuovoPunto: '',
        }
        dati.nuovoPunto = this.nuovoPunto;
        console.log(this.nuovoPunto);
        //this.nuovoPunto = ''
        //non su usa il push perché non si salverebbe poi nel json
        //per far sì che il tutto si salvi anche nel json faremo la seguente operazione
        axios.post('./server.php', dati, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
            console.log("ciao grande, la tua chiamata è avvenuta");
            
            // posso ricaricare i todo
            this.pescaPunti();
            console.log(this.nuovoPunto);
        });
    }
  },

  mounted() {
    console.log(this.nuovoPunto)
    this.pescaPunti();
  },
}).mount('#app')