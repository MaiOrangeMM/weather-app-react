import React from "react";

export default function FormattedDate(props) {
    let days = ["Suns", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dez"];

    let month = props.date.getMonth();
    let day = props.date.getDay();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    if (hours < 10) {
        let formattedHour = `0${hours}:${minutes}`;
        return `${days[day]} ${day} ${months[month]} | ${formattedHour}`;
    } else {
        let formattedHour = `${hours}:${minutes}`;
        return `${days[day]} ${day} ${months[month]} | ${formattedHour}`;
    }
}