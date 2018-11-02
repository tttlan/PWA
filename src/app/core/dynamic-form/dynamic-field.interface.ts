export interface Validator {
  name: string;
  validator: any;
  message?: string;
}
export interface DynamicFieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: Array<any>;
  collections?: any;
  type: string;
  value?: any;
  col?: number;
  classList?: string;
  validations?: Validator[];
}
