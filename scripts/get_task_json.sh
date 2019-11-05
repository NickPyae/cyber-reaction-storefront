#!/bin/bash
TASK_FAMILY=$1
AWS_DEFAULT_REGION=ap-southeast-1

#Script to get current task definition, and based on that add new ecr image address to old template and remove attributes that are not needed, then we send new task definition, get new revision number from output and update service
TASK_DEFINITION=$(aws ecs describe-task-definition --task-definition "$TASK_FAMILY" --region "$AWS_DEFAULT_REGION")
NEW_TASK_DEFINITION=$(echo $TASK_DEFINITION | jq '.taskDefinition | del(.taskDefinitionArn) | del(.revision) | del(.status) | del(.requiresAttributes) | del(.compatibilities)')
echo $NEW_TASK_DEFINITION | jq .
