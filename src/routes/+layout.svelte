<script>
	import { Router, Route, Link } from 'svelte-routing';
	import Charts from "./Charts.svelte"
	import PieChart from './PieChart.svelte';

	import Home from './Home.svelte';
	import './styles.css';
	import '../app.css';
	import data from './data.json';

</script>

<Router>
	<Route path="/line-charts" component={Charts} />
	<Route path="/pie-charts" component={PieChart} data={data} />
</Router>

<div class="">
		<slot/>
</div>
