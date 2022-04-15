import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CommonModule } from "./modules/common/common.module";
import { AuthModule } from "./modules/domain/auth/auth.module";
import { AnalyticsModule } from "./modules/domain/analytics/analytics.module";
import { ProductsModule } from "./modules/domain/products/products.module";
import { BankAccountsModule } from "./modules/domain/bank-accounts/bank-accounts.module";
import { EventsModule } from "./modules/domain/events/events.module";
import { CoursesModule } from "./modules/domain/courses/courses.module";
import { ContentPricesModule } from "./modules/domain/content-prices/content-prices.module";
import { CategoriesModule } from "./modules/domain/categories/categories.module";
import { CertificatesModule } from "./modules/domain/certificates/certificates.module";
import { OrdersModule } from "./modules/domain/orders/orders.module";
import { PaymentsModule } from "./modules/domain/payments/payments.module";
import { PayoutsModule } from "./modules/domain/payouts/payouts.module";
import { UsersModule } from "./modules/domain/users/users.module";
import { RolesModule } from "./modules/domain/roles/roles.module";
import { DatabaseModule } from "./modules/database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({ expandVariables: true, isGlobal: true }),
    // DatabaseModule,
    CommonModule,
    AnalyticsModule,
    AuthModule,
    BankAccountsModule,
    CategoriesModule,
    CertificatesModule,
    ContentPricesModule,
    CoursesModule,
    EventsModule,
    OrdersModule,
    PaymentsModule,
    PayoutsModule,
    ProductsModule,
    RolesModule,
    UsersModule,
  ],
})
export class AppModule {}
