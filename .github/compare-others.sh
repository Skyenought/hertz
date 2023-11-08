#!/bin/bash
# $1 webframework $2=header $3=concurrent
web_frameworks=("hertz" "fiber")
benchmark_types=("plaintext" "json" "query")
concurrent=(128 256 512 1024 2048 4096)

plaintext_header="text/plain"
json_header="application/json"
query_header="application/json"
headers=("$plaintext_header" "$json_header" "$query_header")

if [ ! -f go.mod ]; then
  # create go.mod
  echo "module compare" > go.mod
  echo "go 1.19" >> go.mod

  # pull all the dependencies
  go get -u github.com/cloudwego/hertz
  go get -u github.com/gofiber/fiber/v2

  mv hertz.txt hertz.go
  mv fiber.txt fiber.go

  go mod tidy
  go build -o hertz hertz.go
  go build -o fiber fiber.go
fi


run_benchmarks() {
  declare -i n=0
  for framework in "${web_frameworks[@]}"; do
    touch "$framework.log"

    echo "Running $framework ..."
    nohup ./$framework &
    sleep 2

    for type in "${benchmark_types[@]}"; do
      echo "$framework" "${headers[$n]}" "${concurrent[@]}" "$type"
      bash ./query.sh "$framework" "${headers[$n]}" "${concurrent[*]}" "$type"
      let n++
      if [ $n -eq 3 ]; then
        unset n
        n=0
        pkill -9 $framework
        echo "kill $framework, sleep 30s"
        sleep 30
      fi
    done
  done
}

make clear
run_benchmarks

touch "result.csv"

for framework in "${web_frameworks[@]}"; do
  python3 ./parse_data.py "$framework.log" "result.csv"
done

python3 render_images.py result
