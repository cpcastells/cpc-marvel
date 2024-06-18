import { act, renderHook } from "@testing-library/react";
import useDebounce from "../useDebounce";
import { vi } from "vitest";

describe("Given a useDebounce hook", () => {
  describe("When it is called,", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    test("should debounce and only change value when delay time has passed", async () => {
      let value = "0";
      const { result, rerender } = renderHook(
        ({ value }) => useDebounce(value, 1000),
        {
          initialProps: { value },
        },
      );

      expect(result.current).toBe("0");

      const incrementAndPassTime = async (increment: number, time: number) => {
        value = (parseInt(value) + increment).toString();
        rerender({ value });
        await vi.advanceTimersByTimeAsync(time);
      };

      await incrementAndPassTime(1, 100);
      expect(result.current).toBe("0");

      await incrementAndPassTime(1, 500);
      expect(result.current).toBe("0");

      await incrementAndPassTime(1, 999);
      expect(result.current).toBe("0");

      await act(async () => {
        await vi.advanceTimersByTime(1);
      });

      expect(result.current).toBe("3");
    });
  });
});
