<template>
  <div class="input-group | mb-1 | p-3">
    <!-- It's better to be explicit -->
    <!-- Don't forget to bind the property with ":" (we forget all the time!) -->
      <input class="form-control file" type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
      <button :disabled="disableSubmit" class="btn btn-primary right" v-on:click="submitForm()">Upload</button>

  </div>
</template>

<script>
/// //////////////////////////////////////
export default {
  data () {
    return {
      fileInfos: []
    }
  },
  // props: [ 'value' ],
  computed: {
  },
  methods: {
    onChange: function () {
      console.log("change handle")
    },
    submitForm: function () {
      console.log("submit handle")
    }
  },
  mounted () {
    console.log("mounted handle")
  }
}
</script>
<style scoped>
.mt25 {
  margin-top: 10px;
}
input {
  border:none;
  background-color: transparent;
  color: #495057;
}
.form-control:focus {
  box-shadow: none;
}
input:focus {
    outline: none;
}
.grey {
  color: gray;
}

.success {
  color: forestgreen;
}

.fail {
  color: crimson;
}

.block {
  display: block;
  width: 100%;
  padding: 1.1em;
}

.input-group {
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    padding: 0px 10px;
}
</style>
