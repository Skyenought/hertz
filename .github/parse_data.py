import sys

CONFIG_KEY = "Benchmark_Config"
RESULT_KEY = "Benchmark_Result"
RESULT_LINE_NUM = 5


def is_config(line):
    return CONFIG_KEY in line


def is_result(line):
    return RESULT_KEY in line


def parse_config(line):
    l = line.rstrip("\n").split(",")
    return l


def parse_result(lines):
    result = []
    for line in lines:
        result += [line.split(",")[1].rstrip("\n")]
    return result[:-2]


def parse(input_str: str, output_str: str):
    ret = []
    with open(input_str, 'r') as f:
        lines = f.readlines()
        config, result = [], []
        for i in range(len(lines)):
            line = lines[i]
            if is_config(line):
                config = parse_config(lines[i + 1])
                i += 2
            if is_result(line):
                result = parse_result(lines[i + 1:i + RESULT_LINE_NUM + 1])
                ret += [','.join(config + result)]
                i += RESULT_LINE_NUM + 1
    
    with open(output_str, 'a') as f:
        for line in ret:
            f.write(line)
            f.write('\n')


if __name__ == '__main__':
    if len(sys.argv) > 2:
        input = sys.argv[1]
        output = sys.argv[2]
        parse(input, output)
    else:
        print("Please provide input and output")
