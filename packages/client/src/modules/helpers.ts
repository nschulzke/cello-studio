type Callback<T = undefined, R = void> = (value: T) => R;

const onChangeInput = <T extends object>(key: keyof T, start: T, onChange: Callback<T>) => (event: React.FormEvent<HTMLInputElement>) => {
  onChange(Object.assign({}, start, { [key]: event.currentTarget.value }));
}

export { Callback, onChangeInput }
