import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DummyEdge } from './dummy-edge.output';
import { Int } from '@nestjs/graphql';
import { PageInfo } from '../prisma/page-info.output';

@ObjectType()
export class DummyConnection {

    @Field(() => [DummyEdge], {nullable:false})
    edges!: Array<DummyEdge>;

    @Field(() => Int, {nullable:true})
    totalCount?: number;

    @Field(() => PageInfo, {nullable:false})
    pageInfo!: PageInfo;
}
