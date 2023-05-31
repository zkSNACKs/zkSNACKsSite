<script>
  import ArrowDownLeftSvg from "../components/icons/ArrowDownLeftSvg.svelte";
  import ScrollSvg from "../components/icons/ScrollSvg.svelte";
  import TorLogoSvg from "../components/icons/TorLogoSvg.svelte";
  import WasabiWalletLogoSvg from "../components/icons/WasabiWalletLogoSvg.svelte";
  import ZksnacksLogo from "../components/icons/zksnacksLogo.svelte";
  import macbook from "../lib/images/macbook-2.png";

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

<svelte:head>
  <title>zkSNACKs - Unfairly Private in the Digital Age</title>
  <meta
    name="description"
    content="zkSNACKs is a company focused on R&D related to privacy in the digital age."
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="zkSNACKs" />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content="https://zksnacks.com" />
  <meta
    property="og:title"
    content="zkSNACKs - Unfairly Private in the Digital Age"
  />
  <meta
    property="og:description"
    content="zkSNACKs is a company focused on R&D related to privacy in the digital age."
  />
  <meta property="og:image" content="https://zksnacks.com/preview.png" />
</svelte:head>

<header
  class="fixed bg-black/25 px-4 py-4 left-0 right-0 md:bg-transparent md:border-b md:border-white md:max-w-5xl md:absolute md:m-auto md:px-0"
>
  <div class="flex justify-between">
    <div class=" font-light z-10 w-20 text-base block md:hidden">
      <ZksnacksLogo />
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
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
      <ZksnacksLogo />
    </div>
    <ul class="pt-16 flex flex-col gap-6 md:flex md:flex-row md:pt-0">
      <li>
        <a
          on:click={showMobileMenu
            ? handleMobileMenuItemClick
            : handleDesktopMenuItemClick}
          href="#about"
          class={showMobileMenu
            ? "text-xl"
            : "font-medium hover:text-slate-300"}>About</a
        >
      </li>
      <li>
        <a
          on:click={showMobileMenu
            ? handleMobileMenuItemClick
            : handleDesktopMenuItemClick}
          href="#wasabi"
          class={showMobileMenu
            ? "text-xl"
            : "font-medium hover:text-slate-300"}>Wasabi Wallet</a
        >
      </li>
      <li>
        <a
          on:click={showMobileMenu
            ? handleMobileMenuItemClick
            : handleDesktopMenuItemClick}
          href="#other"
          class={showMobileMenu
            ? " text-xl"
            : "font-medium hover:text-slate-300"}>Other Projects</a
        >
      </li>
    </ul>
  </div>
</header>

<section
  class="bg-img h-full px-4 flex flex-col pt-20 items-center gap-28 justify-center"
>
  <div class="flex flex-col gap-8 items-center md:max-w-xl">
    <h3 class=" uppercase text-center">
      Privacy for everyone in the digital age
    </h3>
    <h1 class=" font-sans font-black text-center">Unfairly Private</h1>
    <div class=" text-center">
      The “zk” in zkSNACKs stands for zero knowledge, which means we do not and
      cannot collect any personal user information in our products.
    </div>
  </div>

  <a class="h-6 w-6" href="#about">
    <ScrollSvg color="white" />
  </a>
</section>
<div
  class="bg-gradient-to-b from-black via-green-800 to-black flex flex-col gap-48 pt-28 pb-48 items-center justify-stretch"
