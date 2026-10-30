// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import BundleComponent from '../../components/BundleComponent.vue'
import RoleLevelComponent from '../../components/RoleLevelComponent.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Used in many pages: no import needed there
    app.component('BundleComponent', BundleComponent)
    app.component('RoleLevelComponent', RoleLevelComponent)
  }
} satisfies Theme
