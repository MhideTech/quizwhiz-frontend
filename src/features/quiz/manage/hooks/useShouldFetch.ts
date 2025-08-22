import { useLocation, useParams } from 'react-router-dom';

export const useShouldFetch = function () {
  const locationState = useLocation().state as { id?: string } | undefined;

  const { id } = useParams<{ id: string }>();
  const shouldFetch = !locationState || locationState.id !== id;

  return { shouldFetch, id, locationState };
};
