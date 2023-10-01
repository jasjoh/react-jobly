import { testJobs } from "../__testCommon";
import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { MemoryRouter } from "react-router-dom";

describe("JobCard component", function () {

  it("renders without crashing", function () {
    render(
      <MemoryRouter>
        <JobCard job={testJobs[0]}/>
      </MemoryRouter>
      );

  });

  it("contains expected title", function () {
    const result = render(
      <MemoryRouter>
        <JobCard job={testJobs[0]}/>
      </MemoryRouter>
    );
    expect(
      result.queryByText("Test Title 1")
    ).toBeInTheDocument();
  });
});
