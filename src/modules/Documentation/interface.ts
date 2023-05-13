export interface IQueries {
  name: string;
  fields: IField[];
  kind: string;
  inputFields: IArguments[];
}

export interface IField {
  args: IArguments[];
  description: string;
  type: { kind: string; name: string; ofType: { name: string; ofType: { name: string } } };
  name: string;
}

export interface IArguments {
  type: {
    kind: string;
    name: string;
    ofType: {
      name: string;
      ofType: { name: string };
    };
  };
  name: string;
  description: string;
}
