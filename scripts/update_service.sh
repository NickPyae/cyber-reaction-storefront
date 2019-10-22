#!/usr/bin/env bash
set -ex

TD_REVISION=$1

# Replace revision in template
sed "s|<TD_ARN>|${TD_REVISION}|g" update-service.skeleton.json.template > update-service.skeleton.json

# Run aws cli update service command
aws ecs update-service --cli-input-json file://update-service.skeleton.json



