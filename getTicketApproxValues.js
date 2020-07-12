export default function getTicketApproxValues(ticket) {
    let values = {};
    if(ticket.anxietyPerTick >= 10) {
        values.anxietyPerTick = "HIGH"
    } else if (ticket.anxietyPerTick > 0) {
        values.anxietyPerTick = "LOW"
    } else if (ticket.anxietyPerTick === 0) {
        values.anxietyPerTick = "NONE"
    }

    if(ticket.anxietyRelief >= 0.5) {
        values.anxietyRelief = "HIGH"
    } else if (ticket.anxietyRelief > 0) {
        values.anxietyRelief = "LOW"
    } else if (ticket.anxietyRelief === 0) {
        values.anxietyRelief = "NONE"
    }

    if(ticket.happinessRelief >= 100) {
        values.happinessRelief = "VERY HIGH"
    } else if(ticket.happinessRelief >= 30) {
        values.happinessRelief = "HIGH"
    } else if(ticket.happinessRelief > 0) {
        values.happinessRelief = "LOW"
    } else if(ticket.happinessRelief === 0) {
        values.happinessRelief = "NONE"
    } else {
        values.happinessRelief = "NEGATIVE"
    }

    return values;
}