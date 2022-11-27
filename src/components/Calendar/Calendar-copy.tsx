import { useEffect, useState } from "react"
import { Dashboard } from "../Themes/Dashboard/Dashboard";
import moment from "moment";

import './calendar.css';

export const Calendar = () => {

    const [currentYear, setCurrentYear] = useState<number>(2022);
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    moment.updateLocale("pt", {
        months: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ],
    });


    const [value, setValue] = useState(moment().locale("pt").month('april').year(2022));
    const [calendar, setCalendar] = useState<any>([]);

    useEffect(() => {
        const startDay = value.clone().startOf("month").startOf("week");
        const endDay = value.clone().endOf("month").endOf("week");
        const day = startDay.clone().subtract(1, "day");

        while (day.isBefore(endDay, "day")) {
            calendar.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            );
        }

    }, [value])
    console.log("value" ,calendar);

   
    return (
        <Dashboard>
            <div className="box-calendar">
                <div className="calendar-page">
                    <div className="header-page">

                    </div>
                    <div className="content">
                        {/* {month.map((value) => (
                            <MonthCard
                                key={value}
                                month={value}
                                currentYear={currentYear}
                            />
                        ))} */}
                    </div>
                </div>
            </div>
        </Dashboard>
    );
}



function MonthCard(props: any) {

    const [value, setValue] = useState(moment().locale("pt").month(props.month).year(props.currentYear));
    const [calendar, setCalendar] = useState<any>([]);

    useEffect(() => {
        const startDay = value.clone().startOf("month").startOf("week");
        const endDay = value.clone().endOf("month").endOf("week");
        const day = startDay.clone().subtract(1, "day");

        while (day.isBefore(endDay, "day")) {
            calendar.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            );
        }

    }, [value])
    console.log("value" ,value);

    return (
        <div className="month-card">
            <div className="header">{value.format("MMMM")}</div>
            <div className="week-days"></div>
            {
                calendar.map((week: any) => (
                    <div className="week" key={week}>
                        {week.map((day:any, index: number) => (
                            <DayCard 
                                key={index}
                                day={day}
                                month={props.month}
                                year={props.currentYear}
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

function DayCard(props: any) {
    return(
        <p>{props.day.format("DD").toString()}</p>
    );
}