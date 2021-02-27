// CloudWatch Alarm for 70% CPU Threshold on EC2

// call AWS SDK
var AWS = require('aws-sdk');

// define region
AWS.config.update({region: /* Example: 'us-west-2'*/});

// define API version
var cw = new AWS.CloudWatch({apiVersion: /* Example: '2010-08-01'*/});

// define parameters
var params = {
  AlarmName: '70_Percent_CPU_Utilization', 
  ComparisonOperator: 'GreaterThanThreshold',
  EvaluationPeriods: 1,
  MetricName: 'CPUUtilization',
  Namespace: 'AWS/EC2',
  Period: 60,
  Statistic: 'Average',
  Threshold: 70.0,
  ActionsEnabled: false,
  AlarmDescription: 'Alarm when server CPU exceeds 70%',
  Dimensions: [
    {
      Name: /* define EC2 name here */,
      Value: /* define EC2 ID here */
    },
  ],
  Unit: 'Seconds'
};

// pass paremeters, error and data into alarm method
cw.putMetricAlarm(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
