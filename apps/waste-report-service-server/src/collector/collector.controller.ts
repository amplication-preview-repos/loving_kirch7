import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CollectorService } from "./collector.service";
import { CollectorControllerBase } from "./base/collector.controller.base";

@swagger.ApiTags("collectors")
@common.Controller("collectors")
export class CollectorController extends CollectorControllerBase {
  constructor(
    protected readonly service: CollectorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
