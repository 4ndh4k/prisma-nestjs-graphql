import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleOrderByWithRelationAndSearchRelevanceInput } from './article-order-by-with-relation-and-search-relevance.input';
import { PaginationInput } from '../prisma/pagination.input';

@ArgsType()
export class FindManyArticleWithPaginationArgs {

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ArticleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PaginationInput, {nullable:true})
    pagination?: PaginationInput;
}
