import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProfileEdge } from './profile-edge.output';
import { Int } from '@nestjs/graphql';
import { PageInfo } from '../prisma/page-info.output';

@ObjectType()
export class ProfileConnection {

    @Field(() => [ProfileEdge], {nullable:false})
    edges!: Array<ProfileEdge>;

    @Field(() => Int, {nullable:true})
    totalCount?: number;

    @Field(() => PageInfo, {nullable:false})
    pageInfo!: PageInfo;
}
