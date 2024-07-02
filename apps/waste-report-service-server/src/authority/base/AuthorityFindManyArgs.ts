/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorityWhereInput } from "./AuthorityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AuthorityOrderByInput } from "./AuthorityOrderByInput";

@ArgsType()
class AuthorityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AuthorityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AuthorityWhereInput, { nullable: true })
  @Type(() => AuthorityWhereInput)
  where?: AuthorityWhereInput;

  @ApiProperty({
    required: false,
    type: [AuthorityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AuthorityOrderByInput], { nullable: true })
  @Type(() => AuthorityOrderByInput)
  orderBy?: Array<AuthorityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AuthorityFindManyArgs as AuthorityFindManyArgs };