>
  <section
    id="about"
    class="flex flex-col gap-12 items-center md:max-w-xl px-4"
  >
    <h2 class=" font-sans font-black text-center">
      Reclaim Your Privacy On the Internet
    </h2>
    <div class=" text-center">
      It has never been easier to protect your personal information. We support
      companies and individuals that contribute to protecting people’s personal
      information on the Internet.
    </div>
  </section>
  <section class="flex flex-col gap-12 items-center md:max-w-5xl px-4">
    <div class="flex flex-col gap-28 md:flex-row md:gap-12">
      <div class="flex flex-col gap-2">
        <h3 class="uppercase text-left font-bold pb-2">
          The Birth of zkSNACKs
        </h3>

        <p class="text-left">
          After years of privacy R&D, back in 2018, Ádám Fiscor, Gergely Hajdú
          and Bálint Harmat co-founded zkSNACKs.
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="uppercase text-right font-bold md:text-left pb-2">
          Zero Knowledge
        </h3>

        <p class="text-right md:text-left">
          Our principle is that profits should not be derived from user data.
          Our incentives are aligned with our users’ privacy.
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="uppercase text-left font-bold pb-2">Cypherpunk Roots</h3>

        <p class="text-left">
          We write code that is open source and verifiable by anyone. We support
          others who do the same.
        </p>
      </div>
    </div>
  </section>
  <section
    id="wasabi"
    class="flex flex-col gap-12 items-center md:max-w-xl px-4"
  >
    <div class=" w-28 text-center"><WasabiWalletLogoSvg /></div>
    <h2 class=" font-sans font-black text-center">
      It All Started with Bitcoin’s Fungibility
    </h2>
    <p class="text-center">
      Bitcoin is fungible if all its users have transaction histories that are
      indistinguishable from one another. Fungibility unlocks free trade and
      commerce, which are essential for human flourishing.
    </p>
  </section>
  <section
    class="flex md:items-center px-4 md:p-0 md:w-screen md:m-auto md:justify-between md:gap-16"
  >
    <div class="flex flex-col gap-12 items-center md:pl-40 md:max-w-2xl">
      <div>
        <h3 class="text-left font-bold">Introducing Wasabi Wallet</h3>
        <p>
          Wasabi Wallet launched in 2018 as a free and open-source bitcoin
          wallet with built-in coinjoins to help users reclaim their privacy.
        </p>
      </div>
      <div>
        <h3 class="text-left font-bold">Easy Privacy by Default</h3>
        <p>
          Coinjoins are collaborative bitcoin transactions to hide transaction
          histories from the public. Active by default on Wasabi.
        </p>
      </div>
      <div>
        <h3 class="text-left font-bold">Bitcoin Privacy for All</h3>
        <p>
          Wasabi has been downloaded by many users around the world, and allows
          an ever growing amount of bitcoin to be fungible every day.
        </p>
      </div>
    </div>
    <div class="hidden md:flex">
      <img src={macbook} alt="Computer" />
    </div>
  </section>
  <section class="flex flex-col gap-12 items-center px-4">
    <a target="_blank" href="https://wasabiwallet.io/"
      ><div
        class="flex gap-4 items-center content-center bg-lime-500 px-8 py-4 rounded-sm cursor-pointer hover:bg-lime-600"
      >
        Try Wasabi Wallet <ArrowDownLeftSvg />
      </div></a
    >
  </section>
  <section
    id="other"
    class="flex flex-col gap-12 items-center md:max-w-xl px-4"
  >
    <h2 class=" font-sans font-black text-center">
      Supporting Community Projects
    </h2>
    <p class="text-center">
      We support research on the Lightning Network privacy, security education,
      the Human Rights Foundation and more.
    </p>
  </section>
  <section
    class="flex flex-col gap-28 items-center px-4 md:flex-row md:gap-12 md:max-w-5xl md:items-start md:justify-center"
  >
    <div class="flex flex-col items-start gap-4 md:flex-1">
      <h3 class="text-left font-bold">Lightning Research</h3>
      <p>
        Research project on Lightning privacy, its current limits and fixes.
      </p>
      <a
        target="_blank"
        href="https://lightningprivacy.com/en/introduction"
        class="border border-white rounded-sm px-8 py-2 text-base hover:border-slate-300 hover:text-slate-300"
        >Learn more</a
      >
    </div>

    <div class="flex flex-col items-end gap-4 md:items-start flex-1">
      <h3 class="text-left font-bold md:text-left">Hunting Sats</h3>
      <p class="text-right md:text-left">
        Community game for people to earn bitcoin by cracking a bitcoin wallet.
      </p>
      <a
        target="_blank"
        href="https://www.huntingsats.com/"
        class="border border-white rounded-sm px-8 py-2 text-base hover:border-slate-300 hover:text-slate-300"
        >Learn more</a
      >
    </div>
    <div class="flex flex-col items-start gap-4 md:flex-1">
      <h3 class="text-left font-bold">HRF Donation</h3>
      <p>zkSNACKs donated 1 BTC to the Human Rights Foundation in 2020.</p>
      <a
        target="_blank"
        href="https://www.coindesk.com/tech/2020/06/25/summer-2020-is-funding-season-for-open-source-bitcoin-development/"
        class="border border-white rounded-sm px-8 py-2 text-base hover:border-slate-300 hover:text-slate-300"
        >Learn more</a
      >
    </div>
  </section>
  <section class="flex flex-col gap-12 items-center md:max-w-xl px-4">
    <div class=" text-center"><TorLogoSvg /></div>
    <h2 class=" font-sans font-black text-center">
      Contributing to Anonymity Networks
    </h2>
    <p class="text-center">
      Tor is the backbone of privacy on the Internet. Wasabi Wallet relies on it
      in many aspects, so we support it wholeheartedly with $2,500 per month.
    </p>
    <a
      target="_blank"
      href="https://www.torproject.org/"
      class="border-b border-transparent hover:border-white"
      ><div
        class="flex gap-4 items-center content-center bg-transparent rounded-sm cursor-pointer"
      >
        Learn about Tor <ArrowDownLeftSvg />
      </div></a
    >
  </section>
  <section class="flex flex-col gap-12 items-center md:max-w-xl px-4">
    <div>
      <div class="flex flex-col items-end gap-2">
        <div class="flex flex-col items-start gap-2">
          <div class="text-7xl font-semibold">“</div>
          <p class="text-left italic">
            We must defend our own privacy if we expect to have any. We must
            come together and create systems which allow anonymous transactions
            to take place. People have been defending their own privacy for
            centuries with whispers, darkness, envelopes, closed doors, secret
            handshakes, and couriers. The technologies of the past did not allow
            for strong privacy, but electronic technologies do.
          </p>
        </div>
        <div class=" text-7xl font-semibold">”</div>
        <p>— Eric Hughes, A Cypherpunk's Manifesto, 9 March 1993</p>
      </div>
    </div>
  </section>
</div>

<div class="bg-black">
  <div class="h-px md:bg-slate-100 md:max-w-5xl m-auto" />
</div>

<footer id="contact" class="bg-black px-4 pt-32 pb-12">
  <div
    class="flex flex-col gap-8 md:flex-row md:gap-0 justify-between max-w-5xl m-auto items-start"
  >
    <div class="flex flex-col gap-2">
      <div class="w-32 font-bold md:text-base pb-8"><ZksnacksLogo /></div>
      <div class="cursor-pointer md:text-base"><a href="#about">About</a></div>
      <div class="cursor-pointer md:text-base">
        <a href="#wasabi">Wasabi Wallet</a>
      </div>
      <div class="cursor-pointer md:text-base">
        <a href="#other">Other Projects</a>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="font-bold md:text-base">zkSNACKs Ltd.</div>
      <div class="cursor-pointer md:text-base">contact@zksnacks.com</div>
    </div>
  </div>
</footer>

<style>
  .bg-img {
    background-size: cover;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0)),
      url($img/bg-bamboo.png);
  }

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
