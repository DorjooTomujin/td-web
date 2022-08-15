import { CacheModule, Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { AuthModule } from './resource/auth/auth.module';
import { UserModule } from './resource/user/user.module';
import { CareerModule } from './resource/career/career.module';

@Global()
@Module({
  imports: [
    CacheModule.register({
      ttl: 900,
      isGlobal: true
    }),
    ConfigModule.forRoot({
      envFilePath: [
        process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production',
      ],
      load: [configuration],
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    CareerModule
  ],
  providers: [],
  exports: [CacheModule]
})
export class AppModule  {
  
}
