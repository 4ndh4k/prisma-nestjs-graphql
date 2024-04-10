import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TagEdge } from './tag-edge.output';
import { Int } from '@nestjs/graphql';
import { PageInfo } from '../prisma/page-info.output';

@ObjectType()
export class TagConnection {

    @Field(() => [TagEdge], {nullable:false})
    edges!: Array<TagEdge>;

    @Field(() => Int, {nullable:true})
    totalCount?: number;

    @Field(() => PageInfo, {nullable:false})
    pageInfo!: PageInfo;
}
