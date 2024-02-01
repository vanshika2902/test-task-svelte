<script>
  let showNestedList = false;
  let todayDate = new Date().toLocaleDateString("en-GB");
  let subsections = ["Modules", "Themes", "Translators"];
  let ratingsLength = 5;
  function toggleNestedList() {
    showNestedList = !showNestedList;
    console.log(showNestedList);
  }
</script>

<section>
  <div class=" flex-1 w-[20rem] mt-[5rem] bg-gray-100 shadow-xl">
    <div class="rounded-lg  bg-white  h-23">
      <div class="p-6">
        <p class="text-base text-blue-500 mb-5">Table of contents</p>
        <!-- on:click={toggleNestedList} -->
        <div class="flex items-center h-8">
          <div class="h-3 w-3 text-slate-950 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <p class="ml-2 text-sm h-auto text-black">Getting Started</p>
        </div>
  
        <div class="flex items-center h-8">
          <div class="h-3 w-3 text-slate-950 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <p class="ml-2 text-sm text-black">Administrative</p>
        </div>
  
        <div class="ml-10 flex items-center my-2">
          <div class="w-3 text-slate-950 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <p class="ml-2 text-sm h-auto">Modules</p>
        </div>
  
        <div class="flex items-center h-8">
          <div class="h-3 w-3 text-slate-950 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <p class="ml-2 text-sm h-auto text-black">User guide</p>
        </div>
  
        <div class="flex items-center h-8 mt-0">
          <div class="h-3 w-3 text-slate-950 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <p class="ml-2 text-sm text-black">Developers</p>
        </div>
  
        {#each subsections as item}
          <div class="ml-10 flex items-center my-3">
            <div class=" w-3 text-slate-950 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <p class="ml-2 text-sm h-auto">{item}</p>
          </div>
        {/each}
      </div>
    </div>
  
    <div class="container rounded-lg  bg-white h-24 mt-3 p-3">
      <div class="flex  justify-between">
        <p class="text-base text-blue-500">Table of contents</p>
        <div class="h-5 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      </div>
      <h4 class="text-black">Administrative</h4>
      <p class="text-xs text-gray-500">{todayDate}</p>
    </div>
  
    <div class="container rounded-lg bg-white  h-24 p-2 mt-3">
      <p class="text-amber-500">Rating</p>
      <div class="rating flex justify-center items-center">
        {#each Array.from({ length: ratingsLength }) as _, index}
          <svg
            class="w-4 h-4 text-amber-500 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
        {/each}
      </div>
      <p class="text-amber-500 text-sm w-full flex justify-center mt-2">
        5 votes
      </p>
    </div>
  
    <div
      class="container rounded-lg  bg-slate-100 h-24 mt-3 h-14 flex justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 text-dark mx-3"
      >
        <path
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 text-dark mx-3"
      >
        <path
          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
        />
      </svg>
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 text-dark mx-3"
      >
        <path
          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
        />
      </svg>
    </div>
  </div>
</section>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
