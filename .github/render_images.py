import sys

import matplotlib.pyplot as plt

kind = "http"


# 0-name, 1-category, 2-concurrency, 3-size, 4-qps, 5-p99, 6-p999
def parse_data(file):
    import csv
    csv_reader = csv.reader(open(file))
    lines = []
    for line in csv_reader:
        lines.append(line)
    x_label, x_ticks = parse_x(lines=lines)
    print(x_label, x_ticks)
    
    categories = set([line[1] for line in lines])
    for category in categories:
        y_qps = parse_y(lines=lines, idx=3, category_filter=category)
        if y_qps:
            plot_data(
                title="TPS (higher is better) - " + category,
                x_label=x_label, y_label="tps", x_ticks=x_ticks,
                ys=y_qps, category=category
            )
        
        y_p99 = parse_y(lines=lines, idx=4, times=1, category_filter=category)
        if y_p99:
            plot_data(
                title="TP99 (lower is better) - " + category,
                x_label=x_label, y_label="latency(us)",
                x_ticks=x_ticks, ys=y_p99, category=category
            )
        
        y_p999 = parse_y(lines=lines, idx=5, times=1, category_filter=category)
        if y_p999:
            plot_data(
                title="TP999 (lower is better) - " + category,
                x_label=x_label, y_label="latency(us)",
                x_ticks=x_ticks, ys=y_p999, category=category
            )


# Correct the parse_x function to use concurrency as x-axis
def parse_x(lines):
    concurrency_index = 2
    x_list = list(set([line[concurrency_index] for line in lines]))
    x_list.sort(key=int)
    return "concurrency", x_list


# Modify the parse_y function to filter data by category
def parse_y(lines, idx, times=1, category_filter=None):
    y_dict = {}
    for line in lines:
        name, category = line[0], line[1]
        if len(line) > idx and (category_filter is None or category == category_filter):
            y_line = y_dict.get(name, [])
            n = float(line[idx]) * times
            y_line.append(int(n))
            y_dict[name] = y_line
    return y_dict


# Add the missing plot_data function
def plot_data(title, x_label, y_label, x_ticks, ys, category):
    plt.figure(figsize=(8, 5))
    plt.title(title)
    plt.xlabel(x_label)
    plt.ylabel(y_label)
    plt.xticks(range(len(x_ticks)), x_ticks)
    
    for k, v in ys.items():
        plt.plot(v, label=k, linewidth=2)
    
    bottom, top = plt.ylim()
    plt.ylim(bottom=0, top=1.2 * top)
    
    if ys:
        plt.legend(prop={'size': 12})
        plt.savefig(f"{title.split(' ')[0].lower()}_{category}.png")
    else:
        print(f"No data for {title}")


if __name__ == '__main__':
    if len(sys.argv) > 1:
        kind = sys.argv[1]
    parse_data(file=f"{kind}.csv")
