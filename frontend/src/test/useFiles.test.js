import axios from "axios";
import { renderHook, act } from "@testing-library/react";

import { useFiles } from "../hooks/use-files";

jest.mock("axios");

// Mocked data
const files = ["file1.csv", "file2.csv", "file3.csv"];
const file1 = {
  file: "file1.csv",
  lines: {
    test: "Testing",
    number: 1,
    hex: "FAFAF8",
  },
};
const file2 = {
  file: "file2.csv",
  lines: {
    test: "Jest",
    number: 3,
    hex: "F1FA48",
  },
};
const filesData = [file1, file2];

describe("Test useFiles hook", () => {
  it("Fetch files lists", async () => {
    const { result } = renderHook(() => useFiles());

    axios.get.mockResolvedValueOnce({ data: { data: files, message: "Ok" } });

    expect(result.current.loading).toEqual(true);

    await act(async () => {
      await result.current.handleFetchList();
    });

    expect(result.current.fileList).toEqual(files);
    expect(result.current.loading).toEqual(false);
  });

  it("Fetch files data", async () => {
    const { result } = renderHook(() => useFiles());

    axios.get.mockResolvedValueOnce({
      data: { data: filesData, message: "Ok" },
    });

    expect(result.current.loading).toEqual(true);

    await act(async () => {
      await result.current.handleFetchData();
    });

    expect(result.current.data).toEqual(filesData);
    expect(result.current.loading).toEqual(false);
  });

  it("Fetch files data with query param", async () => {
    const { result } = renderHook(() => useFiles());

    axios.get.mockResolvedValueOnce({
      data: { data: [file1], message: "Ok" },
    });

    expect(result.current.loading).toEqual(true);

    await act(async () => {
      await result.current.handleFetchData("file1.csv");
    });

    expect(result.current.data).toEqual([file1]);
    expect(result.current.loading).toEqual(false);
  });
});
