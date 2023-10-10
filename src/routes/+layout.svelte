<script>
  import "../app.css";
  import data from "$data/content.json";

  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";
</script>

<svelte:head>
  <title>{data.seo.title}</title>
  <meta name="description" content={data.seo.description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={data.seo.website_name} />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={data.seo.website_url} />
  <meta property="og:title" content={data.seo.title} />
  <meta property="og:description" content={data.seo.description} />
  <meta property="og:image" content={data.seo.preview_url} />
</svelte:head>

<Header />
<div class="min-h-[calc(100vh-56px)] min-w-[320px]">
  <slot />
</div>
<Footer />
