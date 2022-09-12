/**
 * Since `useLoadData` return serialized type which is not exposed,
 * you need to assert the given value to the original expected type.
 * This function asserts the given type to serialized data.
 */
export function getTypeSafeLoadedData<T>(loadedItem: unknown) {
  return loadedItem as T;
}
