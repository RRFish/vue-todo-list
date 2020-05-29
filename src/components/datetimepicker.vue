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
				<td>
					<select v-model="select.hour">
						<option value="時" disabled>時</option>
						<option v-for="h in getHourList()" :value="h" :key="'hour'+h" >{{h}}</option>
					</select>					
				</td>	
				<td>
					<select v-model="select.minute">
						<option value="分" disabled>分</option>
						<option v-for="m in getMinOrSecList()" :value="m" :key="'minute'+m" >{{m}}</option>
					</select>					
				</td>	
				<td>
					<select v-model="select.second">
						<option value="秒" disabled>秒</option>
						<option v-for="s in getMinOrSecList()" :value="s" :key="'second'+s" >{{s}}</option>
					</select>					
				</td>			
			</tr>
		</table>
  </div>
</template>

<script>
export default {
	props:['date'],
	created(){
		this.year=new Date().getFullYear();
		if(this.date){
			const date=new Date(this.date);
			const sel = this.select;

			sel.year = date.getFullYear();
			sel.month = date.getMonth()+1;
			sel.day = date.getDate();
			sel.hour = date.getHours();
			sel.minute = date.getMinutes();
			sel.second = date.getSeconds();
		}
		this.getformatDatetime();
	},
	data(){
		return {
			year:"",
			select:{
				year:'年',
				month:'月',
				day:'日',
				hour:"時",
				minute:"分",
				second:"秒"
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
		},
		getHourList(){
			const list =[];
			for(let i=1;i<=24;i++){
				list.push(i)
			}
			return list;
		},
		getMinOrSecList(){
			const list =[];
			for(let i=0;i<=59;i++){
				list.push(i)
			}
			return list;
		},	
		getformatDatetime(){
			const sel = this.select;
			const datetime = `${sel.year}-${sel.month}-${sel.day} ${sel.hour}:${sel.minute}:${sel.second}`;
			console.log(datetime)
			return datetime;
		}	
	}
}
</script>

<style>

</style>