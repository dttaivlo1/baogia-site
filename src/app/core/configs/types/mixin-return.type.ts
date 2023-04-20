export type ReturnTypeAsync<T extends (...args: any) => any> = T extends (
	...args: any
) => Promise<infer R>
	? R
	: T extends (...args: any) => infer R
	? R
	: any;

export type ReturnType<T extends (...args: any) => any> = T extends (
	...args: any
) => infer R
	? R
	: any;

export type Delegate<T> = (...args: any[]) => T;
