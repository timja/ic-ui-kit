/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Element,
  h,
  Prop,
  State,
  Listen,
  Watch,
  Fragment,
  Method,
  Event,
  EventEmitter,
} from "@stencil/core";
import unsortedIcon from "./assets/unsorted-icon.svg";
import ascendingIcon from "./assets/ascending-icon.svg";
import descendingIcon from "./assets/descending-icon.svg";
import {
  IcDataTableColumnDataTypes,
  IcDataTableColumnObject,
  IcDataTableDensityOptions,
  IcDataTableRowHeights,
  IcDataTableSortOrderOptions,
  IcDataTableTruncationTypes,
  IcDensityUpdateEventDetail,
} from "./ic-data-table.types";
import {
  IcPaginationAlignmentOptions,
  IcPaginationControlTypes,
  IcPaginationTypes,
} from "../ic-pagination/ic-pagination.types";
import { IcThemeForegroundNoDefault } from "@ukic/web-components/dist/types/utils/types";
// Unable to import helper functions via @ukic/web-components
import { getSlotContent, isSlotUsed } from "../../utils/helpers";

/**
 * @slot empty-state - Content is slotted below the table header when there is no data and the table is not loading.
 * @slot {COLUMN_KEY}-{ROW_INDEX}[-icon] - Each cell should have its own slot, named using the column tag and the row index, allowing for custom elements to be displayed. Include `-icon` at the end for that cell's icon slot.
 * @slot {COLUMN_KEY}-column-icon - The icon slot for a column header.
 * @slot title-bar - A custom ic-data-table-title-bar can be slotted above the column headers to display additional information about the table.
 */
@Component({
  tag: "ic-data-table",
  styleUrl: "ic-data-table.css",
  shadow: true,
})
export class DataTable {
  // private DENSITY_HEIGHT_MULTIPLIER = {
  //   dense: 0.8,
  //   default: 1,
  //   spacious: 1.2,
  // };

  private DENSITY_PADDING_HEIGHT_DIFF = {
    dense: 8,
    default: 16,
    spacious: 20,
  };

  private SORT_ICONS = {
    unsorted: unsortedIcon,
    ascending: ascendingIcon,
    descending: descendingIcon,
  };

  private currentRowHeight: number;
  private hasLoadedForOneSecond: boolean = true;
  private timerStarted: number;

  @Element() el: HTMLIcDataTableElement;

  @State() fromRow: number = 0;

  @State() previousRowsPerPage: number;

  @State() rowsPerPage: number;

  @State() scrollable: boolean = false;

  @State() scrollOffset: number = 0;

  @State() selectedRow: object;

  @State() sortedColumn: string;

  @State() sortedColumnOrder: IcDataTableSortOrderOptions;

  @State() toRow: number;

  /**
   * The title for the table only visible to screen readers.
   */
  @Prop() caption!: string;

  /**
   * The column headers for the table.
   */
  @Prop() columns!: IcDataTableColumnObject[];

  /**
   * The row content for the table.
   */
  @Prop() data: { [key: string]: any }[];

  /**
   * Set the density of the table including font and padding.
   */
  @Prop({ mutable: true }) density?: IcDataTableDensityOptions = "default";

  /**
   * Applies a border to the table container.
   */
  @Prop() embedded?: boolean = false;

  /**
   * Sets the row height on all rows in the table that aren't set using the variableRowHeight method.
   */
  @Prop({ mutable: true }) globalRowHeight?: IcDataTableRowHeights = 40;

  /**
   * If `true`, column headers will not be visible.
   */
  @Prop() hideColumnHeaders?: boolean = false;

  /**
   * When set to `true`, the full table will show a loading state, featuring a radial indicator.
   */
  @Prop({ mutable: true }) loading?: boolean = false;

