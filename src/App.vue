<template>
  <div>
    <div class="titulo">Navita</div>
     <div class="container">
      <h1>Veículos</h1>
      <Card titulo="Marcas">
        <table>
          <tr>
            <th colspan="2">Marca</th>
          </tr>
          <tr v-for="marca in marcas" :key="marca.codigo">
            <td>{{ marca.nome }}</td>
            <td>
              <a
                href="#modelos"
                v-on:click="selecionarMarca(marca)"
                v-bind:class="{
                  active: marca.codigo == marcaSelecionada.codigo,
                }"
                >Ver Modelos</a
              >
            </td>
          </tr>
        </table>
      </Card>
      <Card titulo="Modelos" id="modelos">
        <table>
          <tr>
            <th>Modelo</th>
          </tr>
          <tr v-for="modelo in modelos" :key="modelo.codigo">
            <td>{{ modelo.nome }}</td>
          </tr>
        </table>
      </Card>
    </div>
    <div class="rodape">Copyright © Navita 2020</div>
  </div>
</template>

<script>
import Card from "./components/Card";
import FipeService from "./services/FipeService";

export default {
  name: "App",
  data() {
    return { marcas: [], marcaSelecionada: {}, modelos: [] };
  },
  async beforeMount() {
    this.marcas = await FipeService.getMarcas();
  },
  methods: {
    async selecionarMarca(marca) {
      this.marcaSelecionada = marca;
      this.modelos = await FipeService.getModelos(marca.codigo);
    },
  },
  components: {
    Card
  },

};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  color: #5a5c69;
  background-color: #f7f8fb;
  font-size: 1em;
  font-weight: 500;
  margin: 0;
}

.titulo {
  background-color: #ffffff;
  font-size: 1.5em;
  color: #1cc88a;
  margin: 0;
  padding: 20px;
  font-weight: 600;
}

.container {
  padding: 0 20px 0 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #e3e6f0;
  border-left: 0;
  border-right: 0;
  text-align: left;
  padding: 15px 10px;
}

.rodape {
  background-color: #ffffff;
  font-size: 1em;
  margin: 0;
  padding: 20px;
  text-align: center;
}

a {
  color: #4e73df;
  cursor: pointer;
  text-decoration: none;
}

a:active,
a.active {
  color: #1cc88a;
}
</style>
