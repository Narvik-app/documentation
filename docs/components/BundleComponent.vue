<script setup>
  import { computed } from 'vue'
  import { BUNDLES } from './bundles.js'

  // Indicates that a page / section belongs to a paid module (bundle) of the subscription.
  // Registered globally (see .vitepress/theme/index.ts), no import needed in the pages.
  //
  //   <BundleComponent bundle="loans" />           badge, to put next to a title (like RoleLevelComponent)
  //   <BundleComponent bundle="loans" alert />     alert block, to put at the top of a page
//
// The alert always ends with the pricing and contact links, and accepts an additional sentence as content (markdown, on its own lines):
//
//   <BundleComponent bundle="loans" alert>
//
//   Voir la [configuration](./administration).
//
//   </BundleComponent>
  //
  // `bundle` is one of the keys of BUNDLES (components/bundles.js): presences, sales, loans, time-and-travel.
  const props = defineProps({
    bundle: {
      type: String,
      required: true,
      validator: (value) => value in BUNDLES
    },
    alert: {
      type: Boolean,
      default: false
    }
  })

  const name = computed(() => BUNDLES[props.bundle] ?? props.bundle)
  const pricingUrl = 'https://about.narvik.app/abonnements'
  const contactUrl = 'https://about.narvik.app/contact'
  const description = computed(() => `Module payant « ${name.value} » : inclus dans l'abonnement Pro ou activable à la carte.`)
</script>

<template>
  <div v-if="alert" class="info custom-block BundleAlert">
    <p class="custom-block-title">Module « {{ name }} »</p>
    <p>
      Cette fonctionnalité fait partie du module payant <strong>{{ name }}</strong>,
      inclus dans l'abonnement Pro ou activable à la carte.
      <a :href="pricingUrl" target="_blank" rel="noreferrer">Voir les abonnements</a>
    </p>
    <p>
      S'il n'apparaît pas dans votre menu, prenez <a :href="contactUrl" target="_blank" rel="noreferrer">contact</a> avec nous.
    </p>
    <slot />
  </div>

  <div v-else class="VPBadge BundleRoot" :title="description">
    <Badge type="warning" :text="`Module ${name}`" />
  </div>
</template>

<style>
  .BundleRoot {
    display: inline-flex;
    transform: none;
    vertical-align: middle !important;
    margin-left: 0;
    padding-left: 0 !important;
  }
</style>
