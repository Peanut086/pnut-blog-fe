import {App} from "vue";
import {
  PersonCircleSharp,
  PaperPlaneOutline,
  PersonCircleOutline,
  CreateOutline,
  AirplaneOutline,
  AirplaneSharp,
  AlarmOutline,
  AmericanFootballOutline,
  BarbellSharp,
  BeakerOutline,
  CubeOutline
} from '@vicons/ionicons5'
import {Icon} from '@vicons/utils'

const icons = [Icon,
  PersonCircleSharp,
  PaperPlaneOutline,
  PersonCircleOutline,
  CreateOutline,
  AirplaneOutline,
  AirplaneSharp,
  AlarmOutline,
  AmericanFootballOutline,
  BarbellSharp,
  BeakerOutline,
  CubeOutline
]

export default function registerIcons(app: App) {
  icons.forEach(icon => {
    app.component(icon.name, icon)
  })
}
