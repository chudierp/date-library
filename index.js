let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',  'September', 'October', 'November', 'December']
let mons = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug',  'Sept', 'Oct', 'Nov', 'Dec']
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let weee = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
class D {
    constructor(...args) {
        this._date = new Date(...args)
    }
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        let yr = this._date.getYear().toString()
        return yr.slice(1, yr.length)
    }
    get month() {
        let month = this._date.getMonth()
        return months[month]
    }
    get mon() {
        let mon = this._date.getMonth()
        return mons[mon]
    }
    get day() {
        let day = this._date.getDay() 
        return week[day]
    }
    get dy() {
        let day = this._date.getDay()
        return weee[day]
    }
    get date() {
        return this._date.getDate()
    }
    get hours() {
        return this._date.getHours()
    }
    get mins() {
        return this._date.getMinutes()
    }
    get secs() {
        return this._date.getSeconds()
    }
    format(f=0) {
        let arr
        if (f == 0) {
            let year = this._date.getFullYear()
            let month = this._date.getMonth()
            let day = this._date.getDay()
            if (day < 10) {
                day = `0${day}`
            }
            return `${year} ${months[month]} ${day}`
        } else {
            arr = f.split('')
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]  === 'Y') {
                arr[i] = this._date.getFullYear()
            }
            if (arr[i]  === 'y') {
                let shortYr = this._date.getYear().toString()
                arr[i] = shortYr.slice(1, shortYr.length)
            }
            if (arr[i]  === 'M') {
                let mon = this._date.getMonth() 
                arr[i] = months[mon]
            }
            if (arr[i]  === 'm') {
                let mon = this._date.getMonth()
                arr[i] = mons[mon]
            }
            if (arr[i]  === 'D') {
                let day = this._date.getDay() + 1
                if (day < 10) {
                    day = `0${day}`
                }
                arr[i] = day
            }
            if (arr[i]  === 'd') {
                arr[i] = this._date.getDay() + 1
            }
            if (arr[i]  === 'H') {
                arr[i] = '0' + this._date.getHours()
            }
            if (arr[i]  === 'h') {
                arr[i] = this._date.getHours()
            }
            if (arr[i]  === 'I') {
                arr[i] = '0' + this._date.getMinutes()
            }
            if (arr[i]  === 'i') {
                arr[i] = this._date.getMinutes()
            }
            if (arr[i]  === 'S') {
                arr[i] = '0' + this._date.getSeconds()
            }
            if (arr[i]  === 's') {
                arr[i] = this._date.getSeconds()
            }
        }
        return arr.join('')
    }
    when() {
        let today = new Date()
        console.log('2day', today)

        const difference= Math.abs(today - this._date);
        if (difference == 0) {
            return 'today'
        }
        let numDays = Math.ceil(difference / (1000 * 60 * 60 * 24)); 

        if (numDays < 30) {
            numDays = `numDays days`
        } else if (numDays < 364) {
            numDays = `${Math.ceil(numDays / 30)} months`
        } else {
            numDays = `${Math.ceil(numDays / 365)} years`
        }

        if (today < this._date) {
            return `${numDays} from now`
        } else {
            return `${numDays} ago`
        }
    }
} 