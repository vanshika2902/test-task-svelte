<script>
  import TableContent from "./TableContent.svelte"
  import Home from "./Home.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Home/>
<main class="flex justify-between gap-10  ml-[20rem]">
	<TableContent/>
	<div class=" w-[50rem] flex-1">
	  <div
		class=" p-3 mt-[5rem]  from-gray-400 to-white-100 rounded-lg dark:border-gray-700"
	  >
		<h5
		  class="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
		>
		Wiki.js 
		
		</h5>
		<div class="text-blue-400 h3"><a href="/line-charts"> charts</a></div>
		<p class="font-normal text-gray-700 text-sm dark:text-gray-400">
		  Here are the biggest enterprise technology acquisitions of 2021 so far, in
		  reverse chronological order.
		</p>
	  </div>
	
	  <div
		class="flex mt-3 items-center p-3 mb-4 text-sm text-yellow-800 rounded-lg bg-gradient-to-r from-yellow-50 to-gray-50 dark:bg-gray-800 dark:text-yellow-300"
		role="alert"
	  >
		<svg
		  class="flex-shrink-0 inline w-4 h-4 me-3"
		  aria-hidden="true"
		  xmlns="http://www.w3.org/2000/svg"
		  fill="currentColor"
		  viewBox="0 0 20 20"
		>
		  <path
			d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
		  />
		</svg>
		<span class="sr-only">Info</span>
		<div>
		  <span class="font-medium">Documentation is being worked on! Some pages may be incomplete or not exist yet! </span>
		</div>
	  </div>
	
	  <div class="mt-3">
		<h1 class="text-3xl text-start font-bold text-blue-700">Getting Started</h1>
		<div class="bg-gradient-to-r from-blue-400 to-white-100 p-[1px] mt-2"></div>
		<div>
		  <h6 class="p-2 font-sans font-medium text-lg">
			Wiki js is quick and easy to install. You should be up and running in no time.
		  </h6>
		  <div class="mt-1">
			<ul class="list-disc px-10 font-sans font-small">
			  <li class="m-1">Make sure you have read the server requirements</li>
			  <li class="m-1">Follow the quick and simple installation quide</li>
			  <li class="m-1">Using Docker? Use the Docker installation guide instead.</li>
			  <li class="m-1">Using Heroku? Use the Heroku installation quide instead</li>
			</ul>
		  </div>
		</div>
	  </div>
	  <div class="mt-3">
		<h1 class="text-3xl text-start font-bold text-blue-700">Administration</h1>
		<div class="bg-gradient-to-r from-blue-400 to-white-100 p-[1px] mt-2"></div>
		<div>
		  <div class="mt-1">
			<ol class="list-disc px-10 font-sans font-small">
			  <li class="m-1">Locales: Display the wiki in a different language or enable multilingual capabilities</li>
			  <li class="m-1">User Groung: Permissions and access rights</li>
			  <li class="m-1">Telemetry: Help Wiki.js developers understand crashes by enabling anonymous telemetry</li>
			  <li class="m-1">Troubleshooting. Solutions to common issues.</li>
			</ol>
		  </div>
		</div>
	  </div>
	  <div class="mt-3">
		<h1 class="text-3xl text-start font-bold text-blue-700">Modules</h1>
		<div class="bg-gradient-to-r from-blue-400 to-white-100 p-[1px] mt-2"></div>
		<div>
		  <h6 class="p-2 font-sans font-medium text-lg">
			Modules greatly expand the capabilities of your wiki
		  </h6>
		  <div class="mt-1">
			<ol class="list-disc px-10 font-sans font-small">
			  <li class="m-1">Authentication: Configure how users can login and register to your wiki</li>
			  <li class="m-1">Editors: Manage the various editors used to create content.</li>
			  <li class="m-1">Logging Forward logs to external logging services.</li>
			  <li class="m-1">Rendering: Configure how content is parsed and rendered into its readable form</li>
			  <li class="m-1">Search Engines: Manage the search capabilities of your wiki</li>
			  <li class="m-1">Storage Backup or sync the content of your wiki with external storage services</li>
			</ol>
		  </div>
		</div>
	  </div>
	  <div class="mt-3">
		<h1 class="text-3xl text-start font-bold text-blue-700">User Guide</h1>
		<div class="bg-gradient-to-r from-blue-400 to-white-100 p-[1px] mt-2"></div>
		<div>
		  <h6 class="p-2 font-sans font-medium text-lg">
			Tags & Categorization. Leam how to categorize your pages for an easier browsing experience
		  </h6>
		</div>
	  </div>
	  <div class="mt-3">
		<h1 class="text-3xl text-start font-bold text-blue-700">Developers</h1>
		<div class="bg-gradient-to-r from-blue-400 to-white-100 p-[1px] mt-2"></div>
		<div>
		  <h6 class="p-2 font-sans font-medium text-lg">
			Getting Started for Wiki.js development is your first step before making modules and themes
		  </h6>
		</div>
	  </div>
	</div>
</main>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
