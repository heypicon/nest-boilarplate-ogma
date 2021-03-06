import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthUser = createParamDecorator((data, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const user = request.user;

  return data ? user?.[data] : user;
});
