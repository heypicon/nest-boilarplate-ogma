import { NestFactory } from "@nestjs/core";
import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as cookieParser from "cookie-parser";
import * as compression from "compression";
import { AppModule } from "./app.module";
import { setupSwagger } from "./swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const configService = app.get(ConfigService);

  // Setup swagger documentation
  setupSwagger(app);

  // Setup global middlewares
  app.use(compression());
  app.use(cookieParser());

  // Setup global pipes
  app.useGlobalPipes(new ValidationPipe());

  // Setup CORS configuration
  app.enableCors({ origin: "*" });

  // Setup application host and port
  const HOST = configService.get("APP_HOST");
  const PORT = +configService.get("APP_PORT");
  await app.listen(PORT, () => {
    logger.log(`Application hosted on http://${HOST}:${PORT}`);
    logger.log(`Swagger documentation hosted on http://${HOST}:${PORT}/docs`);
  });
}

void bootstrap();
