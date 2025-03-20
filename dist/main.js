"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const express = require("express");
const socket_io_adapter_1 = require("./socket-io.adapter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use('/uploads', express.static('uploads'));
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.useWebSocketAdapter(new socket_io_adapter_1.SocketIoAdapter(app));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('News App')
        .setDescription('News Api')
        .setVersion('1.0.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
        .addSecurityRequirements('access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    app.useGlobalPipes(new common_1.ValidationPipe({ forbidUnknownValues: false }));
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(5002);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map