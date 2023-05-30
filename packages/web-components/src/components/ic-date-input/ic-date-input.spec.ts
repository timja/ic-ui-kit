import { newSpecPage } from "@stencil/core/testing";
import { DateInput } from "./ic-date-input";

describe("ic-date-input component", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<ic-date-input label="Test label"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<ic-date-input label="Test label" required></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render as disabled", async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<ic-date-input label="Test label" disabled></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom helper text", async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<ic-date-input label="Test label" helper-text="Test helper text"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render correctly with MM/DD/YYYY format", async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<ic-date-input label="Test label" date-format="MM/DD/YYYY"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render correctly with YYYY/MM/DD format", async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<ic-date-input label="Test label" date-format="YYY/MM/DD"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom validation status and text", async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<ic-date-input label="Test label" validation-status="error" validation-text="Test error text"></ic-date-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});

describe("event handlers & functions in ic-date-input", () => {
  it("should test the keydown handler", async () => {
    const page = await newSpecPage({
      components: [DateInput],
      html: `<ic-date-input label="Test label"></ic-date-input>`,
    });

    page.root.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "4",
      })
    );

    // const dayInputEl = page.root.shadowRoot.querySelector(
    //   "#ic-date-input-0 > div > input.day-input"
    // );
    // expect(dayInputEl === document.activeElement).toBe(true);
  });
});
