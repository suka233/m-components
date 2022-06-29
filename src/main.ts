import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App);

app.use(router).use(ElementPlus);
app.mount("#app");
for (const [key, component] of Object.entries(Icons)) {
    app.component(`el-icon-${key.toLowerCase()}`, component)
}
