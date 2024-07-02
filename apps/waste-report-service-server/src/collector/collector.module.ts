import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CollectorModuleBase } from "./base/collector.module.base";
import { CollectorService } from "./collector.service";
import { CollectorController } from "./collector.controller";
import { CollectorResolver } from "./collector.resolver";

@Module({
  imports: [CollectorModuleBase, forwardRef(() => AuthModule)],
  controllers: [CollectorController],
  providers: [CollectorService, CollectorResolver],
  exports: [CollectorService],
})
export class CollectorModule {}
