import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationAndSearchRelevanceInput } from './user-order-by-with-relation-and-search-relevance.input';
import { PaginationInput } from '../prisma/pagination.input';

@ArgsType()
export class FindManyUserWithPaginationArgs {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    @Type(() => UserOrderByWithRelationAndSearchRelevanceInput)
    orderBy?: Array<UserOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PaginationInput, {nullable:true})
    pagination?: PaginationInput;
}