  /**
   * Sets the props for the circular loading indicator used in the loading state.
   */
  @Prop() loadingOptions?: {
    appearance?: IcThemeForegroundNoDefault;
    description?: string;
    label?: string;
    labelDuration?: number;
    max?: number;
    min?: number;
    progress?: number;
    showBackground?: boolean;
  };

  /**
   * The minimum amount of time the `loading` state displays for before showing the data. Used to prevent flashing in the component.
   */
  @Prop() minimumLoadingDisplayDuration?: number = 1000;

  /**
   * Sets the props for the pagination bar.
   */
  @Prop() paginationOptions?: {
    itemsPerPage?: { label: string; value: string }[];
    type?: IcPaginationTypes;
    control?: IcPaginationControlTypes;
    itemsPerPageControl?: boolean;
    goToPageControl?: boolean;
    alignment?: IcPaginationAlignmentOptions;
  } = {
    itemsPerPage: [
      { label: "10", value: "10" },
      { label: "25", value: "25" },
      { label: "50", value: "50" },
    ],
    type: "page",
    control: "simple",
    itemsPerPageControl: true,
    goToPageControl: true,
    alignment: "right",
  };

  /**
   * If `true`, adds a pagination bar to the bottom of the table.
   */
  @Prop() showPagination?: boolean = false;

  /**
   * If `true`, allows table columns to be sorted using applied sort buttons.
   */
  @Prop() sortable?: boolean = false;

  /**
   * Sets the order columns will be sorted in and allows for 'default' sorts to be added.
   */
  @Prop() sortOptions?: {
    sortOrders: IcDataTableSortOrderOptions[];
    defaultColumn?: string;
  } = {
    sortOrders: ["unsorted", "ascending", "descending"],
    defaultColumn: "",
  };

  /**
   * If `true`, column headers will remain at the top of the table when scrolling vertically.
   */
  @Prop() stickyColumnHeaders?: boolean = false;

  /**
   * If `true`, row headers will remain to the left when scrolling horizontally.
   */
  @Prop() stickyRowHeaders?: boolean = false;

  /**
   * For long text in cells that aren't set to textWrap, define how they should be truncated.
   * `tooltip` adds a tooltip for the rest of the text, `showHide` adds the ic-typography "See More"/"See Less" buttons.
   */
  @Prop() truncationPattern?: IcDataTableTruncationTypes = "tooltip";

  /**
   * If `true`, the table displays a linear loading indicator below the header row to indicate an updating state.
   */
  @Prop() updating?: boolean = false;

  /**
   * Sets the props for the linear loading indicator used in the updating state.
   */
  @Prop() updatingOptions?: {
    appearance?: IcThemeForegroundNoDefault;
    description?: string;
    max?: number;
    min?: number;
    progress?: number;
  };

  /**
   * Allows for custom setting of row heights on individual rows based on an individual value from the `data` prop and the row index.
   * If the function returns `null`, that row's height will be set to the `globalRowHeight` property.
   */
  @Prop({ mutable: true }) variableRowHeight?: (params: {
    [key: string]: any;
    index: number;
  }) => IcDataTableRowHeights | null;

  /**
   * Emitted when the `globalRowHeight` or `variableRowHeight` properties change in the data table.
   */
  @Event() icRowHeightChange: EventEmitter<void>;

  componentWillLoad(): void {
    this.rowsPerPage = Number(this.paginationOptions.itemsPerPage[0].value);
    this.previousRowsPerPage = this.rowsPerPage;
    this.toRow = this.rowsPerPage;
    this.sortedColumn = this.sortOptions.defaultColumn;
    this.sortedColumnOrder = this.sortOptions.sortOrders[0];
    this.loadingOptions = {
      ...this.loadingOptions,
      showBackground: this.data?.length > 0,
    };
  }

  componentDidLoad(): void {
    const tableElement = this.el.shadowRoot.querySelector("table");
    const tableContainer = this.el.shadowRoot.querySelector(".table-container");
    if (
      tableElement?.clientHeight > tableContainer?.clientHeight ||
      tableElement?.clientWidth > tableContainer?.clientWidth
    ) {
      this.scrollable = true;
    }

    this.dataTruncation();
  }

