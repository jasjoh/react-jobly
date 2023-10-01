import { testCompanies } from "../__testCommon";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router-dom";

describe("CompanyCard component", function () {

  it("renders without crashing", function () {
    render(
    <MemoryRouter>
      <CompanyCard company={testCompanies[0]}/>
    </MemoryRouter>);
  });

  it("contains expected title", function () {
    const result = render(
      <MemoryRouter>
        <CompanyCard company={testCompanies[0]}/>
      </MemoryRouter>);
    expect(
      result.queryByText("Test Company 1")
    ).toBeInTheDocument();
  });
});
