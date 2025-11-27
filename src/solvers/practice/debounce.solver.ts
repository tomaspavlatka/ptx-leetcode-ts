export function debounce<T extends (...args: any[]) => any>(
  fn: T, 
  delay: number
): (...args: Parameters<T>) => void {

  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    }
  };
}

const log = debounce((msg: string) => console.log(msg), 300);
log("hello")
