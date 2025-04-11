import { ref, toValue } from 'vue';

interface Options {
  handler: (...args: any[]) => Promise<unknown>;
  onFetchFinally?: (data?: any) => any;
  initialData?: any;
}

export function useFetch(options: Options) {
  const { handler, initialData, onFetchFinally } = options;
  const isFinished = ref(true);
  const isFetching = ref(false);
  const data = ref(initialData);
  const error = ref();
  const execute = async () => {
    isFetching.value = true;
    return handler().then((result) => {
      data.value = result;
    }).catch((err) => {
      error.value = err;
    }).finally(() => {
      isFinished.value = true;
      isFetching.value = false;
      if (onFetchFinally) {
        onFetchFinally(toValue(data));
      }
    });
  };

  return {
    execute,
    isFinished,
    isFetching,
    data,
    error,
  };
};
