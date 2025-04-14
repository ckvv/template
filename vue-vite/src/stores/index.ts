import { useSignStore } from './sign';

export async function initStores() {
  const signStore = useSignStore();
  await signStore.fetchUserInfo();
}

export {
  useSignStore,
};
