# Application Folder Structure

| Folder                        | Description                                                                                                                                                                       |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| src/modules/common            | A module that contains reusable code for guards, filters, pipes that can be used thoughout the application                                                                        |
| src/modules/common/constants  | Store application wide constants here, e.g. auth.constant.ts, jwt.constant.ts                                                                                                     |
| src/modules/common/decorators | Store application wide decorators here, e.g. @User, @Role                                                                                                                         |
| src/modules/common/enums      | Store application wide enums here, e.g. user-role.enum.ts, content-rating.enum.ts                                                                                                 |
| src/modules/common/exceptions | By default nest.js provides default built-in exception classes but if you want custom excepitons then store the custom exception-filters here. e.g. payment-checkout.exception.ts |
| src/modules/common/guards     | Store application wide guards here. e.g. jwt.guard.ts, local.guard.ts, admin.guard.ts                                                                                             |
| src/modules/common/interfaces | Store application wide interfaces here. e.g. IPayment, IUser, IPayout                                                                                                             |
| src/modules/common/services   | Store application wide services here. e.g. aws-s3.service.ts, encryption.service.ts                                                                                               |
| src/modules/database          | Stores seeders, migrations, factories. Get's called after boot up process and syncs with database                                                                                 |
| src/modules/domain            | A module that contains all business releated code                                                                                                                                 |
| src/config                    | Contains application wide configurations. e.g. cors.config.ts, redis.config.ts, smtp.config.ts, etc                                                                               |
| src/assets                    | Contains i18n files, static assets, etc                                                                                                                                           |
| src/views                     | Contains html and email template.                                                                                                                                                 |

## Dependencies

| Name                                            | Purpose                                                            |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| @nestjs-modules/mailer                          | Handles mailing and all smtp related tasks                         |
| @nestjs/axios                                   | Handles extenal API calls                                          |
| @nestjs/config                                  | Handles environment variables retrieval                            |
| nestjs/jwt                                      | Handles JWT authentication                                         |
| passport                                        | Core authentication library                                        |
| passport-jwt                                    | Core jwt-authentication library                                    |
| passport-local                                  | Core local/basic authentication library                            |
| @nestjs/passport                                | Nest.js compatible core passport.js wrapper                        |
| @nestjs/platform-socket.io + @nestjs/websockets | Handles realtime communication via socket.io as a core             |
| @nestjs/schedule                                | Handles time-based/scheduled tasks                                 |
| @nestjs/swagger                                 | Servers the API documentation for clients                          |
| @nestjs/typeorm                                 | Handles migrations, seeding, connections, models snyc for database |
| aws-sdk                                         | Handles all kinds of aws tasks                                     |
| cache-manager                                   | Handles cahcing for any routes. Fully customizable!                |
| class-transformer                               | Transforms request inputs to different type. e.g. 'true' to true   |
| class-validator                                 | Handles request body, query, param validation                      |
| nestjs-i18n                                     | Handles response localization.                                     |
| nestjs-stripe                                   | Handles all kinds of stripe releated tasks                         |
| stripe                                          | Core stripe SDK                                                    |

# Database
### How to create a migration?
```

```
### How to create a seeder?
```

```

### How to create a factory?
```

```

### How to run a migration?
```

```

### How to run all migrations?
```

```

# Docker

### How to run this project locally
```

```

### How to run this project in docker
```

```

# Caching
### How to implement the default caching?
```

```
### How to configure cache-manager?
```

```

# Messages Queue
### How to setup BullMQ?
```

```

# CRON Jobs
### How to schedule a cron job?
```

```

### How to customizable cron jobs?
```
```
