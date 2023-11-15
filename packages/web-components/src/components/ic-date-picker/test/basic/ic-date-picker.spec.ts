import { newSpecPage } from "@stencil/core/testing";
// import { h } from "@stencil/core";
import { DatePicker } from "../../ic-date-picker";
// import { DateInput } from "../../../ic-date-input/ic-date-input";
// import { Button } from "../../../ic-button/ic-button";
// import { Tooltip } from "../../../ic-tooltip/ic-tooltip";
// import { waitForTimeout } from "../../../../testspec.setup";

describe("ic-date-picker", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label"></ic-date-picker>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render small datepicker", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label" size="small"></ic-date-picker>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render large datepicker", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label" size="large"></ic-date-picker>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with today & clear buttons hidden", async () => {
    const page = await newSpecPage({
      components: [DatePicker],
      html: `<ic-date-picker label="Date picker label" show-picker-today-button="false" show-picker-clear-button="false"></ic-date-picker>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  // it("should render with value set - DD/MM/YYYY format", async () => {
  //   const page = await newSpecPage({
  //     components: [DatePicker, DateInput, Button, Tooltip],
  //     html: `<ic-date-picker label="Date picker label" value="28/07/2023"></ic-date-picker>`,
  //   });

  //   // expect(page.root).toMatchSnapshot();

  //   // document.querySelector("#root-inner > ic-date-picker").shadowRoot.querySelector("div.date-input-container > ic-date-input").shadowRoot.querySelector("#calendar-button")

  //   const calendarButton = page.root.shadowRoot.querySelector("ic-date-input").shadowRoot.querySelector("#calendar-button") as HTMLElement;
  //   calendarButton.click();

  //   await page.waitForChanges();

  //   await waitForTimeout(200);
  //   expect(page.root).toMatchSnapshot();

  // });
});