  private removeDivStyles = (parentDiv: HTMLElement) => {
    parentDiv.style["height"] = null;
    parentDiv.style["overflowY"] = null;
  };

  private VERTICAL_CLASSES = ["cell-alignment-middle", "cell-alignment-bottom"];

  private removeVerticalAlignment = (el: HTMLElement): void => {
    if (
      this.VERTICAL_CLASSES.some((className) =>
        Array.from(el.classList).includes(className)
      )
    ) {
      el.classList.remove(...this.VERTICAL_CLASSES);
    }
  };

  private setMaxLines = (
    typographyEl: HTMLIcTypographyElement,
    cellContainer: HTMLElement
  ) => {
    typographyEl.maxLines = 1;
    typographyEl.checkMaxLines(
      cellContainer.clientHeight +
        this.DENSITY_PADDING_HEIGHT_DIFF[this.density]
    );
    this.removeDivStyles(cellContainer);
  };

  private dataTruncation = () => {
    Array.from(
      this.el.shadowRoot.querySelectorAll(
        "ic-typography:not(.column-header-text)"
      )
    ).forEach((typographyEl: HTMLIcTypographyElement) => {
      const tableCell = typographyEl.closest("td");
      const tooltip = typographyEl.closest("ic-tooltip");
      const cellContainer = typographyEl.closest(
        ".cell-container"
      ) as HTMLElement;

      if (
        cellContainer.clientHeight > typographyEl.scrollHeight &&
        !!typographyEl.scrollHeight
      ) {
        if (tooltip) {
          cellContainer.appendChild(typographyEl);
          tooltip.remove();
        } else {
          typographyEl.maxLines = undefined;
        }
      } else if (typographyEl.scrollHeight > cellContainer.clientHeight) {
        if (this.truncationPattern === "tooltip") {
          typographyEl.style.webkitLineClamp = `${Math.floor(
            cellContainer.clientHeight / 24
          )}`;
          if (!tooltip) {
            const tooltipEl = document.createElement("ic-tooltip");
            tooltipEl.setAttribute("target", typographyEl.id);
            tooltipEl.setAttribute("label", typographyEl.innerHTML);
            typographyEl.parentNode.replaceChild(tooltipEl, typographyEl);
            tooltipEl.appendChild(typographyEl);
          }
        } else {
          this.setMaxLines(typographyEl, cellContainer);
          this.removeVerticalAlignment(tableCell);
          this.removeVerticalAlignment(cellContainer);
        }
      }

      //   const parentIsTooltip = parentEl.tagName === "IC-TOOLTIP";
      //   const parentTableCell = parentEl.parentElement;
      //   const parentDiv = parentIsTooltip ? parentTableCell : parentEl;
      //   const parentHeight = Number(parentDiv.style["height"].replace("px", ""));
      //   const maxLines = Math.floor(parentHeight / 24);
      //   if (typographyEl.clientHeight > parentHeight) {
      //     this.removeVerticalAlignment(parentDiv);
      //     this.removeVerticalAlignment(parentDiv.parentElement);
      //   } else {
      //     typographyEl.maxLines = undefined;
      //   }
      //   if (
      //     parentDiv.parentElement.clientHeight >
      //     parentHeight + this.DENSITY_PADDING_HEIGHT_DIFF[this.density]
      //   ) {
      //     this.removeDivStyles(parentDiv);
      //   }
      //   if (typographyEl.scrollHeight < parentHeight && parentIsTooltip) {
      //     parentEl.replaceWith(...Array.from(parentEl.childNodes)); // Removes tooltip
      //   } else if (
      //     (typographyEl.scrollHeight > typographyEl.clientHeight ||
      //       (parentHeight && typographyEl.clientHeight > parentHeight)) &&
      //     !parentDiv.classList.contains("data-type-element")
      //   ) {
      //     if (this.truncationPattern === "tooltip") {
      //       typographyEl.style.webkitLineClamp = `${maxLines}`;
      //       if (!parentIsTooltip) {
      //         const tooltipEl = document.createElement("ic-tooltip");
      //         tooltipEl.setAttribute("target", typographyEl.id);
      //         tooltipEl.setAttribute("label", typographyEl.innerHTML);
      //         typographyEl.parentNode.replaceChild(tooltipEl, typographyEl);
      //         tooltipEl.appendChild(typographyEl);
      //       }
      //     } else {
      //       /**
      //        * The manual height on the div can be removed since the line clamp applied to the ic-typography will perform that function.
      //        * Adding 24 to checkMaxLines ensures an extra line is available for the `See More/See Less` button to move onto.
      //        */
      //       this.removeDivStyles(parentDiv);
      //       typographyEl.maxLines = maxLines - 1 || 1;
      //       typographyEl.checkMaxLines(parentHeight + 24);
      //     }
      //   }
      //   console.log(typographyEl.scrollHeight > typographyEl.clientHeight);
    });
  };

