import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  /**
   * Expert authentication routes
   */
  @Get('expert/signin')
  async signinExpertWithEmail() {}

  @Post('expert/signup')
  async signupExpertWithEmail() {}

  /**
   * Admin authentication routes
   */
  @Post('admin/signin')
  async signinAdminWithEmailPassword() {}

  /**
   * User authentication routes
   */
  @Post('user/signup')
  async signupUserWithEmailPassword() {}

  @Post('user/signin')
  async signinUserWithEmailPassword() {}

  /**
   * Forgot password route for experts and app users
   */
  @Post('forgot-password')
  async forgotAccountPassword() {}

  /**
   * Reset password route for experts and app users
   */
  @Post('reset-password')
  async resetAccountPassword() {}
}
