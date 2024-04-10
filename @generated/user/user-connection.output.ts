import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserEdge } from './user-edge.output';
import { Int } from '@nestjs/graphql';
import { PageInfo } from '../prisma/page-info.output';

@ObjectType()
export class UserConnection {

    @Field(() => [UserEdge], {nullable:false})
    edges!: Array<UserEdge>;

    @Field(() => Int, {nullable:true})
    totalCount?: number;

    @Field(() => PageInfo, {nullable:false})
    pageInfo!: PageInfo;
}
