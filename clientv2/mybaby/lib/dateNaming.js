export function yearsPronounce(year){
    let splitedYear = String(year).split('')
    let lastNumber = Number(splitedYear[splitedYear.length - 1])
    if(lastNumber === 1){
        return 'год'
    }
    if(lastNumber > 1 && lastNumber <= 4){
        return 'года'
    }
        return 'лет'
}

export function monthPronounce(month){
    let splitedMonth = String(month).split('')
    let lastNumber = Number(splitedMonth[splitedMonth.length - 1])
    if(lastNumber === 1 && month !== 11){
        return 'месяц'
    }
    if(lastNumber > 1 && lastNumber <= 4 && month !== 12){
        return 'месяца'
    }
        return 'месяцев'
}

export function dayPronounce(day){
    let splitedDay = String(day).split('')
    let lastNumber = Number(splitedDay[splitedDay.length - 1])
    if(lastNumber === 1 && day !== 11){
        return 'день'
    }
    if(lastNumber > 1 && lastNumber <= 4 && day > 20){
        return 'дня'
    }
        return 'дней'
}