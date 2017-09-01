export function prettyDateFunction (timestamp) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(timestamp)
  let diff = (((new Date()).getTime() - date.getTime()) / 1000)

  if (diff < 0) {
    diff = 0
  }

  let dayDiff = Math.floor(diff / 86400)

  if (isNaN(dayDiff) || dayDiff < 0) {
    return
  }

  return dayDiff === 0 && (diff < 60 && '방금전' || diff < 120 && '1분전' || diff < 3600 && Math.floor(diff / 60) + ' 분전' || diff < 7200 && '1 시간전' || diff < 86400 && Math.floor(diff / 3600) + ' 시간전') || dayDiff === 1 && '어제' || dayDiff < 7 && dayDiff + ' 일전' || dayDiff < 31 && Math.floor(dayDiff / 7) + ' 주전' || dayDiff < 360 && Math.floor(dayDiff / 30) + ' 개월 전' || dayDiff >= 360 && (Math.floor(dayDiff / 360) === 0 ? 1 : Math.floor(dayDiff / 360)) + ' 년 전'
}
