<template>
    <button class="text-4xl bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" @mousedown="addCount()">
      {{ text }} &nbsp;&nbsp; <span class='text-3xl'>{{ counter }}</span>
    </button>
</template>

<script>
export default {
  data: function () {
      return {
      }
  },
  methods : {
    addCount() {
      var newCount = this.counter + 1;
      var updates = {};
      updates[this.field] = newCount
      var countRef = this.$fireDb.ref('timers/' + this.$parent.id + '/reactions');
      countRef.update(updates);
      
    }
  },
  props: ['text', 'field', 'counter'],
  mounted: function() {
    console.log('button mounted')
    console.log(this.$parent.id)
    console.log('counter:',this.counter);
  }
}
</script>

<!-- 
TODO:
1. Mouse long click
-->