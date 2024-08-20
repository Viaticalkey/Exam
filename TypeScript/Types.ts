function identity<Type>(arg: Type): Type {
	return arg;
}

let output = identity("myString"); // TypeScript infers the type automatically
