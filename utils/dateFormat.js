const dayjs= require('dayjs')

const timeStamp=(date)=>{
    const dates= daysjs().format("DD MMM, YYYY")
    return dates;
}

module.exports=timeStamp;