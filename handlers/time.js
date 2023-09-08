

export const convertData = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000)
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    const ruMonths = [
        'Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ]
    const year = date.getUTCFullYear()
    const month = months[date.getUTCMonth()]
    const ruMonth = ruMonths[date.getUTCMonth()]
    const day = date.getUTCDate().toString().padStart(2, '0')
    let hour = date.getUTCHours()
    let minute = date.getUTCMinutes().toString().padStart(2, '0')
    const ampm = hour >= 12 ? 'PM' : 'AM'
    let ruHour = hour
    hour = hour % 12
    hour = hour ? hour : 12
    return {
        en: `${month} ${day}, ${year} ${hour}:${minute} ${ampm} UTC`,
        ru: `${day} ${ruMonth} ${year}, ${ruHour}:${minute}`
    }
}