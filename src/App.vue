<template>
  <div id="app">
    <div>
      <label>Barcode:</label>
      <input type="text" v-model="barcode">
      <button @click="subminBarcode()">Добавить</button>
    </div>
    <div>
      <ul>
        <li v-for="barcode of barcodes" v-bind:key="barcode['.key']">
          <span>{{barcode[".value"]}}</span>
          <button @click='removeBarcode(barcode[".key"])'>Удалить</button>
          <br/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {namesRef} from './firebase'

export default { 
  data () {
    return {
      barcode:"asdlask"
    }
  },
  firebase: {
    barcodes: namesRef
  },
  methods:{
    subminBarcode(){
      namesRef.push(this.barcode)
    },
    removeBarcode(key){
      namesRef.child(key).remove();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
button {
  background-color: transparent;
  border: 2px solid black;    
  margin: 0 0 20px;
}
</style>
