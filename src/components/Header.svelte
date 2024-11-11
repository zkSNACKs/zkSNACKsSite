<script>
  import data from "$data/content.json";
  import ZksnacksLogo from "$components/icons/zksnacksLogo.svelte";
  import Warning from "$components/icons/Warning.svelte";

  let showMobileMenu = false;

  function handleMobileIconClick() {
    showMobileMenu = !showMobileMenu;
    window.document.body.classList.toggle("mobile-menu-active");
  }

  function handleMobileMenuItemClick() {
    showMobileMenu = false;
    window.document.body.classList.toggle("mobile-menu-active");
  }

  function handleDesktopMenuItemClick() {
    showMobileMenu = false;
  }
</script>

<div
  class="w-full flex justify-center items-center gap-4 bg-red px-4 py-2 border border-red"
>
  <div class="shrink-0">
    <Warning height={20} width={20} color="white" />
  </div>
  <div class="text-xs md:text-sm text-white">
    Important Notice: The zkSNACKs default coordinator server has been
    permanently discontinued as of June 1st, 2024. zkSNACKs is in the process of
    winding down its business operations.
  </div>
</div>
<header
  class="z-10 min-w-[320px] fixed bg-black/25 px-4 py-4 left-0 right-0 md:bg-transparent md:border-b md:border-white md:max-w-5xl md:absolute md:m-auto md:px-0 h-14"
>
  <div class="flex justify-between">
    <a href={data.header.home_link}>
      <div class=" font-light z-10 w-20 text-base block md:hidden">
        <ZksnacksLogo />
      </div>
    </a>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={handleMobileIconClick}
      class="mobile-icon w-6 h-4 relative cursor-pointer z-10 md:hidden"
    >
      <div class="middle-line" />
    </div>
  </div>
  <div
    class="m-0 px-4 max-w-5xl {showMobileMenu
      ? ' bg-black fixed h-screen w-screen top-0 left-0 overflow-hidden flex flex-col items-start'
      : 'hidden md:flex md: justify-between text-base font-thin'}"
  >
    <div class=" font-light w-20 text-base hidden md:block">
      <a href={data.header.home_link}>
        <ZksnacksLogo />
      </a>
    </div>
    <ul class="pt-16 flex flex-col gap-6 md:flex md:flex-row md:pt-0">
      {#each data.header.menu as item}
        <li>
          <a
            on:click={showMobileMenu
              ? handleMobileMenuItemClick
              : handleDesktopMenuItemClick}
            href={item.link}
            class="no-underline {showMobileMenu
              ? 'text-xl'
              : 'font-medium hover:text-slate-300'}">{item.name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</header>

<style>
  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.4s;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after {
    width: 100%;
  }
</style>
