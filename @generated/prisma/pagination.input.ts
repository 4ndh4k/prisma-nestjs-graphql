import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {

    @Field(() => String, {nullable:true})
    before?: string;

    @Field(() => String, {nullable:true})
    after?: string;

    @Field(() => Int, {nullable:true})
    first?: number;

    @Field(() => Int, {nullable:true})
    last?: number;
}
