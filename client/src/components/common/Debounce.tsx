import {useCallback, useEffect, useState} from "react";
import { UseDebounceProps } from "../../types/Debouncer/types";
export default function useDebounce<T>({ object, delay = 1000}: UseDebounceProps<T>){
  const [value, setValue] = useState<T | undefined>()
  const [isBouncing, setBouncing] = useState(true)

  const computeDelay = useCallback(() => {
    if(!object){
      return 0
    }

    if(object instanceof Array && !object.length){
      return 0;
    }

    if(object instanceof Object && !Object.keys(object).length){
      return 0;
    }

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