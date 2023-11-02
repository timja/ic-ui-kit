/* istanbul ignore file */
import { h, FunctionalComponent } from "@stencil/core";
import { yearInRange } from "./ic-date-picker-utils";
import { IcSizes } from "../../utils/types";

export type YearPickerProps = {
  decadeView: number[];
  size: IcSizes;
  focussedYear: number;
  yearInView: number;
  onSelectYear: (year: number) => void;
  onKeyDown: (ev: KeyboardEvent) => void;
  minDate: Date;
  maxDate: Date;
  focussedYearRef: (element: HTMLIcButtonElement) => void;
};

export const YearPicker: FunctionalComponent<YearPickerProps> = ({
  decadeView,
  size,
  focussedYear,
  yearInView,
  onSelectYear,
  onKeyDown,
  minDate,
  maxDate,
  focussedYearRef,
}) => {
  const handleYearClick = (ev: MouseEvent): void => {
    const button = ev.target as HTMLElement;
    onSelectYear(Number(button.getAttribute("data-year")));
  };
  const buttonSize = size === "small" ? "small" : "default";

  const prevDecade = decadeView[0];
  const nextDecade = decadeView[11];
  const years = decadeView.slice(1, 11);

  console.log(prevDecade, nextDecade, years);

  return (
    // <div
    //   class={{
    //     "year-picker": true,
    //   }}
    // >
    // <div class="year-picker">
    <div class="new-year-picker-container">
      <div class="prev-decade" aria-hidden="true">
        <ic-button
          class={{
            "year-button": true,
            flip: true,
          }}
          disabled={!yearInRange(prevDecade, minDate, maxDate)}
          data-year={prevDecade}
          tabIndex={-1}
          variant="tertiary"
          onClick={handleYearClick}
          aria-hidden="true"
          // aria-selected={inDecade ? current ? "true" : "false" : undefined}
          // aria-describedby={`btn-describe-${index}`}
          // onKeyDown={onKeyDown}
          size={buttonSize}
        >
          {`${prevDecade - 9}s`}
          <svg
            slot="left-icon"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49996 2.66675L7.55996 3.60675L11.28 7.33341H3.16663V8.66675H11.28L7.55996 12.3934L8.49996 13.3334L13.8333 8.00008L8.49996 2.66675Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
      </div>
      <div class="years-list" role="list">
        {years.map((yr) => {
          const current = yearInView === yr;
          const focussed = focussedYear === yr;
          const inDecade = true;
          // const label = inDecade ? yr : index === 0 ? `${yr - 9}s` : `${yr}s`;
          const label = yr;
          return (
            <ic-button
              class={{
                "year-button": true,
                selected: current,
              }}
              disabled={!yearInRange(yr, minDate, maxDate)}
              data-year={yr}
              tabIndex={focussed ? 0 : -1}
              variant={current ? "primary" : "tertiary"}
              onClick={handleYearClick}
              aria-label={current ? "" : `select ${yr}`}
              aria-hidden={inDecade ? "false" : "true"}
              role={inDecade ? "listitem" : ""}
              // aria-selected={inDecade ? current ? "true" : "false" : undefined}
              aria-current={current ? "true" : "false"}
              // aria-describedby={`btn-describe-${index}`}
              onKeyDown={onKeyDown}
              size={buttonSize}
              ref={(el: HTMLIcButtonElement) => {
                if (focussed && el) {
                  focussedYearRef(el);
                }
              }}
            >
              {label}
            </ic-button>
          );
        })}
      </div>
      <div class="next-decade" aria-hidden="true">
        <ic-button
          class={{
            "year-button": true,
          }}
          disabled={!yearInRange(nextDecade, minDate, maxDate)}
          data-year={nextDecade}
          tabIndex={-1}
          variant="tertiary"
          onClick={handleYearClick}
          aria-hidden="true"
          // aria-selected={inDecade ? current ? "true" : "false" : undefined}
          // aria-describedby={`btn-describe-${index}`}
          // onKeyDown={onKeyDown}
          size={buttonSize}
        >
          {`${nextDecade}s`}
          <svg
            slot="right-icon"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49996 2.66675L7.55996 3.60675L11.28 7.33341H3.16663V8.66675H11.28L7.55996 12.3934L8.49996 13.3334L13.8333 8.00008L8.49996 2.66675Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
      </div>
    </div>
    // </div>
    // </div>
  );
};
