/* istanbul ignore file */
import {
  Component,
  Element,
  Host,
  h,
  Prop,
  Listen,
  Watch,
  State,
  Event,
  EventEmitter,
  // Method,
} from "@stencil/core";
import {
  stringEnumToArray,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";
import {
  IcWeekDays,
  // IcDayNames,
  IcShortDayNames,
  IcDateInputMonths,
  IcDateFormat,
  IcSizes,
  IcInformationStatusOrEmpty,
} from "../../utils/types";
// import { createPopper } from "@popperjs/core";
import chevron from "../../assets/chevron-icon.svg";
import {
  clampDate,
  createDateFromISOString,
  dateMatches,
  dateInRange,
  getMonthStart,
  getMonthEnd,
  getWeekEnd,
  getWeekStart,
  yearInRange,
} from "./ic-date-picker-utils";
import { DayButton } from "./ic-day-button";
import { MonthPicker } from "./ic-month-picker";
import { YearPicker } from "./ic-year-picker";

const DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
const DEFAULT_DISABLE_DATES_FROM_NOW_MSG =
  "Dates in the future are not allowed. Please select a date in the past.";
const DEFAULT_DISABLE_DATES_UNTIL_NOW_MSG =
  "Dates in the past are not allowed. Please select a date in the future.";
const DEFAULT_DISABLE_DAYS_MSG =
  "The date you have selected is on a weekday that is not allowed. Please select another date.";
const FOCUS_TIMER = 100;

interface IcDateInputProps {
  dateFormat?: IcDateFormat;
  dateFromNowMessage?: string;
  dateUntilNowMessage?: string;
  disabled?: boolean;
  disableDays?: IcWeekDays[];
  disableDaysMessage?: string;
  disableFromNow?: boolean;
  disableUntilNow?: boolean;
  helperText?: string;
  inputId?: string;
  label: string;
  max?: string | Date;
  min?: string | Date;
  name?: string;
  required?: boolean;
  showClearButton?: boolean;
  showCalendarButton?: boolean;
  size?: IcSizes;
  value?: string | Date;
  validationStatus?: IcInformationStatusOrEmpty;
  validationText?: string;
}

@Component({
  tag: "ic-date-picker",
  styleUrl: "ic-date-picker.css",
  shadow: {
    delegatesFocus: true,
  },
})

// Variables (alphabetised)
// @element
// @State (alphabetised)
// @prop (alphabetised)
// @watch (with watched props behind them)
// @event (alphabetised)
// Lifecycle (folowing lfiecycle process: connection, load, update, render)
// @listen
// @method
// Local private methods
// Render
export class DatePicker {
  private inputEl: HTMLIcDateInputElement;
  private clearButtonEl: HTMLIcButtonElement = null;
  private daysOfWeek: string[] = [];
  private focusDay: boolean = true;
  private focussedYearEl: HTMLIcButtonElement;
  private monthButtonEl: HTMLIcButtonElement;
  private monthNames: string[] = [];
  private myCalendarButtonClicked: boolean = false;
  private today = new Date();
  private todayButtonEl: HTMLIcButtonElement = null;
  private yearButtonEl: HTMLIcButtonElement;

  @Element() el: HTMLIcDatePickerElement;

  @State() calendarOpen: boolean = false;
  @State() currMonthView: Date[] = [];
  @State() currYearPickerView: number[] = [];
  @State() dateInputProps: IcDateInputProps = { label: "" };
  @State() decadeView: number[] = [];
  @State() focussedDate: Date = null;
  @State() focussedDay: number;
  @State() focussedDayEl: HTMLButtonElement;
  @State() focussedMonth: number;
  @State() focussedMonthEl: HTMLIcButtonElement;
  @State() focussedYear: number;
  @State() maxDate: Date = null;
  @State() minDate: Date = null;
  @State() monthInView: number;
  @State() monthPickerVisible: boolean = false;
  @State() orderedDaysOfWeek: string[] = [];
  @State() selectedDate: Date = null;
  @State() yearInView: number;
  @State() yearPickerVisible: boolean = false;

  /**
   * The format in which the date will be displayed.
   */
  @Prop() dateFormat?: IcDateFormat = "DD/MM/YYYY";

  /**
   * The text to display as the validation message when `disableFromNow` is true and a disabled date is entered in the input field.
   */
  @Prop() dateFromNowMessage?: string =
    "Dates in the future are not allowed. Please select a date in the past.";

  /**
   * The text to display as the validation message when `disableUntilNow` is true and a disabled date is entered in the input field.
   */
  @Prop() dateUntilNowMessage?: string =
    "Dates in the past are not allowed. Please select a date in the future.";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The days of the week to disable.
   */
  @Prop() disableDays?: IcWeekDays[] = [];

  /**
   * The text to display as the validation message when `disableDays` is set and a disabled date is entered.
   */
  @Prop() disableDaysMessage?: string =
    "The date you have selected is on a weekday that is not allowed. Please select another date.";

  /**
   * If `true`, the user cannot select dates from now. A validation message will appear if they enter a disabled date.
   */
  @Prop() disableFromNow?: boolean = false;

  /**
   * If `true`, the user cannot select dates until now. A validation message will appear if they enter a disabled date.
   */
  @Prop() disableUntilNow?: boolean = false;

  /**
   * Determines whether the selected day should receive focus when calendar is opened.
   * If `true` and no day selected then the current day or first focussable day in range will receive focus.
   */
  @Prop() focusDayOnOpen?: boolean = true;

  /**
   * The helper text that will be displayed for additional field guidance. This will default to the text "Use format" along with the `dateFormat` value.
   */
  @Prop() helperText?: string;

  /**
   * The ID for the input field. The default will be an automatically generated value.
   */
  @Prop() inputId?: string;

  /**
   * The label for the date input.
   */
  @Prop() label!: string;

  /**
   * The latest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   * The value of this prop is ignored if `disableFromNow` is set to `true`.
   */
  @Prop() max?: string | Date = "";

  @Watch("max")
  watchMaxHandler(): void {
    if (this.disableFromNow) {
      this.maxDate = new Date();
    } else {
      this.maxDate =
        typeof this.max === "object"
          ? this.max
          : createDateFromISOString(this.max);
    }
  }

  /**
   * The earliest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   * The value of this prop is ignored if `disableUntilNow` is set to `true`.
   */
  @Prop() min?: string | Date = "";

  @Watch("min")
  watchMinHandler(): void {
    if (this.disableUntilNow) {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      this.minDate = d;
    } else {
      this.minDate =
        typeof this.min === "object"
          ? this.min
          : createDateFromISOString(this.min);
    }
  }

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string;

  /**
   * The date visible when the calendar opens. Used if no date is currently selected.
   * The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   */
  @Prop() openAtDate: string | Date = "";

  /**
   * @internal If `true`, calendar will initially be open. Used for visual regression testing
   */
  @Prop() openOnFirstLoad: boolean = false;

  /**
   * If `true`, the input will require a value.
   */
  @Prop() required?: boolean = false;

  /**
   * The days of the week to disable.
   */
  @Prop() disableDays?: IcWeekDays[] = [];

  /**
   * Determines whether the `Clear` button on the date picker is visible.
   */
  @Prop() showPickerClearButton?: boolean = true;

  /**
   * Determines whether the `Go to today` button on the date picker is visible.
   */
  @Prop() showPickerTodayButton?: boolean = true;

  /**
   * The size of the date picker to be displayed.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The first day of the week? `0` for Sunday, `1` for Monday, etc.
   * Default is Monday.
   */
  @Prop() startOfWeek?: IcWeekDays = IcWeekDays.Monday;

  /**
   * The validation status - e.g. 'error' | 'warning' | 'success'. This will override the built-in date validation.
   */
  @Prop() validationStatus?: IcInformationStatusOrEmpty = "";

  /**
   * The text to display as the validation message. This will override the built-in date validation.
   */
  @Prop() validationText?: string = "";

  /**
   * The value of the date picker. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.
   */
  @Prop({ mutable: true }) value?: string | Date = "";

  @Watch("calendarOpen")
  watchOpenHandler(): void {
    if (this.calendarOpen) {
      // this.focusDay = false;
      if (
        this.selectedDate === null ||
        !dateInRange(this.selectedDate, this.minDate, this.maxDate)
      ) {
        let openAt =
          typeof this.openAtDate === "object"
            ? this.openAtDate
            : createDateFromISOString(this.openAtDate);
        if (openAt === null) {
          openAt = new Date();
        }
        this.setFocussedDate(openAt);
      } else {
        this.setFocussedDate(this.selectedDate);
      }
      // if (this.focusDayOnOpen) {
      setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
      // } else {
      //   setTimeout(() => this.focusFirstElement(), FOCUS_TIMER);
      // }
      document.addEventListener("click", this.handleDocumentClick);
    } else {
      document.removeEventListener("click", this.handleDocumentClick);
      this.monthPickerVisible = false;
      this.yearPickerVisible = false;
    }
  }

  @Watch("focussedDate")
  watchFocussedDateHandler(current: Date, previous: Date): void {
    if (
      previous === null ||
      !(
        previous.getFullYear() === current.getFullYear() &&
        previous.getMonth() === current.getMonth()
      )
    ) {
      this.updateMonthInView();
    }
  }

  @Watch("monthInView")
  watchMonthInViewHandler(): void {
    this.focussedMonth = this.monthInView;
  }

  @Watch("yearInView")
  watchYearInViewHandler(): void {
    this.setFocussedYear(this.yearInView, false);
  }

  @Watch("yearPickerVisible")
  watchYearPickerVisibleHandler(): void {
    if (!this.yearPickerVisible) {
      this.setFocussedYear(this.yearInView);
    }
  }

  @Watch("monthPickerVisible")
  watchMonthPickerVisibleHandler(): void {
    if (!this.monthPickerVisible) {
      this.focussedMonth = this.monthInView;
    }
  }

  @Watch("focussedDayEl")
  watchFocussedDayEl(): void {
    if (this.focusDay) {
      setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
    }

    this.focusDay = true;
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<{ value: Date }>;

  componentWillLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Date Picker"
    );

    this.monthNames = stringEnumToArray(IcDateInputMonths);
    this.daysOfWeek = stringEnumToArray(IcShortDayNames);
    this.orderedDaysOfWeek = this.daysOfWeek
      .splice(this.startOfWeek, this.daysOfWeek.length)
      .concat(this.daysOfWeek.splice(0, this.startOfWeek));

    this.watchMaxHandler();
    this.watchMinHandler();
    if (this.openOnFirstLoad) {
      this.calendarOpen = true;
    }
  }

  // componentDidRender(): void {}

  // componentWillRender(): void {}

  componentDidLoad(): void {
    if (this.inputEl && this.inputEl.shadowRoot !== null) {
      const calenderBtnTooltip = this.inputEl.shadowRoot
        .querySelector("#calendar-button")
        .shadowRoot.querySelector(
          "#ic-tooltip-ic-button-with-tooltip-calendar-button"
        )
        .shadowRoot.querySelector(".ic-tooltip-container");
      (calenderBtnTooltip as HTMLElement).setAttribute("aria-hidden", "true");
      const clearBtnTooltip = this.inputEl.shadowRoot
        .querySelector("#clear-button")
        .shadowRoot.querySelector(
          "#ic-tooltip-ic-button-with-tooltip-clear-button"
        )
        .shadowRoot.querySelector(".ic-tooltip-container");
      (clearBtnTooltip as HTMLElement).setAttribute("aria-hidden", "true");
    }
  }

  @Listen("calendarButtonClicked")
  localCalendarButtonClickHandler(ev: CustomEvent): void {
    this.myCalendarButtonClicked = true;
    if (!this.calendarOpen) {
      this.setSelectedDate(ev.detail.value);
    }

    this.calendarOpen = !this.calendarOpen;
  }

  @Listen("calendarButtonClicked", { target: "document" })
  calendarButtonClickHandler(): void {
    //closes this picker if calendar button in another clicked
    if (!this.myCalendarButtonClicked) {
      this.calendarOpen = false;
    }
    this.myCalendarButtonClicked = false;
  }

  private setDecadeView = (start: number) => {
    let currYear = start - 1;
    const decadeArr = [];
    while (currYear <= start + 10) {
      decadeArr.push(currYear);
      currYear++;
    }
    this.decadeView = decadeArr;
  };

  private setSelectedDate = (d: Date): void => {
    this.selectedDate = d;
    this.value = d === null ? "" : d;
  };

  private handleCalenderClick = (event: MouseEvent): void => {
    event.stopImmediatePropagation();
  };

  private handleDocumentClick = (): void => {
    this.calendarOpen = false;
  };

  private keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      this.closeButtonClickHandler();
      this.inputEl.setCalendarFocus();
    }
    event.stopImmediatePropagation();
  };

  private closeButtonClickHandler = () => {
    this.calendarOpen = false;
  };

  private focusFirstElement = () => {
    if (!this.monthButtonEl.disabled) {
      this.monthButtonEl.setFocus();
    } else if (!this.yearButtonEl.disabled) {
      this.yearButtonEl.setFocus();
    } else {
      this.focusFocussedDay();
    }
  };

  private focusLastElement = () => {
    if (this.showPickerClearButton && !this.clearButtonEl.disabled) {
      this.clearButtonEl.setFocus();
    } else if (this.showPickerTodayButton && !this.todayButtonEl.disabled) {
      this.todayButtonEl.setFocus();
    } else if (this.monthPickerVisible) {
      this.focussedMonthEl.setFocus();
    } else if (this.yearPickerVisible) {
      this.focussedYearEl.setFocus();
    } else {
      this.focussedDayEl.focus();
    }
  };

  private focusFocussedDay = () => {
    this.focussedDayEl.focus();
  };

  private monthButtonClickHandler = () => {
    this.yearPickerVisible = false;
    this.focusDay = false;
    this.monthPickerVisible = !this.monthPickerVisible;
    if (this.monthPickerVisible) {
      setTimeout(() => this.focussedMonthEl.setFocus(), FOCUS_TIMER);
    }
  };

  private yearButtonClickHandler = () => {
    this.monthPickerVisible = false;
    this.focusDay = false;
    this.yearPickerVisible = !this.yearPickerVisible;
    if (this.yearPickerVisible) {
      setTimeout(() => this.focussedYearEl.setFocus(), FOCUS_TIMER);
    }
  };

  private todayButtonClickHandler = () => {
    this.yearPickerVisible = false;
    this.monthPickerVisible = false;
    this.setFocussedDate(new Date());
    setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
  };

  private todayButtonKeyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === "Tab" && !ev.shiftKey && this.clearButtonEl.disabled) {
      this.focusFirstElement();
      ev.preventDefault();
    }
  };

  private clearButtonClickHandler = () => {
    this.setSelectedDate(null);

    if (this.monthPickerVisible) {
      this.focussedMonthEl.setFocus();
    } else if (this.yearPickerVisible) {
      this.focussedYearEl.setFocus();
    } else {
      this.focusFocussedDay();
    }
  };

  private clearButtonKeyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === "Tab" && !ev.shiftKey) {
      this.focusFirstElement();
      ev.preventDefault();
    }
  };

  private clearButtonKeyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === "Tab" && !ev.shiftKey) {
      this.focusFirstElement();
      ev.preventDefault();
    }
  };

  private gotoPreviousMonth = () => {
    this.focusDay = false;
    this.moveMonths(-1);
  };

  private gotoNextMonth = () => {
    this.focusDay = false;
    this.moveMonths(1);
  };

  private gotoPreviousYear = () => {
    if (this.isPrevYearAllowed()) {
      this.focusDay = false;
      this.moveYears(-1);
    }
  };

  private gotoNextYear = () => {
    if (this.isNextYearAllowed()) {
      this.focusDay = false;
      this.moveYears(1);
    }
  };

  private navButtonMouseDownHandler = (ev: MouseEvent): void => {
    ev.preventDefault();
  };

  private renderMonthYearNavButton = (
    id: string,
    flip: boolean,
    disabled: boolean
  ): void => {
    const buttonSize = this.size === "large" ? "default" : "small";
    return (
      <ic-button
        id={id}
        disableTooltip={true}
        disabled={disabled}
        onClick={this.monthYearNavClickHandler}
        class={{ flip: flip }}
        variant="icon"
        innerHTML={chevron}
        size={buttonSize}
        tabIndex={-1}
        aria-hidden="true"
        onMouseDown={this.navButtonMouseDownHandler}
      />
    );
  };

  private monthYearNavClickHandler = (ev: Event): void => {
    const target = ev.target as Element;
    switch (target.id) {
      case "previous-month-button":
        this.gotoPreviousMonth();
        break;

      case "next-month-button":
        this.gotoNextMonth();
        break;

      case "previous-year-button":
        this.gotoPreviousYear();
        break;

      case "next-year-button":
        this.gotoNextYear();
        break;
    }
  };

  private previousMonthButton = (): void => {
    let disabled = false;
    if (this.focussedDate !== null && this.minDate !== null) {
      const yearMatch =
        this.focussedDate.getFullYear() === this.minDate.getFullYear();
      if (yearMatch) {
        disabled = this.monthInView - 1 < this.minDate.getMonth();
      }
    }
    return this.renderMonthYearNavButton(
      "previous-month-button",
      true,
      disabled
    );
  };

  private nextMonthButton = (): void => {
    let disabled = false;
    if (this.focussedDate !== null && this.maxDate !== null) {
      const yearMatch =
        this.focussedDate.getFullYear() === this.maxDate.getFullYear();
      if (yearMatch) {
        disabled = this.monthInView + 1 > this.maxDate.getMonth();
      }
    }
    return this.renderMonthYearNavButton("next-month-button", false, disabled);
  };

  private previousYearButton = (): void => {
    return this.renderMonthYearNavButton(
      "previous-year-button",
      true,
      !this.isPrevYearAllowed()
    );
  };

  private nextYearButton = (): void => {
    return this.renderMonthYearNavButton(
      "next-year-button",
      false,
      !this.isNextYearAllowed()
    );
  };

  private isPrevYearAllowed = (): boolean => {
    return this.isYearAllowed(this.yearInView - 1);
  };

  private isNextYearAllowed = (): boolean => {
    return this.isYearAllowed(this.yearInView + 1);
  };

  private isYearAllowed = (yr: number): boolean => {
    return yearInRange(yr, this.minDate, this.maxDate);
  };

  private getMonthView = (date: Date): Date[] => {
    const start = getWeekStart(getMonthStart(date), this.startOfWeek);
    const end = getWeekEnd(getMonthEnd(date), this.startOfWeek);

    const days: Date[] = [];
    let current = start;

    while (!dateMatches(current, end)) {
      days.push(current);
      current = new Date(current);
      current.setDate(current.getDate() + 1);
    }

    days.push(current);

    return days;
  };

  private isCurrentMonth = (): boolean => {
    const d = new Date();
    return (
      d.getFullYear() === this.yearInView && d.getMonth() === this.monthInView
    );
  };

  private updateMonthInView = (): void => {
    this.currMonthView = this.getMonthView(this.focussedDate);

    this.focussedDay = this.focussedDate.getDate();
    this.monthInView = this.focussedDate.getMonth();
    this.yearInView = this.focussedDate.getFullYear();
  };

  private handleSelectDay = (day: Date): void => {
    this.setSelectedDate(day);
    this.calendarOpen = false;
    this.inputEl.setCalendarFocus();
  };

  private handleSelectMonth = (month: number): void => {
    this.moveMonths(month - this.monthInView);
    this.monthPickerVisible = false;
    setTimeout(() => this.monthButtonEl.setFocus(), FOCUS_TIMER);
  };

  private handleSelectYear = (year: number): void => {
    const yrPos = this.decadeView.indexOf(year);
    if (yrPos > 0 && yrPos < this.decadeView.length - 1) {
      this.moveYears(year - this.yearInView);
      this.focusDay = false;
      this.yearPickerVisible = false;
      setTimeout(() => this.yearButtonEl.setFocus(), FOCUS_TIMER);
    } else {
      this.updateFocussedYear(year - this.focussedYear);
    }
  };

  private monthPickerKeyDownHandler = (ev: KeyboardEvent): void => {
    let handled = true;
    // const adjust = this.size === "small" ? 2 : 3;
    switch (ev.key) {
      case "ArrowUp":
        // this.updateFocussedMonth(-adjust);
        this.updateFocussedMonth(-1);
        break;

      case "ArrowDown":
        // this.updateFocussedMonth(adjust);
        this.updateFocussedMonth(1);
        break;

      case "ArrowLeft":
        this.updateFocussedMonth(-1);
        break;

      case "ArrowRight":
        this.updateFocussedMonth(1);
        break;

      case "Home":
        this.updateFocussedMonth(-this.focussedMonth);
        break;

      case "End":
        this.updateFocussedMonth(11 - this.focussedMonth);
        break;

      case "Tab":
        handled = this.calendarTabHandler(ev);
        break;

      case "Escape":
        ev.stopImmediatePropagation();
        this.monthPickerVisible = false;
        setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
        break;

      default:
        handled = false;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private yearPickerKeyDownHandler = (ev: KeyboardEvent): void => {
    let handled = true;
    // console.log("yearPickerKeyDownHandler")
    // const adjust = this.size === "small" ? 2 : 3;
    switch (ev.key) {
      case "ArrowUp":
        // this.updateFocussedYear(-adjust);
        this.updateFocussedYear(-1);
        break;

      case "ArrowDown":
        // this.updateFocussedYear(adjust);
        this.updateFocussedYear(1);
        break;

      case "ArrowLeft":
        this.updateFocussedYear(-1);
        break;

      case "ArrowRight":
        this.updateFocussedYear(1);
        break;

      case "Tab":
        handled = this.calendarTabHandler(ev);
        break;

      case "Escape":
        ev.stopImmediatePropagation();
        this.yearPickerVisible = false;
        setTimeout(() => this.focusFocussedDay(), FOCUS_TIMER);
        break;

      default:
        handled = false;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private monthButtonKeyDownHandler = (ev: KeyboardEvent): void => {
    switch (ev.key) {
      case "ArrowLeft":
      case "ArrowUp":
        this.gotoPreviousMonth();
        break;

      case "ArrowRight":
      case "ArrowDown":
        this.gotoNextMonth();
        break;

      case "Tab":
        if (ev.shiftKey) {
          ev.preventDefault();
          this.focusLastElement();
        }
        break;

      case "Escape":
        if (this.monthPickerVisible) {
          this.monthPickerVisible = false;
          ev.stopImmediatePropagation();
        }
        break;

      default:
        break;
    }
  };

  private yearButtonKeyDownHandler = (ev: KeyboardEvent): void => {
    switch (ev.key) {
      case "ArrowLeft":
      case "ArrowUp":
        this.gotoPreviousYear();
        break;

      case "ArrowRight":
      case "ArrowDown":
        this.gotoNextYear();
        break;

      case "Escape":
        if (this.yearPickerVisible) {
          this.yearPickerVisible = false;
          ev.stopImmediatePropagation();
        }
        break;

      default:
        break;
    }
  };

  private handleCalendarKeyDown = (ev: KeyboardEvent): void => {
    let handled = true;
    switch (ev.key) {
      case "ArrowDown":
        this.moveDays(7);
        break;

      case "ArrowUp":
        this.moveDays(-7);
        break;

      case "ArrowLeft":
        this.moveDays(-1 * this.getNextDayToFocus(this.focussedDate, false));
        break;

      case "ArrowRight":
        this.moveDays(this.getNextDayToFocus(this.focussedDate, true));
        break;

      case "PageUp":
        ev.shiftKey ? this.moveYears(-1) : this.moveMonths(-1);
        break;

      case "PageDown":
        ev.shiftKey ? this.moveYears(1) : this.moveMonths(1);
        break;

      case "Home":
        this.setFocussedDate(getWeekStart(this.focussedDate, this.startOfWeek));
        break;

      case "End":
        this.setFocussedDate(getWeekEnd(this.focussedDate, this.startOfWeek));
        break;

      case "Tab":
        handled = this.calendarTabHandler(ev);
        break;

      default:
        handled = false;
        break;
    }

    if (handled) {
      ev.preventDefault();
    }
  };

  private calendarTabHandler = (ev: KeyboardEvent): boolean => {
    let handled = false;
    if (
      !ev.shiftKey &&
      (!this.showPickerTodayButton || this.isCurrentMonth()) &&
      (!this.showPickerClearButton || this.clearButtonEl.disabled)
    ) {
      this.focusFirstElement();
      handled = true;
    } else if (ev.shiftKey) {
      if (!this.yearButtonEl.disabled) {
        this.yearButtonEl.setFocus();
      } else if (!this.monthButtonEl.disabled) {
        this.monthButtonEl.setFocus();
      } else {
        this.focusLastElement();
      }
      handled = true;
    }
    return handled;
  };

  private getNextDayToFocus = (
    currDay: Date,
    forward: boolean,
    level = 1
  ): number => {
    const move = forward ? 1 : -1;
    const nextDay = new Date(currDay);
    nextDay.setDate(nextDay.getDate() + move);
    const nextDayNum = Number(nextDay.getDay());
    if (this.disableDays.includes(nextDayNum)) {
      return this.getNextDayToFocus(nextDay, forward, level + 1);
    } else {
      return level;
    }
  };

  private moveDays = (numDays: number): void => {
    const d = new Date(this.focussedDate);
    d.setDate(d.getDate() + numDays);
    if (numDays < 0 && this.disableUntilNow && dateMatches(d, this.minDate)) {
      return;
    }
    this.setFocussedDate(d);
  };

  private moveMonths = (numMonths: number): void => {
    const newMonth = this.focussedDate.getMonth() + numMonths;
    const min = new Date(
      new Date(getMonthStart(this.focussedDate)).setMonth(newMonth)
    );
    const max = getMonthEnd(min);
    const newDate = new Date(new Date(this.focussedDate).setMonth(newMonth));
    this.setFocussedDate(clampDate(newDate, min, max));
  };

  private moveYears = (numYears: number): void => {
    const newYear = this.focussedDate.getFullYear() + numYears;
    const min = new Date(
      new Date(getMonthStart(this.focussedDate)).setFullYear(newYear)
    );
    const max = getMonthEnd(min);
    const newDate = new Date(new Date(this.focussedDate).setFullYear(newYear));
    this.setFocussedDate(clampDate(newDate, min, max));
  };

  private updateFocussedMonth = (adjust: number): void => {
    // console.log("curr focussed month:", this.focussedMonth, "adjust", adjust )
    const d = new Date(this.focussedYear, this.focussedMonth, 1);
    d.setMonth(this.focussedMonth + adjust);
    const newDate = clampDate(d, this.minDate, this.maxDate);
    this.focussedMonth = newDate.getMonth();
    setTimeout(() => this.focussedMonthEl.setFocus(), FOCUS_TIMER);
  };

  private updateFocussedYear = (adjust: number): void => {
    const d = new Date(new Date().setFullYear(this.focussedYear + adjust));
    const newDate = clampDate(d, this.minDate, this.maxDate);
    this.setFocussedYear(newDate.getFullYear());
  };

  private setFocussedDate = (d: Date): void => {
    this.focussedDate = clampDate(d, this.minDate, this.maxDate);
  };

  private setFoccussedDayEl = (element: HTMLButtonElement) => {
    this.focussedDayEl = element;
  };

  private setFoccussedMonthEl = (element: HTMLIcButtonElement) => {
    this.focussedMonthEl = element;
  };

  private setFoccussedYearEl = (element: HTMLIcButtonElement) => {
    this.focussedYearEl = element;
  };

  private setFocussedYear = (newYear: number, focus = true): void => {
    const prevYear = this.focussedYear;
    this.focussedYear = newYear;
    if (this.yearPickerVisible) {
      const newDecade = Math.floor(newYear / 10) * 10;
      const oldDecade = Math.floor(prevYear / 10) * 10;
      if (newDecade !== oldDecade) {
        this.setDecadeView(newDecade);
      }
      if (focus) {
        setTimeout(() => {
          if (this.focussedYearEl !== null) this.focussedYearEl.setFocus();
        }, FOCUS_TIMER);
      }
    } else {
      this.setDecadeView(Math.floor(newYear / 10) * 10);
    }
  };

  private setDateInputProps = (): void => {
    const untilNowMsg =
      !this.disableUntilNow ||
      this.dateUntilNowMessage === DEFAULT_DISABLE_DATES_UNTIL_NOW_MSG
        ? ""
        : this.dateUntilNowMessage;
    const fromNowMsg =
      !this.disableFromNow ||
      this.dateFromNowMessage === DEFAULT_DISABLE_DATES_FROM_NOW_MSG
        ? ""
        : this.dateFromNowMessage;
    const disableDaysMsg =
      !this.disableDays.length ||
      this.disableDaysMessage === DEFAULT_DISABLE_DAYS_MSG
        ? ""
        : this.disableDaysMessage;

    if (this.dateFormat !== DEFAULT_DATE_FORMAT) {
      this.dateInputProps.dateFormat = this.dateFormat;
    }
    if (this.disableFromNow) {
      this.dateInputProps.disableFromNow = this.disableFromNow;
      if (fromNowMsg !== "") {
        this.dateInputProps.dateFromNowMessage = fromNowMsg;
      }
    }
    if (this.disableUntilNow) {
      this.dateInputProps.disableUntilNow = this.disableUntilNow;
      if (fromNowMsg !== "") {
        this.dateInputProps.dateUntilNowMessage = untilNowMsg;
      }
    }
    if (this.disableDays.length > 0) {
      this.dateInputProps.disableDays = this.disableDays;
      if (disableDaysMsg !== "") {
        this.dateInputProps.disableDaysMessage = disableDaysMsg;
      }
    }
    this.dateInputProps.label = this.label;
    if (this.max !== null && this.max !== "") {
      this.dateInputProps.max = this.maxDate;
    }
    if (this.min !== null && this.min !== "") {
      this.dateInputProps.min = this.minDate;
    }
    if (this.helperText !== undefined) {
      this.dateInputProps.helperText = this.helperText;
    }
    if (this.inputId !== undefined) {
      this.dateInputProps.inputId = this.inputId;
    }
    if (this.name !== undefined) {
      this.dateInputProps.name = this.name;
    }
    this.dateInputProps.showClearButton = true;
    this.dateInputProps.showCalendarButton = true;
    if (this.disabled) {
      this.dateInputProps.disabled = this.disabled;
    }
    if (this.required) {
      this.dateInputProps.required = this.required;
    }
    if (this.size !== "default") {
      this.dateInputProps.size = this.size;
    }
    if (this.validationStatus !== "") {
      this.dateInputProps.validationStatus = this.validationStatus;
    }
    if (this.validationText !== "") {
      this.dateInputProps.validationText = this.validationText;
    }
    this.dateInputProps.value = this.value;
  };

  render() {
    const {
      calendarOpen,
      dateInputProps,
      monthNames,
      size,
      focussedMonth,
      focussedYear,
      monthInView,
      yearInView,
      monthPickerVisible,
      yearPickerVisible,
      orderedDaysOfWeek,
      decadeView,
      minDate,
      maxDate,
      showPickerClearButton,
      showPickerTodayButton,
      selectedDate,
    } = this;

    const headerButtonSize = size === "large" ? "default" : "small";

    // const dayNames = stringEnumToArray(IcDayNames);
    // const months = stringEnumToArray(IcDateInputMonths);

    let dialogDesc = `${monthNames[monthInView]} ${yearInView} in view. `;
    if (selectedDate === null) {
      dialogDesc += "No date selected. ";
    }
    // } else {
    //   dialogDesc += `${
    //     dayNames[selectedDate.getDay()]
    //   }, ${selectedDate.getDate()} ${
    //     months[selectedDate.getMonth()]
    //   } ${selectedDate.getFullYear()} selected. `;
    // }
    dialogDesc +=
      "Use arrow keys to change day. Press enter or space to select a date or press escape to close the picker";

    let monthButtonText = "";
    if (monthPickerVisible) {
      monthButtonText = `Month picker view open. ${monthNames[monthInView]} ${yearInView} selected. Use the left and right arrow keys to change the selected month. To return to day picker view, press Enter or Space to select a month, or press Escape.`;
    } else {
      monthButtonText = `${monthNames[monthInView]} ${yearInView} selected. Press Enter or Space to open month picker view or use the left and right arrow keys to change month.`;
    }

    let yearButtonText = "";
    if (yearPickerVisible) {
      yearButtonText = `Year picker view open. ${yearInView} selected. Use the left and right arrow keys to change the selected year. To return to day picker view, press Enter or Space to select a year, or press Escape.`;
    } else {
      yearButtonText = `${yearInView} selected. Press Enter or Space to open year picker view or use the left and right arrow keys to change the selected year.`;
    }
    // const disableYear =
    //   minDate !== null &&
    //   maxDate !== null &&
    //   minDate.getFullYear() === maxDate.getFullYear();
    // const disableMonth =
    //   disableYear && minDate.getMonth() === maxDate.getMonth();

    this.setDateInputProps();

    const dialogLabel = "choose date";

    return (
      <Host onKeyDown={this.keyDownHandler} class={size}>
        <div class="date-input-container">
          <ic-date-input
            ref={(el) => (this.inputEl = el)}
            {...dateInputProps}
          ></ic-date-input>
        </div>
        {calendarOpen && (
          <span id="dialog-description" class="sr-only">
            {dialogDesc}
            {/* {monthNames[monthInView]} {yearInView} in view. Please select a day.
            Use arrow keys to change day. Press enter or space to select a date
            or press escape to close the picker */}
          </span>
        )}
        <div
          role="dialog"
          aria-modal="true"
          aria-label={dialogLabel}
          aria-describedBy="dialog-description"
          aria-hidden={!calendarOpen}
          class={{
            "calendar-container": true,
            open: calendarOpen,
          }}
          onClick={this.handleCalenderClick}
        >
          {/* {!monthPickerVisible && !yearPickerVisible && (
            <span class="sr-only" aria-live="polite">
              {monthNames[monthInView]} {yearInView} in view. Please select a
              day.
            </span>
          )} */}
          <div
            class={{
              "month-year-nav-container": true,
            }}
          >
            <div class="month-year-nav">
              {this.previousMonthButton()}
              <span id="select-month-hint" aria-hidden="true">
                {monthButtonText}
              </span>
              <ic-button
                ref={(el: HTMLIcButtonElement) => (this.monthButtonEl = el)}
                id="month-picker-button"
                size={headerButtonSize}
                class="month-picker-button"
                aria-haspopup="menu"
                aria-expanded={monthPickerVisible ? "true" : "false"}
                // disabled={disableMonth}
                full-width="true"
                variant="tertiary"
                aria-label={
                  monthPickerVisible
                    ? "Return to day picker view"
                    : "Open select month view"
                }
                aria-describedby="select-month-hint"
                onKeyDown={this.monthButtonKeyDownHandler}
                onClick={this.monthButtonClickHandler}
              >
                {monthNames[monthInView]}
              </ic-button>
              {this.nextMonthButton()}
              {monthPickerVisible && (
                <span class="sr-only" aria-live="polite">
                  {monthNames[monthInView]} {yearInView} selected
                </span>
              )}
            </div>
            <div class="month-year-nav">
              {this.previousYearButton()}
              <span id="select-year-hint" aria-hidden="true">
                {yearButtonText}
              </span>
              <ic-button
                ref={(el: HTMLIcButtonElement) => (this.yearButtonEl = el)}
                id="year-picker-button"
                size={headerButtonSize}
                class="year-picker-button"
                aria-haspopup="menu"
                // aria-pressed={yearPickerVisible ? "true" : "false"}
                aria-expanded={yearPickerVisible ? "true" : "false"}
                // disabled={disableYear}
                full-width="true"
                variant="tertiary"
                aria-label={
                  yearPickerVisible
                    ? "Return to day picker view"
                    : "Open select year view"
                }
                aria-describedby="select-year-hint"
                onKeyDown={this.yearButtonKeyDownHandler}
                onClick={this.yearButtonClickHandler}
              >
                {this.yearInView}
              </ic-button>
              {this.nextYearButton()}
              {yearPickerVisible && (
                <span class="sr-only" aria-live="polite">
                  {yearInView} selected
                </span>
              )}
            </div>
          </div>
          {!(monthPickerVisible || yearPickerVisible) && (
            <div
              class={{
                calendar: true,
                hidden: monthPickerVisible || yearPickerVisible,
              }}
              aria-label={`${monthNames[monthInView]} ${yearInView}`}
              onKeyDown={this.handleCalendarKeyDown}
            >
              <div class="weekdays">
                {orderedDaysOfWeek.map((dayName) => {
                  const header = size === "small" ? dayName.charAt(0) : dayName;
                  return (
                    <div class="calendar-day-header">
                      <ic-typography variant="caption">{header}</ic-typography>
                    </div>
                  );
                })}
              </div>

              <div class="calendar-days-container">
                {this.currMonthView.map((day) => (
                  <DayButton
                    size={size}
                    day={day}
                    disableDay={this.disableDays.includes(Number(day.getDay()))}
                    today={dateMatches(day, this.today)}
                    selected={dateMatches(day, this.selectedDate)}
                    focussed={dateMatches(day, this.focussedDate)}
                    inRange={dateInRange(day, minDate, maxDate)}
                    monthInView={monthInView}
                    onSelectDay={this.handleSelectDay}
                    focussedDayRef={this.setFoccussedDayEl}
                    showDaysOutsideMonth={this.showDaysOutsideMonth}
                  ></DayButton>
                ))}
              </div>
            </div>
          )}
          {monthPickerVisible && (
            <MonthPicker
              size={size}
              onSelectMonth={this.handleSelectMonth}
              monthInView={monthInView}
              focussedMonth={focussedMonth}
              onKeyDown={this.monthPickerKeyDownHandler}
              focussedMonthRef={this.setFoccussedMonthEl}
              minDate={minDate}
              maxDate={maxDate}
              yearInView={yearInView}
            ></MonthPicker>
          )}
          {yearPickerVisible && (
            <YearPicker
              decadeView={decadeView}
              size={size}
              focussedYear={focussedYear}
              onSelectYear={this.handleSelectYear}
              onKeyDown={this.yearPickerKeyDownHandler}
              yearInView={yearInView}
              minDate={minDate}
              maxDate={maxDate}
              focussedYearRef={this.setFoccussedYearEl}
            ></YearPicker>
          )}
          <div
            class={{
              "bottom-buttons": true,
              "no-today": !showPickerTodayButton,
            }}
          >
            {showPickerTodayButton && (
              <ic-button
                variant="tertiary"
                ref={(el) => (this.todayButtonEl = el)}
                size={headerButtonSize}
                aria-label="go to today"
                onClick={this.todayButtonClickHandler}
                onKeyDown={this.todayButtonKeyDownHandler}
                disabled={this.isCurrentMonth()}
              >
                Go to today
              </ic-button>
            )}
            {showPickerClearButton && (
              <ic-button
                id="clear-button"
                aria-label="clear selected date"
                ref={(el) => (this.clearButtonEl = el)}
                variant="tertiary"
                size={headerButtonSize}
                onClick={this.clearButtonClickHandler}
                onKeyDown={this.clearButtonKeyDownHandler}
                disabled={this.value === ""}
              >
                Clear
              </ic-button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
