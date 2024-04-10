import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';
import { Type } from 'class-transformer';
import { DummyOrderByWithRelationAndSearchRelevanceInput } from './dummy-order-by-with-relation-and-search-relevance.input';
import { PaginationInput } from '../prisma/pagination.input';

@ArgsType()
export class FindManyDummyWithPaginationArgs {

    @Field(() => DummyWhereInput, {nullable:true})
    @Type(() => DummyWhereInput)
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    @Type(() => DummyOrderByWithRelationAndSearchRelevanceInput)
    orderBy?: Array<DummyOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PaginationInput, {nullable:true})
    pagination?: PaginationInput;
}
