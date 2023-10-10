<script>
  import data from "$data/content.json";
  import ZksnacksLogo from "$components/icons/zksnacksLogo.svelte";
</script>

<footer id="contact" class="min-w-[320px] bg-black px-4 pt-10 pb-12">
  <div
    class="flex flex-col gap-8 md:flex-row md:gap-0 justify-between max-w-5xl m-auto items-start"
  >
    <div class="flex flex-col gap-2">
      <div class="w-32 font-bold md:text-base pb-8"><ZksnacksLogo /></div>
      {#each data.footer.menu as item}
        <div class="cursor-pointer md:text-base">
          <a href={item.link} class="no-underline">{item.name}</a>
        </div>
      {/each}
    </div>
    <div class="flex flex-col gap-2">
      <div class="font-bold md:text-base">{data.footer.contact.name}</div>
      <div class="cursor-pointer md:text-base">{data.footer.contact.email}</div>
    </div>
  </div>
</footer>
