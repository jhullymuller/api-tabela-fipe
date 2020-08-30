<template>
  <div>
    <div class="titulo">Navita</div>
    <div class="container">
      <h1>Veículos</h1>
      <div class="card">
        <div class="header">
          <h2>Marcas</h2>
        </div>
        <div class="conteudo">
          <table>
            <tr>
              <th colspan="2">Marca</th>
            </tr>
            <tr>
              <td>Chevrolet</td>
              <td>
                <a>Ver Modelos</a>
              </td>
            </tr>
            <tr>
              <td>Fiat</td>
              <td>
                <a>Ver Modelos</a>
              </td>
            </tr>
            <tr>
              <td>Ford</td>
              <td>
                <a>Ver Modelos</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="header">
          <h2>Modelos</h2>
        </div>
        <div class="conteudo">
          <table>
            <tr>
              <th>Modelo</th>
            </tr>
            <tr>
              <td>Onix</td>
            </tr>
            <tr>
              <td>Prisma</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="rodape">Copyright © Navita 2020</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { todos: [], todo: { checked: false } };
  },
  methods: {
    addTodo(todo) {
      todo.id = Date.now();
      this.todos.push(todo);
      this.todo = { checked: false };
    },
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

.card {
  background-color: #fff;
  box-shadow: 0 0 1em rgba(58, 59, 69, 0.15);
  margin-bottom: 20px;
  border: 1px solid #e3e6f0;
  border-radius: 5px;
}
.card .header {
  background-color: #f8f9fc;
  color: #4e73df;
  padding: 1px 15px;
  border-bottom: 1px solid #e3e6f0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card .header h2 {
  font-size: 1em;
}

.card .conteudo {
  padding: 30px 20px;
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
}

a:active {
  color: #1cc88a;
}
</style>