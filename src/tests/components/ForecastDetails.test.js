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
      <ForecastDetails
        forecast={validProps.forecast}
        date={validProps.forecast.date}
        humidity={validProps.forecast.humidity}
        temperature={validProps.forecast.temperature}
        wind={validProps.forecast.wind}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
