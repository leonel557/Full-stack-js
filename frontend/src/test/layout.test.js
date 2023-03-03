import { render } from "@testing-library/react";

import Layout from "../components/Layout";
import SelectSection from "../components/SelectSection";

describe("Render Components", () => {
  it("Should render Layout", () => {
    const component = render(<Layout />);
    const titleElement = component.getByText("React Frontend App");

    expect(titleElement).toBeInTheDocument();
  });

  it("Should render Layout with children", () => {
    const component = render(
      <Layout>
        <p>This is my Child</p>
      </Layout>
    );
    const titleElement = component.getByText("This is my Child");

    expect(titleElement).toBeInTheDocument();
  });

  it("Render Select with options", () => {
    const data = ["file1", "file2", "file3"];
    const component = render(
      <SelectSection data={data} value="" onChange={() => {}} />
    );
    const optionText = component.getByText("file1");

    expect(optionText).toBeInTheDocument();
  });

  it("Render Select without options", () => {
    const component = render(
      <SelectSection data={[]} value="" onChange={() => {}} />
    );
    const optionText = component.getByText("No options");

    expect(optionText).toBeInTheDocument();
  });
});
