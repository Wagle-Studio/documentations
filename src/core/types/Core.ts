export interface CoreResultSuccess<S> {
  success: true;
  message?: string;
  data: S;
}

export interface CoreResultFail<F> {
  success: false;
  message: string;
  data?: F;
}

export type CoreResult<S, F = null> = CoreResultSuccess<S> | CoreResultFail<F>;