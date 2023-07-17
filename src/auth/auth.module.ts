import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    // se eu quiser adicionar tudo padrão é só importar o módulo. Pra adicionar uma chave de segurança, é só adicionar o método register
    JwtModule.register({
      secret: "(%-}]-'-5Ph=@3GuQZX]Mv)2$%KgPf?)",
    }),
    UserModule,
    PrismaModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
