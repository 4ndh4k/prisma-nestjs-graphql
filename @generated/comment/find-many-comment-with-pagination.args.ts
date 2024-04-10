import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { CommentOrderByWithRelationAndSearchRelevanceInput } from './comment-order-by-with-relation-and-search-relevance.input';
import { PaginationInput } from '../prisma/pagination.input';

@ArgsType()
export class FindManyCommentWithPaginationArgs {

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PaginationInput, {nullable:true})
    pagination?: PaginationInput;
}
