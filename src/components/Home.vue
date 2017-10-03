<template>
<div>
	<h1>Welcome to <del>Cut Off</del></h1>
	<br>
	<form v-if="!inProgress" @submit.prevent="update">
	<h4>AIIM UPDATE</h4>
	<div >
		<label > Path </label>
		<input style="min-width:500px" type="text" v-model="path">
	</div>
	<br>
	<div >
		<label > Institute </label>
		<input style="min-width:500px" type="text" v-model="data.INSTITUTE">
	</div>
	<br>
	<div>
		<!-- <label> Gen Open <input type="number" name="genopen"></label> -->
		<label> Gen <input type="number" name="genclose" v-model="data.GEN"></label>
	</div>
	<br>
	<div>
		<!-- <label> BC Open <input type="number" name="bcopen"></label> -->
		<label> BC <input type="number" name="bcclose" v-model="data.BC"></label>
	</div>
	<br>
	<div>
		<!-- <label> SC Open <input type="number" name="scopen"></label> -->
		<label> SC <input type="number" name="scclose" v-model="data.SC"></label>
	</div>
	<br>
	<div>
		<!-- <label> ST Open <input type="number" name="stopen"></label> -->
		<label> ST <input type="number" name="stclose" v-model="data.ST"></label>
	</div>
	<br>
	<button type="submit">Submit</button>
	</form>
	<div v-else>
		Please wait .... 
	</div>
</div>
</template>
<script type="text/javascript">
import {db} from './../firebase.js'
export default {
  data () {
    return {
      user: null,
      inProgress: false,
      path: 'AIIMS_MBBS/',
      data: {
        GEN: 0,
        BC: 0,
        SC: 0,
        ST: 0,
        INSTITUTE: 'AIIMS, '
      }
    }
  },
  mounted () {
    this.user = this.$parent._data.user
  },
  methods: {
    update () {
      var newPostKey = db.ref().child('CUT_OFF/' + this.path).push().key
      var updates = {}
      updates['CUT_OFF/' + this.path + '/' + newPostKey] = this.data
      db.ref().update(updates)
      .then(() => {
        alert('Success')
      })
      .catch(() => {
        alert('Error')
      })
    }
  }
}
</script>
