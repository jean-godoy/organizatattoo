import { useEffect, useState } from 'react';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import moment from "moment";
import dayjs from 'dayjs';
import './calendar.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CalendarModal } from '../../components/Calendar/CalendarModal';

export const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(dayjs());
    const [currentDay, setCurrentDay] = useState(currentDate.date());
    const [currentMonth, setCurrentMonth] = useState<number | any>(currentDate.month());
    const [currentYear, setCurrentYear] = useState(currentDate.year());
    const [modal, setModal] = useState<boolean>(false);

    const months = [
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
    ];

    const LastDays: number[] = [1, 2, 3, 4, 5, 6, 7];

    /**
     * Pega o ultimo dia do mês atual e monta um
     * array com  a quantidade de dias.
     */
    // const CreateDaysCard = () => {
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const lastDayDate = lastDay.getDate();
        const totalDaysOfMonth = [];

        for (var i = 0; i < lastDayDate; i++) {
            totalDaysOfMonth.push(i);
        }
        //Adiciona o ultimo dia do mês no array.
        totalDaysOfMonth.push(lastDayDate);
        //Remove o indece 0.
        totalDaysOfMonth.shift();
    // }

    /**
     * Pega o primeiro dia do mês, peaga o dia
     * da semana, injeta o total no array,
     * e monta os blocos inicias do calendário.
     */
    const dayOfWeek: any = dayjs().set('month', currentMonth).startOf('month').day();

    const totalWeekDay = [];
    for (let i = 0; i < dayOfWeek; i++) {
        totalWeekDay.push(i);
    }

    /**
     * Pega o mês anterior, o total de dias
     * e monta os blocos inicias com os últimos dias
     * do mês anterior.
     */
    //Mês atual 0 -> Janeiro, 11 Dezembro.
    const endDayOfLastMonth: any = dayjs().set('month', (currentMonth - 1)).endOf('month').date();
    const totalDaysOfLastMonth: any = [];

    for (var i = 0; i < endDayOfLastMonth; i++) {
        totalDaysOfLastMonth.push(i);
    }
    totalDaysOfLastMonth.shift();
    totalDaysOfLastMonth.push(endDayOfLastMonth);

    //Pega o dia da semana e o último dia do mês e subtrai.
    const subtract: any = (parseInt(dayOfWeek) - parseInt(endDayOfLastMonth));

    //Array para os uiltomos dias do mês para indicar os úiltimos
    //dias do final do mês anteriror.
    const res: number[] = [];

    for (let i = Math.abs(subtract); i < endDayOfLastMonth; i++) {
        res.push(i);
    }
    //Remove o primeiro indice.
    res.shift();
    //Acrescenta o ultimo dia do mês anteriro no array.
    res.push(endDayOfLastMonth);

    //Pega o último dia da semana do mês atual.
    const lastDayWeekOfCurrenthMonth = dayjs().set('month', (currentMonth)).endOf('month').day();
    //Array para montar os dias iniciais do próximo mês,
    //para completar o final do calendário.
    const LastDaysWeekOfNextMonth: any[] = [];
    for (let i = lastDayWeekOfCurrenthMonth; i < 6; i++) {
        LastDaysWeekOfNextMonth.push(i);
    }



    const handleLastMonth = () => {
        let last: number = (currentMonth - 1);
        setCurrentMonth(dayjs().set('month', last).month());
    }

    const handleNextMonth = () => {
        let next: number = (currentMonth + 1);
        setCurrentMonth(dayjs().set('month', next).month());
    }

    const handleLastYear = () => {

    }

    const handleCalendarModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    return (
        <Dashboard>
            <div className="box-calendar">
                {modal ? <CalendarModal closeModal={handleCloseModal} /> : <div></div> }
                <div className="calendar">

                    <div className="box-nav">
                        <FaArrowLeft className="arrow" onClick={handleLastMonth} />
                        <span>{`${months[currentMonth]} - ${currentYear}`}</span>
                        <FaArrowRight className="arrow" onClick={handleNextMonth} />
                    </div>

                    <DaysOfWeek />

                    <div className="calendar-content">
                        {totalWeekDay.map((item, index) => (
                            <div className="box-last-days" key={index}>{res[index]}</div>
                        ))}

                        {totalDaysOfMonth.map((item, index) => (
                            <div 
                                className="box-day" 
                                key={index}
                                onClick={handleCalendarModal}
                            >
                                {item}
                            </div>
                        ))}

                        {LastDaysWeekOfNextMonth.map((item, index) => (
                            <div className="box-last-days" key={index}>{LastDays[index]}</div>
                        ))}
                    </div>

                </div>
            </div>
        </Dashboard>
    );
}

const DaysOfWeek = () => {

    return (
        <div className="days-week">
            <div className="days red">Domingo</div>
            <div className="days">Segunda</div>
            <div className="days">Terça</div>
            <div className="days">Quarta</div>
            <div className="days">Quinta</div>
            <div className="days">Sexta</div>
            <div className="days">Sábado</div>
        </div>
    );
}