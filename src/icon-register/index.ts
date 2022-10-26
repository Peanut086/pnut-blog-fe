import {App} from "vue";
import {PersonCircleSharp, PaperPlaneOutline, PersonCircleOutline, CreateOutline} from '@vicons/ionicons5'
import {Icon} from '@vicons/utils'

const icons = [Icon, PersonCircleSharp, PaperPlaneOutline, PersonCircleOutline, CreateOutline]

export default function registerIcons(app: App) {
  icons.forEach(icon => {
    app.component(icon.name, icon)
  })
}
