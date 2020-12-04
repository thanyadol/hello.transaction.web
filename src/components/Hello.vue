<template>
  <div>
    <div class="hello container">
      <h2>{{ msg }}</h2>
      <div class="row | mt-5 mb-5 | flex--col">
        <div class="col-md">
          <upload></upload>
        </div>
      </div>
    </div>
    <hr />
    <div class="row | col-md | my-5 | footer">
      <span> {{ footerText }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      msg: `Hello World with Vue.js 4.5.9 at ${new Date()}`,
      footerText: '© 2020 Hello '
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  background-color: #f8f9fad9;
}
.footer {
  position: absolute;
  bottom: 10px;
  display: block;
  text-align: center;
}
</style>
