// @ts-ignore
import dayjs from "dayjs";
// @ts-ignore
import utc from "dayjs/plugin/utc" // 需要拓展  dayjs本身内部不支持格式化utc

dayjs.extend(utc)

/*
 * 时间字符串格式化函数*/
export function pnutDateFormat(
  dateString: string,
  formatRule = "YYYY/MM/DD HH:mm:ss"
) {
  return dayjs.utc(dateString).utcOffset(8).format(formatRule)
}
