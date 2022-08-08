/*
 * @Date: 2022-08-05 18:05:14
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-08 18:02:49
 * @FilePath: /webpack-tpl-admin/src/filters/index.js
 */
// import parseTime, formatTime and set to filter
export { parseTime, formatTime } from '@/utils'

/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
const pluralize = (time, label) => {
  if (time === 1) {
    return time + label
  }
  return `${time + label}s`
}

/**
 * @param {number} time
 */
export const timeAgo = time => {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  }
  return pluralize(~~(between / 86400), ' day')
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export const numberFormatter = (num, digits) => {
  const si = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'G' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'k' },
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (
        (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
      )
    }
  }
  return num.toString()
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export const toThousandFilter = num => {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * Upper case first char
 * @param {String} string
 */
export const uppercaseFirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
