#!/bin/bash


#TODO Update the docker image in the task definition
cp task-definition.json.template task-definition.json
# Register new task defintion
TD_ARN=$(aws ecs register-task-definition --cli-input-json file://task-definition.json --query 'taskDefinition.taskDefinitionArn' --output text)
echo $TD_ARN




 
