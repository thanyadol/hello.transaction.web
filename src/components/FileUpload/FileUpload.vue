<template>
  <div class="input-group | mb-1 | p-3">
    <!-- It's better to be explicit -->
    <!-- Don't forget to bind the property with ":" (we forget all the time!) -->
    <input
      class="form-control file"
      type="file"
      id="file"
      ref="file"
      v-on:change="onChangeFileUpload()"
    />
    <button
      :disabled="disableSubmit"
      class="btn btn-primary right"
      v-on:click="submitForm()"
    >
      Upload
    </button>

    <div
      v-bind:class="{ success: success, fail: !success }"
      v-show="message"
      class="block"
    >
      <hr />
      <span> {{ message }} </span>
    </div>
  </div>
</template>

<script>
/// //////////////////////////////////////
import { AttachmentService } from '../../resources';

export default {
  data() {
    return {
      disableSubmit: false,
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: '',
      success: true,
      fileInfos: [],
    };
  },
  // props: [ 'value' ],
  computed: {},
  methods: {
    onChangeFileUpload() {
      this.selectedFiles = this.$refs.file.files;
      this.message = '';
    },
    submitForm() {
      this.message = '';
      this.disableSubmit = true;
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);

      AttachmentService.postUpload(this.currentFile, (event) => {
        // calculate file percentage
        this.progress = Math.round((100 * event.loaded) / event.total);
        console.log(this.progress);
      })
        .then((response) => {
          this.message = `${response.data.loadedTransaction.length} records imported`;
          console.log(response.data);
          this.disableSubmit = false;
          this.success = true;
          // return AttachmentService.getUpload()
        })
        .then((files) => {
          this.fileInfos = files.data;
        })
        .catch((err) => {
          this.progress = 0;
          this.message = err.response.data.Message;
          this.currentFile = undefined;
          this.disableSubmit = false;
          this.success = false;
          // console.log(err.response.data.Message)
        });
      this.selectedFiles = undefined;
    },
  },
  mounted() {
    // console.log(this.value)
  },
};
</script>
<style scoped>
.mt25 {
  margin-top: 10px;
}
input {
  border: none;
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
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0px 10px;
}
</style>
