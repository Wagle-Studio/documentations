export interface ApiResponseSuccess<S> {
  success: true;
  message?: string;
  data: S;
}

export interface ApiResponseFail<F> {
  success: false;
  message: string;
  data?: F;
}

export type ApiResult<S, F> = ApiResponseSuccess<S> | ApiResponseFail<F>;

export type Course = string;

export type Lesson = string;