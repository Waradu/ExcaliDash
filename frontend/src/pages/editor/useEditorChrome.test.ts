import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useEditorChrome } from "./useEditorChrome";

describe("useEditorChrome", () => {
  beforeEach(() => {
    document.title = "Original Title";
  });

  it("updates document title and restores app title on unmount", () => {
    const { rerender, unmount } = renderHook(
      ({ drawingName }) =>
        useEditorChrome({
          drawingName,
        }),
      { initialProps: { drawingName: "Roadmap" } }
    );

    expect(document.title).toBe("Roadmap - ExcaliDash");

    rerender({ drawingName: "Architecture" });
    expect(document.title).toBe("Architecture - ExcaliDash");

    unmount();
    expect(document.title).toBe("ExcaliDash");
  });
});
