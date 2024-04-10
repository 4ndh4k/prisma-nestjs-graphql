import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { Type } from 'class-transformer';
import { TagOrderByWithRelationAndSearchRelevanceInput } from './tag-order-by-with-relation-and-search-relevance.input';
import { PaginationInput } from '../prisma/pagination.input';

@ArgsType()
export class FindManyTagWithPaginationArgs {

    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PaginationInput, {nullable:true})
    pagination?: PaginationInput;
}