  componentDidRender(): void {
    this.dataTruncation();
  }

  @Listen("icItemsPerPageChange")
  handleItemsPerPageChange(ev: CustomEvent): void {
    this.previousRowsPerPage = this.rowsPerPage;
    this.rowsPerPage = ev.detail.value;
  }

  @Listen("icPageChange")
  handlePageChange(ev: CustomEvent): void {
    this.fromRow = (ev.detail.value - 1) * this.rowsPerPage;
    this.toRow = this.fromRow + this.rowsPerPage;
    const tableRowsContainer = this.el.shadowRoot.querySelector(
      ".table-row-container"
    );
    if (this.previousRowsPerPage === this.rowsPerPage) {
      tableRowsContainer.scrollTop = 0;
    } else if (this.previousRowsPerPage < this.rowsPerPage) {
      tableRowsContainer.scrollTop = this.scrollOffset;
      this.previousRowsPerPage = this.rowsPerPage;
    } else {
      this.previousRowsPerPage = this.rowsPerPage;
    }
  }

  @Listen("icTableDensityUpdate")
  handleDensityChange(ev: CustomEvent<IcDensityUpdateEventDetail>): void {
    this.density = ev.detail.value;
  }

  @Listen("click", { target: "window" })
  clickListener(ev: MouseEvent): void {
    if (ev.target !== this.el) this.selectedRow = undefined;
  }

  @Watch("loading")
  loadingHandler(newValue: boolean): void {
    if (newValue) this.startLoadingTimer();
  }

  @Watch("data")
  dataHandler(newData: { [key: string]: any }[]): void {
    this.loadingOptions = {
      ...this.loadingOptions,
      showBackground: newData?.length > 0,
    };
    if (this.loading) {
      !this.hasLoadedForOneSecond
        ? setTimeout(
            () => (this.loading = false),
            this.minimumLoadingDisplayDuration -
              (Date.now() - this.timerStarted)
          )
        : (this.loading = false);
    }
    this.updating &&= false;
  }

  @Watch("globalRowHeight")
  @Watch("variableRowHeight")
  rowHeightChangeHandler(): void {
    this.dataTruncation();

    const deleteTextWrapKey = (array: any[]) =>
      array.forEach((val) => val.textWrap && delete val.textWrap);
    deleteTextWrapKey(this.data);
    deleteTextWrapKey(this.columns);

    this.icRowHeightChange.emit();
  }

  /**
   * Resets the `globalRowHeight` prop to `40px` and sets the `variableRowHeight` prop to `null`.
   */
  @Method()
  async resetRowHeights(): Promise<void> {
    this.globalRowHeight = 40;
    this.variableRowHeight = null;
  }

