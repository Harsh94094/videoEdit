import { PartialType } from '@nestjs/swagger';
import { CreateSubcripationPlanDto } from './create-subcripation-plan.dto';

export class UpdateSubcripationPlanDto extends PartialType(CreateSubcripationPlanDto) {}
