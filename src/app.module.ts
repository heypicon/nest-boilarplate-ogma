import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { I18nModule } from 'nestjs-i18n';
import { join } from 'path';
import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ expandVariables: true, isGlobal: true, cache: true }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, 'assets', 'lang'),
        watch: true,
      },
    }),
    CommonModule,
    AuthModule,
  ],
})
export class AppModule {}
