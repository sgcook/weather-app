import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("Forecast Summary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "600",
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    expect(getByText("Thu Jan 01 1970")).toBeInTheDocument();
    expect(getByText("Stub description")).toBeInTheDocument();
    expect(getByTestId("forecast-icon")).toBeInTheDocument();
    expect(getByText("22°C")).toBeInTheDocument();
  });
});
