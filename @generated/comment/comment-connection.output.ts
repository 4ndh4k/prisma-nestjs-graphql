import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentEdge } from './comment-edge.output';
import { Int } from '@nestjs/graphql';
import { PageInfo } from '../prisma/page-info.output';

@ObjectType()
export class CommentConnection {

    @Field(() => [CommentEdge], {nullable:false})
    edges!: Array<CommentEdge>;

    @Field(() => Int, {nullable:true})
    totalCount?: number;

    @Field(() => PageInfo, {nullable:false})
    pageInfo!: PageInfo;
}