  private startLoadingTimer = (): void => {
    this.hasLoadedForOneSecond = false;
    this.timerStarted = Date.now();
    setTimeout(() => {
      this.hasLoadedForOneSecond = true;
      this.timerStarted = null;
    }, this.minimumLoadingDisplayDuration);
  };

  private isObject = (value: any) => typeof value === "object";

  private notDefaultDensity = () => this.density !== "default";

  private getCellContent = (
    cell: any,
    dataType: IcDataTableColumnDataTypes
  ): any => {
    switch (dataType) {
      case "element":
        return undefined;
      case "date":
        return (
          cell instanceof Date ? cell : new Date(cell)
        ).toLocaleDateString();
      default:
        return cell;
    }
  };

  private getCellAlignment = (
    cell: any,
    alignment: "horizontal" | "vertical"
  ) => {
    if (this.isObject(cell) && Object.keys(cell).includes("cellAlignment")) {
      return this.getObjectValue(
        this.getObjectValue(cell, "cellAlignment"),
        alignment
      );
    }
  };

  private createUpdatingIndicator = () => {
    const { appearance, description, max, min, progress } =
      this.updatingOptions || {};
    return (
      <th colSpan={this.columns.length} class="updating-state">
        <ic-loading-indicator
          appearance={appearance}
          description={description || "Updating table data"}
          fullWidth={true}
          max={max}
          min={min}
          progress={progress}
          type="linear"
          size="small"
        ></ic-loading-indicator>
      </th>
    );
  };

  private createCells = (row: object, rowIndex: number) => {
    const rowValues = Object.values(row);
    const rowKeys = Object.keys(row);
    const rowTextWrapIndex = rowKeys.indexOf("textWrap");
    const rowTextWrap = rowTextWrapIndex > -1 && rowValues[rowTextWrapIndex];
    let rowAlignment: string;
    let rowEmphasis: string;
    const headerIndex = rowKeys.indexOf("header");
    if (headerIndex > -1) {
      rowAlignment = this.getObjectValue(
        rowValues[headerIndex],
        "rowAlignment"
      );
      rowEmphasis = this.getObjectValue(rowValues[headerIndex], "emphasis");
    }
    return rowValues.map((cell, index) => {
      const { columnAlignment, dataType, emphasis, icon, key, textWrap } =
        this.columns[index] || {};
      const cellSlotName = `${key}-${rowIndex}`;
      const hasIcon = this.isObject(cell) && Object.keys(cell).includes("icon");
      const isNotElement = dataType !== "element";
      const cellValue = (key: string) => this.getObjectValue(cell, key);

      return (
        key &&
        (rowKeys[index] === "header" ? (
          <th
            scope="row"
            colSpan={cellValue("colspan")}
            class={{
              ["row-header"]: true,
              [`row-header-alignment-${cellValue("cellAlignment")}`]:
                !!cellValue("cellAlignment"),
              ["row-header-sticky"]: this.stickyRowHeaders,
            }}
          >
            {cellValue("title")}
          </th>
        ) : (
          <td
            class={{
              ["table-cell"]: true,
              [`table-density-${this.density}`]: this.notDefaultDensity(),
              [`data-type-${dataType}-cell`]: true,
              [`cell-alignment-${
                columnAlignment?.vertical ||
                rowAlignment ||
                this.getCellAlignment(cell, "vertical")
              }`]:
                !!columnAlignment?.vertical ||
                !!rowAlignment ||
                !!this.getCellAlignment(cell, "vertical"),
            }}
          >
            <div
              innerHTML={
                dataType === "element" && !isSlotUsed(this.el, cellSlotName)
                  ? (cell as string)
                  : null
              }
              class={{
                "cell-container": isNotElement,
                [`data-type-${dataType}`]: true,
                [`cell-alignment-${
                  columnAlignment?.horizontal ||
                  this.getCellAlignment(cell, "horizontal")
                }`]:
                  !!columnAlignment?.horizontal ||
                  !!this.getCellAlignment(cell, "horizontal"),
                [`cell-alignment-${
                  columnAlignment?.vertical ||
                  rowAlignment ||
                  this.getCellAlignment(cell, "vertical")
                }`]:
                  !!columnAlignment?.vertical ||
                  !!rowAlignment ||
                  !!this.getCellAlignment(cell, "vertical"),
              }}
              style={{
                height: `${this.currentRowHeight}px`,
                // height:
                //   this.currentRowHeight &&
                //   !rowTextWrap &&
                //   !textWrap &&
                //   isNotElement
                //     ? `${
                //         this.currentRowHeight *
                //           this.DENSITY_HEIGHT_MULTIPLIER[this.density] -
                //         this.DENSITY_PADDING_HEIGHT_DIFF[this.density]
                //       }px`
                //     : null,
                overflowY:
                  this.truncationPattern === "tooltip" &&
                  !(rowTextWrap && textWrap) &&
                  isNotElement
                    ? "hidden"
                    : null,
              }}
            >
              {isSlotUsed(this.el, cellSlotName) ? (
                <slot name={cellSlotName} />
              ) : (
                <Fragment>
                  {isSlotUsed(this.el, `${cellSlotName}-icon`) ? (
                    <slot name={`${cellSlotName}-icon`} />
                  ) : (
                    (hasIcon || icon?.onAllCells) && (
                      <span
                        class="icon"
                        innerHTML={cellValue("icon") || icon.icon}
                      ></span>
                    )
                  )}
                  <ic-typography
                    id={cellSlotName}
                    variant="body"
                    class={{
                      [`cell-emphasis-${
                        (this.isObject(cell) && cellValue("emphasis")) ||
                        emphasis ||
                        rowEmphasis
                      }`]:
                        (this.isObject(cell) && !!cellValue("emphasis")) ||
                        !!emphasis ||
                        !!rowEmphasis,
                      [`text-${this.density}`]: this.notDefaultDensity(),
                    }}
                  >
                    {this.isObject(cell) && dataType !== "date" ? (
                      Object.keys(cell).includes("href") ? (
                        <ic-link href={cellValue("href")}>
                          {cellValue("data")}
                        </ic-link>
                      ) : (
                        cellValue("data")
                      )
                    ) : (
                      this.getCellContent(cell, dataType)
                    )}
                  </ic-typography>
                </Fragment>
              )}
            </div>
          </td>
        ))
      );
    });
  };

