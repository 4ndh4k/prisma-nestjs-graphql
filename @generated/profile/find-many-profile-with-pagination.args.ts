import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileOrderByWithRelationAndSearchRelevanceInput } from './profile-order-by-with-relation-and-search-relevance.input';
import { PaginationInput } from '../prisma/pagination.input';

@ArgsType()
export class FindManyProfileWithPaginationArgs {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => [ProfileOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PaginationInput, {nullable:true})
    pagination?: PaginationInput;
}
