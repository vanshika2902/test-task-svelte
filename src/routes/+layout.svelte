<script>
	import { Router, Route, Link } from 'svelte-routing';
	import Charts from "./Charts.svelte"
	import PieChart from './PieChart.svelte';
	import Home from './Home.svelte';
	import './styles.css';
	import '../app.css';
</script>

<Router>
	<Route path="/line-charts" component={Charts} />
	<Route path="/pie-charts" component={PieChart} />
</Router>

<div class="app">
	<main>
		<slot/>
	</main>
</div>
