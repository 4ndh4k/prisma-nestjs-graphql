import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArticleEdge } from './article-edge.output';
import { Int } from '@nestjs/graphql';
import { PageInfo } from '../prisma/page-info.output';

@ObjectType()
export class ArticleConnection {

    @Field(() => [ArticleEdge], {nullable:false})
    edges!: Array<ArticleEdge>;

    @Field(() => Int, {nullable:true})
    totalCount?: number;

    @Field(() => PageInfo, {nullable:false})
    pageInfo!: PageInfo;
}
