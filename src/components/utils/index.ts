export function isFunction(func: unknown): func is Function {
  return typeof func === 'function';
}

export function throttle<Func extends (...args: any[]) => any>(func: Func, delay = 500) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastTime = 0;

  return function _throttle(content: unknown, ...args: Parameters<Func>) {
    const context = content;
    const currentTime = Date.now();

    if (currentTime - lastTime > delay) {
      func.apply(context, args);
      timer !== null && clearTimeout(timer);
      timer = null;
      lastTime = Date.now();
    } else if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args);
        timer = null;
        lastTime = Date.now();
      }, delay);
    }
  };
}
