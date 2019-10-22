#!/bin/bash

set -ex
# Register new task definition
TD_ARN=$(./register_task_definition.sh)


# Update service
./update_service.sh $TD_ARN
