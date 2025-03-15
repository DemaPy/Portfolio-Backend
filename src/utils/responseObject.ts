export interface ResponseInterface {
  data: any;
  status?: number;
  message?: string;
}

export const responseObject = ({
  data,
  status,
}: ResponseInterface): ResponseInterface => ({
  data,
  status: status ?? 200,
  message: 'Success',
});
