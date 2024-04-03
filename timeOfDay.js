time = new Date().getHours()

const isMorning = (time) =>  {
    return time >= 4 && time < 12
    
}

const isAfternoon = (time) =>  {
   return time >= 12 && time < 17
   
    
}

const isEvening = (time) =>  {
    return time >= 17 || time < 4
   
   
}

const getTimeOfDay = time => {
    
    if(isMorning(time)){
        return "Morning"
    }else if (isAfternoon(time)){
        return "Afternoon"
    }else if(isEvening(time)){
        return "Evening"
    }
    
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening }
