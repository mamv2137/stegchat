import { useMemo } from 'react';

const useSelector = (state, mapStateToSelectors) => {
  const selectors = useMemo(() => mapStateToSelectors(state), [state]);
  return selectors;
};

export default useSelector;
