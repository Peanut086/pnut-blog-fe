import {App} from "vue";
import {PersonCircleSharp} from '@vicons/ionicons5'
import {Icon} from '@vicons/utils'

const icons = [Icon, PersonCircleSharp]

export default function registerIcons(app: App) {
  icons.forEach(icon => {
    app.component(icon.name, icon)
  })
}
