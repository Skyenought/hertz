#!/bin/bash

framework=$1
accept=$2
levels=$3
type=$4
let max_threads=$(nproc)
duration=15

url="http://localhost:8080/${type}"

if [ "$4" == "query" ]; then
  url="http://localhost:8080/${type}/$RANDOM"
fi

echo ""
echo "---------------------------------------------------------"
echo " Running Warmup $framework"
echo " wrk -H "Accept: ${accept}" -H "Connection: keep-alive" --latency -c 512 -d $duration --timeout 8 -t 8 $url "
echo "---------------------------------------------------------"
echo ""
wrk -H "Accept: $accept" -H "Connection: keep-alive" --latency -c 512 -d $duration --timeout 8 -t 8 ${url}
sleep 5

for c in $levels; do
  echo ""
  echo "---------------------------------------------------------"
  echo " Concurrency: $c for $framework"
  echo " wrk -H "Accept: "$accept"" -H "Connection: keep-alive" -d $duration -c $c --timeout 8 -t 8 $url"
  echo "---------------------------------------------------------"
  echo ""

  echo "Benchmark_Config" >> "$framework.log"
  echo "${framework},${type},${c}" >> "$framework.log"
  wrk -s ./benchmark.lua -H "Accept: $accept" -H "Connection: keep-alive" --latency -d $duration -c $c --timeout 8 -t $(($c>$max_threads?$max_threads:$c)) "$url" -- | tee -a "$framework.log"

sleep 2
done


