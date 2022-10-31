import {
  AirplaneOutline,
  AirplaneSharp,
  AlarmOutline,
  AmericanFootballOutline,
  BarbellSharp,
  BeakerOutline,
  CubeOutline
} from '@vicons/ionicons5'

const iconTags = [
  AirplaneOutline,
  AirplaneSharp,
  AlarmOutline,
  AmericanFootballOutline,
  BarbellSharp,
  BeakerOutline,
  CubeOutline
]

/*
* 获取随机图标
* */
const getRandomIcon = () => {
  for (let i = 0; i < iconTags.length; i++) {
    const randomIndex = Math.floor(Math.random() * iconTags.length)
    return iconTags[randomIndex]
  }
}

export default getRandomIcon
