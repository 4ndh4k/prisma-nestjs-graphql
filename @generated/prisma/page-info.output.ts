import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {

    @Field(() => Boolean, {nullable:false})
    hasNextPage!: boolean;

    @Field(() => Boolean, {nullable:false})
    hasPreviousPage!: boolean;

    @Field(() => String, {nullable:true})
    startCursor?: string;

    @Field(() => String, {nullable:true})
    endCursor?: string;
}