  private createColumnHeaders = () => {
    return this.columns.map(({ cellAlignment, colspan, icon, key, title }) => (
      <th
        scope="col"
        class={{
          ["column-header"]: true,
          [`table-density-${this.density}`]: this.notDefaultDensity(),
          ["updating-state-headers"]: this.updating && !this.loading,
        }}
        colSpan={colspan}
      >
        <div
          class={{
            "column-header-inner-container": true,
            [`column-header-alignment-${cellAlignment}`]: !!cellAlignment,
          }}
        >
          {isSlotUsed(this.el, `${key}-column-icon`) ? (
            <slot name={`${key}-column-icon`} />
          ) : (
            icon &&
            !icon.hideOnHeader && (
              <span class="icon" innerHTML={icon.icon}></span>
            )
          )}
          <ic-typography
            variant="body"
            class={{
              ["column-header-text"]: true,
              [`text-${this.density}`]: this.notDefaultDensity(),
            }}
          >
            {title}
          </ic-typography>
          {this.sortable && (
            <ic-button
              variant="icon"
              id={`sort-button-${key}`}
              aria-label={this.getSortButtonLabel(key)}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => this.sortRows(key)}
              innerHTML={
                this.SORT_ICONS[
                  this.sortedColumn === key
                    ? this.sortedColumnOrder
                    : "unsorted"
                ]
              }
              class={{
                ["sort-button"]: true,
                ["sort-button-unsorted"]:
                  this.sortedColumn !== key ||
                  this.sortedColumnOrder === "unsorted",
              }}
            ></ic-button>
          )}
        </div>
      </th>
    ));
  };

  private onRowClick = (target: HTMLElement, row: object) => {
    if (
      target.tagName !== "IC-TYPOGRAPHY" &&
      !target.style.getPropertyValue("--truncation-max-lines")
    ) {
      this.selectedRow =
        !(this.selectedRow === row && this.loading && this.updating) && row;
    }
  };

  private createRows = () => {
    const data = this.showPagination
      ? this.data.slice(this.fromRow, this.toRow)
      : this.data.slice();

    /**
     * Ensures that createCells has a value in data to map over to actually render the slot.
     * Removes the need for the user to add it multiple times.
     */
    this.columns.forEach(({ key }) => {
      data.forEach((row, rowIndex) => {
        const cellSlotName = `${key}-${rowIndex}`;
        if (isSlotUsed(this.el, cellSlotName)) {
          row[key] = getSlotContent(this.el, cellSlotName);
        }
      });
    });

    return data
      .sort(!this.sortable ? undefined : this.getSortFunction())
      .map((row, index) => {
        const variableRowHeightVal = this.variableRowHeight?.({
          ...row,
          index,
        });

        this.currentRowHeight = variableRowHeightVal
          ? variableRowHeightVal !== "auto" && variableRowHeightVal
          : this.globalRowHeight !== "auto" && this.globalRowHeight;

        return (
          <tr
            // eslint-disable-next-line react/jsx-no-bind
            onClick={(event: MouseEvent) =>
              this.onRowClick(event.target as HTMLElement, row)
            }
            class={{
              ["table-row"]: true,
              ["table-row-selected"]: this.selectedRow === row,
            }}
          >
            {this.createCells(row, index)}
          </tr>
        );
      });
  };

  private getObjectValue = (cell: object, key: string) => {
    return Object.values(cell)[Object.keys(cell).indexOf(key)];
  };

  private getSortButtonLabel = (key: string) => {
    let label = "";
    const getNextSortOption = (option: IcDataTableSortOrderOptions) => {
      const sortOrders = this.sortOptions.sortOrders;
      return sortOrders[(sortOrders.indexOf(option) + 1) % sortOrders.length];
    };

    if (this.sortedColumn === key) {
      const sortOption = getNextSortOption(this.sortedColumnOrder);
      label = sortOption !== "unsorted" ? `Sort ${sortOption}` : "Remove sort";
    } else {
      label = `Sort ${getNextSortOption("unsorted")}`;
    }

    return label;
  };

  private getComparison = (targetRow: any, comparisonRow: any): number => {
    const targetRowValue = targetRow[this.sortedColumn];
    const comparisonRowValue = comparisonRow[this.sortedColumn];
    return this.columns.find((col) => col.key === this.sortedColumn)
      .dataType === "date"
      ? new Date(targetRowValue).valueOf() -
          new Date(comparisonRowValue).valueOf()
      : String(
          this.isObject(targetRowValue)
            ? Object.values(targetRowValue)[0]
            : targetRowValue
        ).localeCompare(
          String(
            this.isObject(comparisonRowValue)
              ? Object.values(comparisonRowValue)[0]
              : comparisonRowValue
          ),
          undefined,
          { numeric: true, sensitivity: "base" }
        );
  };

  private getSortFunction = () => {
    switch (this.sortedColumnOrder) {
      case "ascending":
        return (a: any, b: any) => this.getComparison(a, b);
      case "descending":
        return (a: any, b: any) => this.getComparison(b, a);
      default:
        return undefined;
    }
  };

  private sortRows = (column: string) => {
    const sortButton = this.el.shadowRoot.querySelector(
      `#sort-button-${column}`
    ) as HTMLIcButtonElement;

    const sortOrders = this.sortOptions.sortOrders;

    if (column !== this.sortedColumn) {
      if (this.sortedColumn) {
        const previousSortedButton = this.el.shadowRoot.querySelector(
          `#sort-button-${this.sortedColumn}`
        ) as HTMLIcButtonElement;
        previousSortedButton.setAttribute(
          "aria-label",
          this.getSortButtonLabel(column)
        ); // Passing through unsorted column returns correct label for newly unsorted column
      }
      this.sortedColumn = column;
      this.sortedColumnOrder = "unsorted";
    }

    let nextSortOrderIndex = sortOrders.indexOf(this.sortedColumnOrder) + 1;

    if (nextSortOrderIndex > sortOrders.length - 1) {
      nextSortOrderIndex = 0;
    }

    this.sortedColumnOrder = sortOrders[nextSortOrderIndex];

    sortButton.setAttribute("aria-label", this.getSortButtonLabel(column));
  };

  private updateScrollOffset = () => {
    this.scrollOffset = this.el.shadowRoot.querySelector(
      ".table-row-container"
    ).scrollTop;
  };

  render() {
    const {
      caption,
      createColumnHeaders,
      createRows,
      createUpdatingIndicator,
      data,
      hideColumnHeaders,
      loading,
      loadingOptions,
      paginationOptions,
      scrollable,
      scrollOffset,
      showPagination,
      sortable,
      sortedColumnOrder,
      sortedColumn,
      stickyColumnHeaders,
      updateScrollOffset,
      updating,
    } = this;

    return (
      <div class="table-container">
        {isSlotUsed(this.el, "title-bar") && <slot name="title-bar" />}
        <div
          class={{
            ["table-row-container"]: true,
            scrollable,
          }}
          tabIndex={scrollable ? 0 : null}
          onScroll={updateScrollOffset}
        >
          <table>
            <caption class="table-caption">{caption}</caption>
            {!hideColumnHeaders && (
              <thead
                class={{
                  ["column-header-sticky"]: stickyColumnHeaders,
                  ["column-header-overlay"]:
                    stickyColumnHeaders && scrollOffset !== 0,
                }}
              >
                <tr>{createColumnHeaders()}</tr>
              </thead>
            )}
            {updating &&
              !loading &&
              (hideColumnHeaders ? (
                <thead>{createUpdatingIndicator()}</thead>
              ) : (
                createUpdatingIndicator()
              ))}
            {data?.length > 0 && !loading && <tbody>{createRows()}</tbody>}
          </table>
          {!data?.length &&
            !loading &&
            (isSlotUsed(this.el, "empty-state") ? (
              <slot name="empty-state" />
            ) : (
              <ic-empty-state
                aligned="center"
                heading="No Data"
                class="loading-empty"
              ></ic-empty-state>
            ))}
        </div>
        <ic-loading-indicator
          appearance={loadingOptions?.appearance}
          class={{
            "loading-empty": loading,
            loading: true,
            show: loading,
            "show-background": loadingOptions.showBackground,
          }}
          description={loadingOptions.description || "Loading table data"}
          label={loadingOptions.label || "Loading..."}
          labelDuration={loadingOptions?.labelDuration}
          max={loadingOptions?.max}
          min={loadingOptions?.min}
          progress={loadingOptions?.progress}
        ></ic-loading-indicator>
        {showPagination && (
          <div class="pagination-container">
            <ic-pagination-bar
              totalItems={data.length}
              paginationType={paginationOptions.type}
              paginationControl={paginationOptions.control}
              showItemsPerPageControl={paginationOptions.itemsPerPageControl}
              showGoToPageControl={paginationOptions.goToPageControl}
              itemsPerPageOptions={paginationOptions.itemsPerPage}
              alignment={paginationOptions.alignment}
            ></ic-pagination-bar>
          </div>
        )}
        {sortable && (
          <div class="screen-reader-sort-text" aria-live="polite">
            {sortedColumnOrder !== "unsorted" && sortedColumn
              ? `${sortedColumn} sorted ${sortedColumnOrder}`
              : "table unsorted"}
          </div>
        )}
      </div>
    );
  }
}
