import { createApp } from 'vue'
import type { App as Root} from 'vue';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import App from './App.vue'
import router from './router';

let vue: Root<Element> | null = null;

if (!isInIcestark ()) {
  vue = createApp(App);
  vue.use(router);
  vue.mount('#app');
}

export function mount({ container }: { container: Element}) {
  vue = createApp(App);
  vue.use(router);
  vue.mount(container);
}

export function unmount() {
  if (vue) {
    vue.unmount();
  }
}
