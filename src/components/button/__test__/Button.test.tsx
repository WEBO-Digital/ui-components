import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../Button";
import React from "react";

describe("Button", () => {
  it("renders correctly", () => {
    const { container } = render(<Button>Click Me</Button>);
    const button = container.firstChild;

    expect(button).not.toBeNull();
    if (button instanceof HTMLButtonElement) {
      expect(button.className).toContain("bg-violet-500");
      expect(button.className).toContain("text-white");
      expect(button.className).toContain("rounded-md");
      expect(button.className).toContain("px-4");
    }
  });

  it("renders correctly with left icon", () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>}>Click Me</Button>,
    );

    expect(container).toMatchSnapshot();
    expect(container.textContent).toContain("👈");
  });

  it("renders correctly with right icon", () => {
    const { container } = render(
      <Button rightIcon={<span>👉</span>}>Click Me</Button>,
    );

    expect(container).toMatchSnapshot();
    expect(container.textContent).toContain("👉");
  });

  it("renders correctly with both icons", () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>} rightIcon={<span>👉</span>} />,
    );

    expect(container.textContent).toContain("👈");
    expect(container.textContent).toContain("👉");
  });

  it("renders correctly with label", () => {
    const { container } = render(<Button label="Click Me" />);

    expect(container.textContent).toContain("Click Me");
  });

  it("renders correctly with label and left icon", () => {
    const { container } = render(
      <Button
        label="Click Me"
        leftIcon={<span>👈</span>}
        rightIcon={<span>👉</span>}
      />,
    );

    expect(container.textContent).toContain("Click Me");
    expect(container.textContent).toContain("👈");
    expect(container.textContent).toContain("👉");
  });

  it("render correctly with size prop", () => {
    const { container } = render(<Button size="default" />);
    const button = container.firstChild;

    expect(button).not.toBeNull();
    if (button instanceof HTMLElement) {
      expect(button.className).toContain("text-base");
    }

    const { container: containerSmall } = render(<Button size="small" />);
    const { container: containerLarge } = render(<Button size="large" />);

    const { container: containerXXL } = render(<Button size="xxl" />);
    const buttonSmall = containerSmall.firstChild;
    const buttonLarge = containerLarge.firstChild;
    const buttonXXL = containerXXL.firstChild;

    expect(buttonSmall).not.toBeNull();
    if (buttonSmall instanceof HTMLElement) {
      expect(buttonSmall.className).toContain("text-sm");
    }
    if (buttonLarge instanceof HTMLElement) {
      expect(buttonLarge.className).toContain("text-lg");
    }
    if (buttonXXL instanceof HTMLElement) {
      expect(buttonXXL.className).toContain("text-2xl");
    }
  });

  it("render correctly with rounded prop", () => {
    const { container } = render(<Button rounded="full" />);
    const buttonBase = container.firstChild;

    const { container: containerLg } = render(<Button rounded="lg" />);
    const buttonLg = containerLg.firstChild;

    const { container: containerNone } = render(<Button rounded="none" />);
    const buttonNone = containerNone.firstChild;

    const { container: containerXL } = render(<Button rounded="xl" />);
    const buttonXL = containerXL.firstChild;

    const { container: containerXXL } = render(<Button rounded="xxl" />);
    const buttonXXL = containerXXL.firstChild;

    const { container: containerDefault } = render(
      <Button rounded="default" />,
    );
    const buttonDefault = containerDefault.firstChild;

    const { container: containerSM } = render(<Button rounded="sm" />);
    const buttonSM = containerSM.firstChild;

    expect(container).toMatchSnapshot();
    expect(containerLg).toMatchSnapshot();
    expect(containerNone).toMatchSnapshot();
    expect(containerXL).toMatchSnapshot();
    expect(containerXXL).toMatchSnapshot();
    expect(containerDefault).toMatchSnapshot();
    expect(containerSM).toMatchSnapshot();

    if (buttonBase instanceof HTMLElement) {
      expect(buttonBase.className).toContain("rounded-full");
    }
    if (buttonLg instanceof HTMLElement) {
      expect(buttonLg.className).toContain("rounded-lg");
    }
    if (buttonNone instanceof HTMLElement) {
      expect(buttonNone.className).toContain("rounded-none");
    }
    if (buttonXL instanceof HTMLElement) {
      expect(buttonXL.className).toContain("rounded-xl");
    }
    if (buttonXXL instanceof HTMLElement) {
      expect(buttonXXL.className).toContain("rounded-2xl");
    }
    if (buttonDefault instanceof HTMLElement) {
      expect(buttonDefault.className).toContain("rounded-md");
    }
    if (buttonSM instanceof HTMLElement) {
      expect(buttonSM.className).toContain("rounded-sm");
    }
  });

  it("render correctly with buttonType prop", () => {
    const { container: containerPrimary } = render(
      <Button buttonType="primary" />,
    );
    const buttonPrimary = containerPrimary.firstChild;

    const { container } = render(<Button buttonType="secondary" />);
    const buttonSecondary = container.firstChild;

    const { container: containerWarning } = render(
      <Button buttonType="warning" />,
    );
    const buttonWarning = containerWarning.firstChild;

    const { container: containerOutline } = render(
      <Button buttonType="outline" />,
    );
    const buttonOutline = containerOutline.firstChild;

    const { container: containerDisabled } = render(
      <Button buttonType="disabled" />,
    );
    const buttonDisabled = containerDisabled.firstChild;

    const { container: containerError } = render(<Button buttonType="error" />);
    const buttonError = containerError.firstChild;

    expect(container).toMatchSnapshot();
    expect(containerPrimary).toMatchSnapshot();
    expect(containerWarning).toMatchSnapshot();
    expect(containerOutline).toMatchSnapshot();
    expect(containerDisabled).toMatchSnapshot();
    expect(containerError).toMatchSnapshot();

    if (buttonPrimary instanceof HTMLElement) {
      expect(buttonPrimary.className).toContain("bg-violet-500");
      expect(buttonPrimary.className).toContain("text-white");
      expect(buttonPrimary.className).toContain("border-violet-500");
      expect(buttonPrimary.className).toContain("hover:bg-violet-600");
    }
    if (buttonSecondary instanceof HTMLElement) {
      expect(buttonSecondary.className).toContain("bg-gray-200");
      expect(buttonSecondary.className).toContain("text-gray-600");
      expect(buttonSecondary.className).toContain("border-gray-200");
      expect(buttonSecondary.className).toContain("hover:bg-gray-300");
    }
    if (buttonWarning instanceof HTMLElement) {
      expect(buttonWarning.className).toContain("bg-yellow-500");
      expect(buttonWarning.className).toContain("text-white");
      expect(buttonWarning.className).toContain("border-yellow-500");
      expect(buttonWarning.className).toContain("hover:bg-yellow-600");
    }
    if (buttonOutline instanceof HTMLElement) {
      expect(buttonOutline.className).toContain("bg-white");
      expect(buttonOutline.className).toContain("text-gray-600");
      expect(buttonOutline.className).toContain("hover:bg-gray-100");
      expect(buttonOutline.className).toContain("border");
      expect(buttonOutline.className).toContain("hover:border-gray-100");
      expect(buttonOutline.className).toContain("border-gray-300");
      expect(buttonOutline.className).toContain("hover:shadow-md");
    }
    if (buttonDisabled instanceof HTMLElement) {
      expect(buttonDisabled.className).toContain("bg-black");
      expect(buttonDisabled.className).toContain("text-white");
      expect(buttonDisabled.className).toContain("border-black");
      expect(buttonDisabled.className).toContain("cursor-not-allowed");
    }
    if (buttonError instanceof HTMLElement) {
      expect(buttonError.className).toContain("bg-red-500");
      expect(buttonError.className).toContain("text-white");
      expect(buttonError.className).toContain("border-red-500");
      expect(buttonError.className).toContain("hover:bg-red-600");
    }
  });
});
