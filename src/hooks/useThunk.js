import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  //useCallback to prevent reEvaluate
  const runThunk = useCallback(
    (args, onSuccess) => {
      setLoading(true);
      dispatch(thunk(args))
        .unwrap()
        .then(() => {
          if (onSuccess) {
            onSuccess();
          }
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [dispatch, thunk]
  );

  return [runThunk, loading, error];
};
