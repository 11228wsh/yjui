<template>
  <div :class="['yj-input', inputSize ? 'yj-input--' + inputSize : '']">
    <input
      v-if="type !== 'textarea'"
      class="yj-input__inner"/>

    <textarea
    v-else
    class="yj-textarea__inner">
    </textareav-else>
  </div>
</template>

<script>
export default {
  name: 'YjInput',

  data () {
    return {

    }
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: String
  },

  computed: {
    inputSize () {
      return this.size
    }
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }

}
</script>

<style>
  .yj-input{cursor: pointer;position: relative;font-size: 14px;display: inline-block;width: 100%;}
  .yj-input__inner{cursor: pointer;-webkit-appearance: none;background-color: #fff;background-image: none;
    border-radius: 4px;border: 1px solid #dcdfe6;box-sizing: border-box;color: #606266;
    display: inline-block;font-size: inherit;height: 40px;line-height: 40px;outline: none;
    padding: 0 15px;transition: border-color .2s cubic-bezier(.645,.045,.355,1);width: 100%;}
  .yj-input--medium .yj-input__inner {height: 36px;line-height: 36px;}
  .yj-input--small .yj-input__inner {height: 32px;line-height: 32px;}
  .yj-input.is-active .yj-input__inner,.yj-input__inner:focus{border-color:#409EFF;outline:0}

  .yj-textarea {position: relative;display: inline-block;width: 100%;vertical-align: bottom;font-size: 14px;}
  .yj-textarea__inner {display: block;resize: vertical;padding: 5px 15px;line-height: 1.5;
    box-sizing: border-box;width: 100%;font-size: inherit;color: #606266;
    background-color: #fff;background-image: none;border: 1px solid #dcdfe6;
    border-radius: 4px;transition: border-color .2s cubic-bezier(.645,.045,.355,1);}
  .yj-textarea__inner:focus{outline:0;border-color:#409EFF}
</style>
