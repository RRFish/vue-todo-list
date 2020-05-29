<template>
  <div>
		<table>
			<tr>
				<td>
					<select v-model="select.year">
						<option value="年" disabled>年</option>
						<option v-for="y in getYearList()" :value="y" :key="'year'+y">{{y}}</option>
					</select>
				</td>
				<td>
					<select v-model="select.month">
						<option value="月" disabled>月</option>
						<option v-for="m in getMonthList()" :value="m" :key="'month'+m">{{m}}</option>
					</select>					
				</td>
				<td>
					<select v-model="select.day">
						<option value="日" disabled>日</option>
						<option v-for="d in getDayList()" :value="d" :key="'day'+d" :disabled="d=='請選擇年月'">{{d}}</option>
					</select>					
				</td>				
			</tr>
		</table>
  </div>
</template>

<script>
export default {
	created(){
		this.year=new Date().getFullYear();
	},
	data(){
		return {
			year:"",
			select:{
				year:'年',
				month:'月',
				day:'日'
			}
		}
	},
	methods:{
		getYearList(){
			const list = [];
			for(let i = this.year ; i < this.year+5 ; i++){
				list.push(i)
			}
			return list;
		},
		getMonthList(){
			const list =[];
			for(let i=1;i<=12;i++){
				list.push(i)
			}
			return list;
		},
		getDayList(){
			const year = this.select.year;
			const month = this.select.month;
			if(year=='年' || month=='月') return ['請選擇年月'];

			const list = [];
			const days = new Date(year,month,0).getDate();
			for(let i=0 ; i<=days ; i++){
				list.push(i);
			}
			return list;
		}
	}
}
</script>

<style>

</style>