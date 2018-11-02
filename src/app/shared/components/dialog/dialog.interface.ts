export interface DialogInterface {
  hideModal();
  setParams(params);
  onCancel(onCancelAction);
  onSubmit(onSubmitAction);
  doSubmit();
  doCancel();
}
