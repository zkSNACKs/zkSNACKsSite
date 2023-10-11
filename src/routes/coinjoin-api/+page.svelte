<script>
  import data from "$data/content.json";

  import ScrollSvg from "$components/icons/ScrollSvg.svelte";

  function handleFaqClicked(index) {
    data.coinjoin_api.faq_section.faq_list[index].isExpanded =
      !data.coinjoin_api.faq_section.faq_list[index].isExpanded;
  }
  let innerWidth;
</script>

<svelte:window bind:innerWidth />

<div
  class="bg-gradient-to-b from-black via-[#1E3C22] to-black flex flex-col gap-14 pt-28 pb-14 items-center justify-stretch overflow-x-hidden"
>
  <section
    class="bg-custom h-[60vh] sm:h-[70vh] px-4 py-16 w-full"
    style="background-image: url({innerWidth > 1024
      ? '/coinjoin-api/wabisabi_hero.png'
      : '/coinjoin-api/coinjoin_mobile.svg'});"
  >
    <div class="max-w-5xl flex flex-col gap-12 items-start w-full mx-auto">
      <h1 class="font-black uppercase max-w-md">
        {data.coinjoin_api.hero.title}
      </h1>
      <div class="text-xl max-w-md sm:text-2xl">
        {data.coinjoin_api.hero.body}
      </div>
      <div>
        <a
          class="bg-green px-6 py-3 rounded-sm no-underline"
          href={data.coinjoin_api.hero.cta.link}
          >{data.coinjoin_api.hero.cta.content}</a
        >
      </div>
      <div class="hidden md:flex w-full justify-center pt-16">
        <div class="w-6 animate-bounce">
          <a href="#business">
            <ScrollSvg color="white" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section
    class="flex flex-col gap-12 px-4 py-16 max-w-5xl items-center md:items-start w-full"
    id="business"
  >
    <h2 class="max-w-md font-black">{data.coinjoin_api.section_1.title}</h2>
    <div class="text-lg md:max-w-2xl md:text-left w-full">
      {@html data.coinjoin_api.section_1.body}
    </div>
  </section>

  <section
    class="flex flex-col gap-12 px-4 py-16 items-start w-full max-w-5xl relative"
  >
    <div class="hidden absolute -right-[50%] -top-[50%] w-[900px] lg:block">
      <img
        src="/coinjoin-api/blockchain.png"
        alt="Blockchain"
        class="w-full h-full"
      />
    </div>
    <div class="w-full max-w-[200px] flex justify-center lg:hidden">
      <img src="/coinjoin-api/blockchain.png" alt="Blockchain" />
    </div>
    <h2 class="font-black max-w-md">{data.coinjoin_api.section_2.title}</h2>
    <div class="text-lg sm:text-xl max-w-md">
      {@html data.coinjoin_api.section_2.body}
    </div>
  </section>

  <section
    class="flex flex-col gap-12 px-4 py-16 items-center w-full max-w-5xl"
  >
    <h2 class="max-w-md font-black text-center w-full">
      {data.coinjoin_api.section_3.title}
    </h2>
    <div class="text-lg text-center max-w-3xl">
      {@html data.coinjoin_api.section_3.subtitle}
    </div>
    <div
      class="bg-darkgreen py-8 px-10 w-full rounded-lg flex flex-col md:flex-row gap-16 md:gap-8 max-w-xs md:max-w-5xl mx-auto"
    >
      {#each data.coinjoin_api.section_3.specs as spec}
        <div class="flex flex-col gap-4 text-center capitalize">
          <div class="uppercase font-medium text-base sm:text-lg">
            {spec.title}
          </div>
          <div class="font-black text-xl sm:text-xl">
            {spec.explainer}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section
    class="flex flex-col gap-12 px-4 py-16 items-center w-full max-w-5xl"
  >
    <h2 class="max-w-md text-center font-black w-full">
      {data.coinjoin_api.section_4.title}
    </h2>
    <div class="text-lg sm:text-xl text-center max-w-3xl">
      {@html data.coinjoin_api.section_4.subtitle}
    </div>

    <div
      class="flex flex-col md:flex-row flex-wrap gap-6 max-w-md md:max-w-5xl md:justify-center mx-auto"
    >
      {#each data.coinjoin_api.section_4.value_props as item}
        {#if item.icon}
          <div
            class="flex flex-col gap-5 px-7 py-10 sm:px-10 sm:py-14 md:py-8 md:px-8 rounded-xl md:w-[calc(31%)]
          {item.icon ? 'bg-darkgreen' : 'bg-green'} "
          >
            <div class="w-24">
              <img src="/coinjoin-api/{item.icon}.png" alt={item.icon} />
            </div>

            <h3 class="font-black text-3xl">{item.title}</h3>
            <div class="text-base sm:text-lg md:text-base">
              {@html item.body}
            </div>
          </div>
        {:else}
          <div
            class="flex justify-center flex-col gap-5 px-7 py-10 sm:px-10 sm:py-14 md:py-8 md:px-8 rounded-xl md:w-[calc(31%)]
          {item.icon ? 'bg-darkgreen' : 'bg-green'} "
          >
            <h3 class="font-black text-3xl">{item.title}</h3>
            <div class="text-base sm:text-lg md:text-base">
              {@html item.body}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </section>

  <section class="flex flex-col items-center gap-12 px-4 py-16 max-w-5xl">
    <h2 class="max-w-md font-black text-center w-full">
      {data.coinjoin_api.section_5.title}
    </h2>
    <div class="text-lg sm:text-xl text-center max-w-3xl">
      {@html data.coinjoin_api.section_5.body}
    </div>
    <a
      class="text-green underline w-full text-center"
      href={data.coinjoin_api.section_5.blog.url}
      target="_blank">{data.coinjoin_api.section_5.blog.name}</a
    >
  </section>

  <section
    class="flex flex-col items-center gap-12 px-4 py-16 w-full max-w-5xl"
  >
    <h2 class="max-w-md font-black text-center w-full">
      {data.coinjoin_api.section_6.title}
    </h2>
    <div
      class="flex flex-col md:flex-row gap-14 max-w-md md:max-w-5xl md:gap-8"
    >
      {#each data.coinjoin_api.section_6.quotes as quote}
        <div
          class="flex flex-col gap-6 items-center bg-forestgreen py-16 px-5 sm:px-8 rounded-xl flex-1 flex-shrink-0 md:py-10 md:gap-8 justify-center"
        >
          <div class="text-xl sm:text-2xl md:text-xl text-center">
            {quote.quote}
          </div>
          <div class="flex flex-col items-center gap-6 md:gap-8">
            <div class="font-bold sm:text-xl text-center">{quote.author}</div>
            <div class="w-24 sm:w-32">
              <img src="/coinjoin-api/{quote.logo}.svg" alt={quote.logo} />
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section
    class="flex flex-col items-center gap-12 px-4 py-16 max-w-5xl w-full"
  >
    <h2 class="max-w-md font-black text-center w-full">
      {data.coinjoin_api.faq_section.title}
    </h2>

    <div class="flex flex-col gap-10 w-full">
      {#each data.coinjoin_api.faq_section.faq_list as faq, index}
        <div class="flex flex-col gap-8 bg-darkgreen rounded-xl px-8 py-10">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="flex justify-between gap-4 items-center hover:cursor-pointer"
            on:click={() => handleFaqClicked(index)}
          >
            <div class="text-white text-xl sm:text-2xl font-medium w-full">
              {faq.question}
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore missing-declaration -->
            <div
              class="flex-shrink-0 rounded-full p-6 bg-white/10 hover:cursor-pointer flex justify-center items-center"
            >
              {#if data.coinjoin_api.faq_section.faq_list[index].isExpanded}
                <img
                  src="/coinjoin-api/minus.svg"
                  alt="Minus"
                  class="w-6 h-6 whitespace-nowrap"
                />
              {:else}
                <img
                  src="/coinjoin-api/cross.svg"
                  alt="Cross"
                  class="w-6 h-6 whitespace-nowrap"
                />
              {/if}
            </div>
          </div>
          {#if data.coinjoin_api.faq_section.faq_list[index].isExpanded}
            <div class="text-base sm:text-lg">{@html faq.answer}</div>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <section
    class="flex flex-col items-center gap-12 py-16 px-6 w-full max-w-5xl"
  >
    <div
      class="bg-green py-16 px-6 md:px-16 rounded-xl flex flex-col gap-6 w-full"
    >
      <div class="w-full">
        <h2 class="w-full max-w-md md:max-w-5xl text-left font-black">
          {data.coinjoin_api.cta_section.title}
        </h2>
      </div>
      <div>{@html data.coinjoin_api.cta_section.body}</div>
    </div>
  </section>
</div>

<style>
  .bg-custom {
    background-size: cover;
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    background-position: top;
  }
</style>
