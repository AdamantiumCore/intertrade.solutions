import { useCallback, useEffect, useState } from "react";
import { UseDebounceProps } from "@/hooks/Debouncer/types";

export default function useDebounce<T>({ object, delay = 1000 }: UseDebounceProps<T>) {
  const [value, setValue] = useState<T | undefined>()
  const [isBouncing, setBouncing] = useState(true)

  const computeDelay = useCallback(() => {
    return delay
  }, [delay, object]);

  useEffect(() => {
    setBouncing(true)
    const timeout = setTimeout(() => {
      setValue(object)
      setBouncing(false)
    }, computeDelay())

    return () => {
      clearTimeout(timeout)
    }
  }, [computeDelay, delay, object]);

  return {
    value,
    isBouncing
  };
}