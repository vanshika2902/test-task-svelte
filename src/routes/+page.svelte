<script>
  import TableContent from "./TableContent.svelte"
  import Home from "./Home.svelte";
  import LineChart from "./Charts.svelte";
  import PieChart from "./PieChart.svelte";
  import data from './data.json';
  import Header from "./Header.svelte";
  import Sidebar from "./sidebar.svelte";
  import lineChartData from "./linechartData.json";
</script>
<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<Home/>
<main class="flex flex-col sm:flex-row justify-center gap-5 sm:gap-3 ml-[20rem] bg-slate-200 mr-5">
    <div class="flex flex-col sm:w-auto">
        <!-- Counter Component -->
        <div class="flex flex-col sm:flex-row mx-2 lg:mx-0 mt-24">
          <!-- Left Column -->
          <div class="lg:w-1/2 pl-0 lg:pl-2 mt-6 lg:mt-0">
            <div class="p-6 bg-white rounded-lg lg:ml-5 h-full overflow-hidden">
                <h1 class="text-base">Line chart</h1>
                <div class="w-full sm:w-auto">
                    <LineChart data={lineChartData} />
                </div>
            </div>
          </div>
          <!-- Right Column -->
          <div class="lg:w-1/2 pl-0 lg:pl-2 mt-6 lg:mt-0">
            <div class="p-6 bg-white rounded-lg lg:mr-5 h-full overflow-hidden">
                <h1 class="text-base">Pie chart</h1>
                <div class="w-full sm:w-auto">
                    <PieChart data={data}/>
                </div>
            </div>
          </div>
        </div>
        <!-- If showAllContent is true -->
    </div>
    
</main>









<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>





