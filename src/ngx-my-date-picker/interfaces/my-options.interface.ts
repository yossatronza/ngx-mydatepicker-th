import { IMyDayLabels } from "./my-day-labels.interface";
import { IMyMonthLabels } from "./my-month-labels.interface";
import { IMyDate } from "./my-date.interface";
import { IMyDateRange } from "./my-date-range.interface";
import { IMyMarkedDates } from "./my-marked-dates.interface";
import { IMyMarkedDate } from "./my-marked-date.interface";

export interface IMyOptions {
    dayLabels?: IMyDayLabels;
    monthLabels?: IMyMonthLabels;
    dateFormat?: string;
    showTodayBtn?: boolean;
    todayBtnTxt?: string;
    firstDayOfWeek?: string;
    satHighlight?: boolean;
    sunHighlight?: boolean;
    highlightDates?: Array<IMyDate>;
    markCurrentDay?: boolean;
    markCurrentMonth?: boolean;
    markCurrentYear?: boolean;
    monthSelector?: boolean;
    yearSelector?: boolean;
    yearOffset?: number;
    disableHeaderButtons?: boolean;
    showWeekNumbers?: boolean;
    selectorHeight?: string;
    selectorWidth?: string;
    disableUntil?: IMyDate;
    disableSince?: IMyDate;
    disableDates?: Array<IMyDate>;
    enableDates?: Array<IMyDate>;
    markDates?: Array<IMyMarkedDates>;
    markWeekends?: IMyMarkedDate;
    disableDateRanges?: Array<IMyDateRange>;
    disableWeekends?: boolean;
    alignSelectorRight?: boolean;
    openSelectorTopOfInput?: boolean;
    closeSelectorOnDateSelect?: boolean;
    minYear?: number;
    maxYear?: number;
    showSelectorArrow?: boolean;
    ariaLabelPrevMonth?: string;
    ariaLabelNextMonth?: string;
    ariaLabelPrevYear?: string;
    ariaLabelNextYear?: string;
}

export interface INgxMyDpOptions extends IMyOptions { }