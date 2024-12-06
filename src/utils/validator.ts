export type ValidatorType = 'email' | 'url' | 'userID' | 'password' | 'phone' | 'empty';

export interface ValidatorProps<T> {
  value: T;
  type?: ValidatorType;
  rule?: RegExp;
}

const pattern: Record<ValidatorType, RegExp> = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&/=]*)/g,
  userID: /^[a-z0-9]{4,20}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
  phone: /^\d{3}-\d{4}-\d{4}$/,
  empty: /^(?!\s*$).+$/,
};

export const validator = <T>({ value, type, rule }: ValidatorProps<T>): boolean => {
  /** Custom Rule 사용 */
  if (rule) {
    return Boolean(String(value).match(rule));
  }

  /** Defined Pattern 사용 */
  if (type) {
    return Boolean(String(value).match(pattern[type]));
  }

  return false;
};
