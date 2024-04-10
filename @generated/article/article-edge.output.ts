import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Article } from './article.model';

@ObjectType()
export class ArticleEdge {

    @Field(() => Article, {nullable:false})
    node!: Article;

    @Field(() => String, {nullable:false})
    cursor!: string;
}
