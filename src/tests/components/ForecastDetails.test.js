import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("Forecast Details", () => {
  const validProps = {
    forecast: {
      date: 1111111,
      temperature: {
        min: 12,
        max: 22,
      },
      wind: {
        speed: 13,
        direction: "s",
      },
      humidity: 30,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails forecast={validProps.forecast} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
